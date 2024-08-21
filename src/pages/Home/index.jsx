import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 

import './index.css'
import AnimatedText from '../../components/Anim'
import ConstStacks from '../../components/Stacks'
import Skills from '../../components/Skills'

const index = () => {
  return (
    <div id='Home'>
      <div id="Home-container">
        <div className="profile-section">
          <div className='profile'>

            <AnimatedText />

              <div class="social shadow">
                  <a href="https://www.linkedin.com/in/devarthursant" target="_blank">
                    <AiFillLinkedin className='icon'/>
                  </a>
                  <a href="https://github.com/ArthurSantDev" target="_blank">
                    <AiFillGithub className='icon'/>
                  </a>
                  <a href="https://wa.me/5524988638508" target="_blank">
                    <FaWhatsapp className='icon'/>
                  </a>
                  <a href="mailto:DevArthurSant@gmail.com" target="_blank">
                    <MdEmail className='icon'/>
                  </a>
              </div>

            <ConstStacks />

          </div>
        </div>

        <Skills />

      </div>
    </div>
  )
}

export default index