import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { BiPlus } from "react-icons/bi"; 
import { Link } from 'react-router-dom'
import './index.css'
import '../../Global/Global.css'

import { FaGithubAlt } from "react-icons/fa"; 
import { IoMdEyeOff } from "react-icons/io"; 
import { IoMdEye } from "react-icons/io"; 

const index = () => {

    useEffect(() => {
        const revealSettings = {
          distance: '100px',
          duration: 1000,
          reset: true,
          interval: 200
        };
      
        ScrollReveal().reveal('.project', {
          ...revealSettings,
          origin: 'left'
        });
      
        if (window.innerWidth > 768) { // Ajuste o tamanho conforme necessário
          ScrollReveal().reveal('.reverse', {
            ...revealSettings,
            origin: 'right'
          });
        } else {
          // Para telas menores, sem animação ou com origem diferente
          ScrollReveal().reveal('.reverse', {
            ...revealSettings,
            origin: 'left'
          });
        }
      }, []);

  return (
    <div id='Projects' className='container'>
        <section className="projects">
            <h1 className='Title'>
                Best Projects
            </h1> 

            <div class="project reverse">
                <div class="project-about">
                    <div>
                        <h2 class="att">Beats</h2>
                        <p>
                            Landing Page para marca Beats, possuindo animações dinamicas por meio da tecnologia
                            ScrollReveal.Js, UX/UI Design moderno e responsivo para divérsos tamanhos de Smartphones.
                        </p>
                    </div>
                    <div class="stack-icons">
                        <img src="/assets/stacks/vite-js.svg"/>
                        <img src="/assets/stacks/react.svg"/>
                        <img src="/assets/stacks/scrollreveal.svg"/>
                        <img src="/assets/stacks/javascript.svg"/>
                        <img src="/assets/stacks/sass.svg"/>
                        <img src="/assets/stacks/css.svg"/>
                        <img src="/assets/stacks/github.svg"/>
                    </div>
                    <div className='button-project-section'>
                        <div class="button-project github-btn">
                            <a href="https://github.com/ArthurSantDev/Beats" target='_blank'>
                                <FaGithubAlt />
                                <p>Github</p>
                            </a>
                        </div>
                        <div class="button-project deploy-btn">
                            <a href="https://beats-arthur.vercel.app/" target='_blank'>
                                <IoMdEye />
                                <p>Deploy</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-img">
                    <img src="/assets/projects/Beats.png"/>
                </div>
            </div>

            <div class="project">
                <div class="project-about">
                    <div>
                        <h2 class="att">Nike Store</h2>
                        <p>
                            E-comerce com estética e produtos da Nike que possui sua base em Vite JS, React Js e Tailwind.
                            Responsivo para dispositivos, com tema Dark e 'carrinho' que é atualizado de acordo com quantidade e tamanho.
                        </p>
                    </div>
                    <div class="stack-icons">
                        <img src="/assets/stacks/vite-js.svg"/>
                        <img src="/assets/stacks/react.svg"/>
                        <img src="/assets/stacks/javascript.svg"/>
                        <img src="/assets/stacks/tailwind.svg"/>
                        <img src="/assets/stacks/font-awesome.svg"/>
                        <img src="/assets/stacks/github.svg"/>
                    </div>
                    <div className='button-project-section'>
                        <div class="button-project github-btn">
                            <a href=" https://github.com/ArthurSantDev/Nike " target='_blank'>
                                <FaGithubAlt />
                                <p>Github</p>
                            </a>
                        </div>
                        <div class="button-project deploy-btn">
                            <a href="https://nike-air.vercel.app/" target='_blank'>
                                <IoMdEye />
                                <p>Deploy</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-img">
                    <img src="/assets/projects/Nike.png"/>
                </div>
            </div>

            <div class="project reverse">
                <div class="project-about">
                    <div>
                        <h2 class="att">Mern.In</h2>
                        <p>
                            Aplicação que utiliza do pack MERN de stacks para sua estruturação. oAuth de usuário, permitindo cadastro
                            de suas informações no banco de dados (MongoDB) e armazenando o Store de suas atividades a partir da biblioteca
                            Redux.
                        </p>
                    </div>
                    <div class="stack-icons">
                        <img src="/assets/stacks/redux.svg"/>
                        <img src="/assets/stacks/react.svg"/>
                        <img src="/assets/stacks/javascript.svg"/>
                        <img src="/assets/stacks/mui.svg"/>
                        <img src="/assets/stacks/node.svg"/> 
                        <img src="/assets/stacks/mongodb.svg"/>
                        <img src="/assets/stacks/express.svg"/>
                    </div>
                    <div className='button-project-section'>
                    <div class="button-project github-btn">
                        <a href=" https://github.com/ArthurSantDev/Mern.In " target='_blank'>
                            <FaGithubAlt />
                            <p>Github</p>
                        </a>
                    </div>
                    <div class="button-project deploy-btn cant-btn">
                        <a target='_blank'>
                            <IoMdEyeOff />
                            <p>Deploy</p>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="project-img">
                    <img src="/assets/projects/Mern.png"/>
                </div>
            </div>
        </section>
        
        <Link to='projects'>
            <button className="routes-button button shadow">
               <i><BiPlus /></i> SEE MORE PROJECTS 
            </button>
        </Link>
    </div>
  )
}

export default index