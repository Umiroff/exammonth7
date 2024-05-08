import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../basket/Basket.css'
import { decCart, incCart, removeFromCart } from '../../context/cartSlice'
import { CiCircleRemove } from "react-icons/ci";
import Empty from '../empty/Empty';
import { Box, Button, Modal, Typography } from '@mui/material';

const BOT_TOKEN = '6622199888:AAHqsCKSs5d6awvfxhjAqvQmnBy1_kcCPjI'

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

    const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
    
  



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
        <input value={username} placeholder='Name' onChange={((e)=> setUsername(e.target.value))} className='mod_inp' type="text" />
        <input value={password} placeholder='Phone' onChange={((e)=> setPassword(e.target.value))} className='mod_inp'  type="number" />
        <Button variant="contained" style={{width: 400, height: 50, border: 0}}>Go to Payment</Button>
      </form>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default memo(Basket)