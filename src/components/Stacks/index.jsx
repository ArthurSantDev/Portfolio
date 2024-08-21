// Stack Constant
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import './index.css'

const one = '[';
const two = '] ;';

const index = () => {

   useEffect(() => {
      ScrollReveal().reveal('.const-stacks', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        reset: false,
        interval: 200
      });
    }, []);

  return (
   <div class="const-stacks">
      <div className="const-text-one">
        <p class="p-pink"> const </p>
        <p class="p-green"> Staks </p>
        <p class="p-pink"> = </p>
        <p class="p-white">{one}</p>
      </div>
      <div class="stacks">
         <div class="stacks-slide">
             <img src="/assets/stacks/dribbble.svg"/>
             <img src="/assets/stacks/figma.svg"/>
             <img src="/assets/stacks/html.svg"/>
             <img src="/assets/stacks/css.svg"/>
             <img src="/assets/stacks/javascript.svg"/>
             <img src="/assets/stacks/typescript.svg"/>
             <img src="/assets/stacks/vite-js.svg"/>
             <img src="/assets/stacks/react.svg"/>
             <img src="/assets/stacks/react-router.svg"/>
             <img src="/assets/stacks/nextjs.svg"/>
             <img src="/assets/stacks/vue.svg"/>
             <img src="/assets/stacks/redux.svg"/>
             <img src="/assets/stacks/scrollreveal.svg"/>
             <img src="/assets/stacks/mui.svg"/>
             <img src="/assets/stacks/tailwind.svg"/>
             <img src="/assets/stacks/sass.svg"/>
             <img src="/assets/stacks/bootstrap.svg"/>
             <img src="/assets/stacks/font-awesome.svg"/>
             <img src="/assets/stacks/python.svg"/>
             <img src="/assets/stacks/node.svg"/>
             <img src="/assets/stacks/nodemon.svg"/>
             <img src="/assets/stacks/axios.svg"/>
             <img src="/assets/stacks/express.svg"/>
             <img src="/assets/stacks/mongodb.svg"/>
             <img src="/assets/stacks/mysql.svg"/>
             <img src="/assets/stacks/powerbi.svg"/>
             <img src="/assets/stacks/git.svg"/>
             <img src="/assets/stacks/github.svg"/>
             <img src="/assets/stacks/gitlab.svg"/>
             <img src="/assets/stacks/vercel.svg"/>
         </div>
         <div class="stacks-slide">
            <img src="/assets/stacks/dribbble.svg"/>
            <img src="/assets/stacks/figma.svg"/>
            <img src="/assets/stacks/html.svg"/>
            <img src="/assets/stacks/css.svg"/>
            <img src="/assets/stacks/javascript.svg"/>
            <img src="/assets/stacks/typescript.svg"/>
            <img src="/assets/stacks/vite-js.svg"/>
            <img src="/assets/stacks/react.svg"/>
            <img src="/assets/stacks/react-router.svg"/>
            <img src="/assets/stacks/nextjs.svg"/>
            <img src="/assets/stacks/vue.svg"/>
            <img src="/assets/stacks/redux.svg"/>
            <img src="/assets/stacks/scrollreveal.svg"/>
            <img src="/assets/stacks/mui.svg"/>
            <img src="/assets/stacks/tailwind.svg"/>
            <img src="/assets/stacks/sass.svg"/>
            <img src="/assets/stacks/bootstrap.svg"/>
            <img src="/assets/stacks/font-awesome.svg"/>
            <img src="/assets/stacks/python.svg"/>
            <img src="/assets/stacks/node.svg"/>
            <img src="/assets/stacks/nodemon.svg"/>
            <img src="/assets/stacks/axios.svg"/>
            <img src="/assets/stacks/express.svg"/>
            <img src="/assets/stacks/mongodb.svg"/>
            <img src="/assets/stacks/mysql.svg"/>
            <img src="/assets/stacks/powerbi.svg"/>
            <img src="/assets/stacks/git.svg"/>
            <img src="/assets/stacks/github.svg"/>
            <img src="/assets/stacks/gitlab.svg"/>
            <img src="/assets/stacks/vercel.svg"/>
         </div>
         <div class="const-text-two">
            <p class="p-white">{two}</p>
         </div>
     </div>
   </div>
  )
}

export default index