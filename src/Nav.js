import React,{useEffect,useState} from 'react';
import './Nav.css';

function Nav(){
   const [show, handelshow] = useState(false);
   useEffect(() => {
      window.addEventListener('scroll',()=>{
         if(window.scrollY>100){
            handelshow(true);
         }
         else{
            handelshow(false);
         }
      })
      return () => {
         window.removeEventListener("scroll",()=>{

         });
      };
   }, [])


   return (
     <div className={`nav ${show && "nav_black"}`}>
       <img src='./ott-logo.jpg' alt='ott-logo' className='nav_logo' />
       <img
         src='./user.png'
         alt='user'
         className='nav_user'
       />
     </div>
   )
}

export default Nav;