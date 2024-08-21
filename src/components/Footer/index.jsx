import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { HiOutlineCode } from "react-icons/hi"; 
import { BiCheckShield } from "react-icons/bi"; 
import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 
 
import './index.css'

const index = () => {

  useEffect(() => {
    ScrollReveal().reveal('.footer-bar', {
      origin: 'top',
      distance: '60px',
      duration: 1000,
      reset: false,
      interval: 200
    });
  }, []);

  return (
    <div id='Footer' className="Container">
      <div className="Footer">
        {/* <div className="footer-grid">
          <div className="footer-grid-1">
            <h1>Onde me encontrar</h1>
            <a href="">Behance</a>
            <a href="">Behance</a>
            <a href="">Behance</a>
            <a href="">Behance</a>
          </div>
          <div className="footer-grid-2">
            <h1>Por onde me encontrar</h1>
            <a href="">Behance</a>
            <a href="">Behance</a>
            <a href="">Behance</a>
            <a href="">Behance</a>
          </div>
        </div> */}

        <div className="footer-center">
          <div className='footer-bar shadow'>
            <a href="https://www.linkedin.com/in/devarthursant" target="_blank">
              <AiFillLinkedin className='footer-bar-link'/>
            </a>
            <a href="https://github.com/ArthurSantDev" target="_blank" >
              <AiFillGithub className='footer-bar-link'/>
            </a>
            <a href="https://wa.me/5524988638508" target="_blank">
              <FaWhatsapp className='footer-bar-link'/>
            </a>
            <a href="mailto:DevArthurSant@gmail.com" target="_blank">
              <MdEmail className='footer-bar-link'/>
            </a>
          </div>
          <p class="footer-copy">
            <a href="https://github.com/ArthurSantDev" target="_blank" class="footer__copy-link">&#169;2024 Arthur Sant. All right reserved.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default index