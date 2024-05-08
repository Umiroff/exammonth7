import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../basket/Basket.css'
import { clearCart, decCart, incCart, removeFromCart } from '../../context/cartSlice'
import { CiCircleRemove } from "react-icons/ci";
import Empty from '../empty/Empty';
import { Box, Button, Modal, Typography } from '@mui/material';
import { PatternFormat } from 'react-number-format';

const BOT_TOKEN = '6622199888:AAHqsCKSs5d6awvfxhjAqvQmnBy1_kcCPjI'
const CHAT_ID = '-4108697716'

// updates: https://api.telegram.org/bot6622199888:AAHqsCKSs5d6awvfxhjAqvQmnBy1_kcCPjI/getUpdates

//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1050,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


function Basket() {
    const carts = useSelector(state => state.cart.value)
    let total = useSelector(state => state.cart.total)
    const dispatch = useDispatch()
    for (let i = 0; i < carts?.map(e => e.quantity*e.price). length; i++) { total += carts?.map(e => e.quantity*e.price)[i]; }
    
    let order = carts?.map(e => `${e.title} %0A quantity: ${e.quantity} %0A price: ${e.price} %0A`)
    
    const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')


    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
    const handleOrder = (e) => {
        e.preventDefault();
        let text = ''
        text += `${username} `
        text += `wants to buy some things %0A Give call: ${phone} %0A ${order}  %0A total: ${total}`
        let url =  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`

        
        let api = new XMLHttpRequest()
        api.open('GET', url, true)
        api.onload = function() {
            if (api.status >= 200 && api.status < 300) {
              const response = JSON.parse(api.responseText);
              console.log(response);
            } else {
              console.error('Request failed with status:', api.status);
            }
          };
          
          api.onerror = function() {
            console.error('Request failed');
          };
          
          api.send();
          dispatch(clearCart())
          handleClose()
    }
  



    let items = carts?.map((el) => (
        <div key={el.id} className='cart_card'>
            <img src={el.thumbnail} alt="" />
            <div className='cart_card_part'>
                <CiCircleRemove className='remove_icon' onClick={() => dispatch(removeFromCart(el))}/>
                <p>$ {el.price*el.quantity}</p>
                <div className='cart_card_btns'>
                    <button disabled={el.quantity === 1} onClick={() => dispatch(decCart(el))}>-</button>
                    <p>{el.quantity}</p>
                    <button onClick={() => dispatch(incCart(el))}>+</button>
                </div>
                <p>$ {el.price}</p>
            </div>
        </div>        
    ))

  return (
    <>
    {carts.length ? 
    <div className='cart'>
        <div className='cart_titles'>
            <p>PRODUCT</p>
            <div>
                <p>PRICE</p>
                <p>QTY</p>
                <p>UNIT PRICE</p>
            </div>
        </div>
        {items} 
        <div className='cart_bottom'>
            <div className='cart_coupon'><input type="text" className='coupon_inp'/><Button variant="contained" style={{width: 200, height: 50, border: 0, marginTop: -15}}>REDEEM</Button></div>
            <div className='cart_total'>
                <div>
                    <p>Subtotal :</p>
                    <p>Shipping fee :</p>
                    <p>Coupon :</p>
                </div>
                <div>
                    <p>$ {total}</p>
                    <p>$ 20</p>
                    <p>No</p>
                </div>
                <div className='cart_total_sum'>
                    <p>Total :</p>
                    <p>$ {total + 20}</p>
                </div>
                <Button onClick={handleOpen} variant="contained" style={{width: 400, height: 50, border: 0}}>CheckOut</Button>
            </div>
        </div>
    </div>
    : <Empty/>}

<div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h2 style={{color: 'deepskyblue', fontSize: 40}}>Make Payment</h2>
        <form className='mod_form'>
        <input required value={username} placeholder='Name' onChange={((e)=> setUsername(e.target.value))} className='mod_inp' type="text" />
        <PatternFormat required value={phone} onChange={((e)=> setPhone(e.target.value))} className='mod_inp' format="+998 (##) ###-##-##" allowEmptyFormatting mask='_' valueIsNumericString={true} />
        <Button onClick={handleOrder} variant="contained" style={{width: 400, height: 50, border: 0}}>Go to Payment</Button>
      </form>
        <p style={{fontSize: 20}}>Ustoz faqat bot siz korsatgan usul bilan ishlamadi shuning ucun boshqacaro qildm internetdan organib. Bu gurpada mahsulotlar keladi botdan: https://t.me/+q8_yBxd4JbxiNWUy</p>
        </Box>
      </Modal>
    </div>
    </>
  )
}


export default Basket