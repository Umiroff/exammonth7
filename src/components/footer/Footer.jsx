import React from 'react'
import '../footer/Footer.css'
import  logo  from "../../assets/Icon.svg";

function Footer() {
  return (
    <>
        <div className='footer'>
        <img src={logo} alt="" className='footer_logoimg'/>
        <h2 className='footer_logo'>E-Comm</h2>
        <p className='footer_logotext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>

        <h2 className='footer_fol'>Follow us</h2>
        <p className='footer_foltext'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>

        <h2 className='footer_con'>Contact us</h2>
        <p className='footer_context'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>

        <div className='footer_b'>
          <ul>
            <li className='footer_b_text'>Information</li>
            <li className='footer_b_text2'>About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions</li>
          </ul>

          <ul>
            <li className='footer_b_text'>Service</li>
            <li className='footer_b_text2'>About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions</li>
          </ul>

          <ul>
            <li className='footer_b_text'>My Account</li>
            <li className='footer_b_text2'>About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions</li>
          </ul>

          <ul>
            <li className='footer_b_text'>Our Offers</li>
            <li className='footer_b_text2'>About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions</li>
          </ul>
        </div>
        </div>
    </>
  )
}

export default Footer