import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import '../admin/Admin.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const navigate = useNavigate()
    
  return (
    <>
    <div className='admin'>
        <Navbar />
        <div className='admin_main'>
            <h2>Admin Panel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi quibusdam earum, dolor et laudantium aliquid quia eveniet, at debitis exercitationem neque, inventore harum maxime assumenda corporis doloremque deserunt quas nesciunt sed vero sequi similique! Quidem, atque! Ipsa magnam minus sint totam nesciunt odio, inventore atque quo non nihil libero ratione quas quidem sed. Eaque illo architecto in a fugit, dolorum dolores quas perspiciatis debitis cupiditate sint eos impedit? Ducimus quaerat nemo enim exercitationem minima similique labore voluptatibus voluptas, aspernatur consequatur accusamus rerum cum suscipit, necessitatibus sunt veniam debitis ut officiis nihil impedit blanditiis vitae! Illo doloribus distinctio quibusdam nihil. <br /> <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus possimus, neque dignissimos accusantium provident laudantium saepe dolorem soluta cupiditate nulla sequi quaerat amet quia harum sapiente optio fugit alias. Ea ab voluptatem quidem voluptas eum repudiandae nesciunt enim perferendis architecto mollitia? Eos maiores ipsa dolores iste corrupti cupiditate animi delectus, nostrum perferendis nesciunt hic tempore error! Dolorem, fugit odio optio natus illum qui! Porro, facere voluptatum! Aspernatur natus neque quas architecto, doloribus quidem quia quae excepturi incidunt expedita, sint asperiores laboriosam quibusdam at, voluptates inventore fuga error blanditiis ipsum veritatis. Maxime quidem consequatur facere et, cupiditate quo minima soluta atque. <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nam repudiandae at ipsa corrupti tempora totam dignissimos. Neque inventore debitis quasi eligendi asperiores odit rem fugit sint magni vero facere illum fuga molestiae, voluptatem perferendis, voluptates officiis quos. Libero, alias voluptatibus cumque dicta magnam consectetur culpa itaque, vero praesentium saepe tempore expedita iste. Quae deserunt praesentium temporibus esse aspernatur magni nulla nostrum recusandae dolor odio officia impedit molestias, molestiae vel doloremque ab ducimus repudiandae itaque nam tenetur nemo suscipit unde eligendi? Doloribus eum adipisci quam commodi mollitia eos enim provident, consequatur reiciendis iste culpa labore atque officia illo. Non, impedit? <br /><br /></p>
            <Button style={{width: 300, height: 50,fontSize: 25}} variant="contained"onClick={() => navigate('/sign-up')}>Log Out</Button>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Admin