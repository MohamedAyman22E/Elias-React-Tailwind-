import React ,{useState,useEffect} from 'react'
import { RiMenu3Line } from "react-icons/ri";
import Aos from 'aos';
import "aos/dist/aos.css"


function Navbar() {
  const [open,setOpen]=useState(false)
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <>
      <div data-aos="fade-down" className='py-5 bg-first_color fixed w-[100%] px-[10%] z-[1000]'>
        <div className=" flex flex-row items-center justify-between   ">
            <div className="logo flex flex-row gap-2 ">  
            <img src={require("./img/Logo.png")} alt="" />
             <span className='text-white_color text-20'>Elias</span>
            </div>
            <div className='' >
                <ul  className={open? " navList  left-[0px]" :" navList  left-[-100%]"}>
                    <li className="capitalize text-color_Two text-18 group "><a href="#home" className=' group-hover:text-color_Three duration-200'><span className="text-color_Three mr-1 ">#</span>Home</a></li>
                    <li className="capitalize text-color_Two text-18 group "><a href="#about" className=' group-hover:text-color_Three duration-200'><span className="text-color_Three mr-1">#</span>about</a></li>
                    <li className="capitalize text-color_Two text-18 group "><a href="#home" className=' group-hover:text-color_Three duration-200'><span className="text-color_Three mr-1">#</span>about me</a></li>
                    <li className="capitalize text-color_Two text-18 group "><a href="#contact" className=' group-hover:text-color_Three duration-200'><span className="text-color_Three mr-1">#</span>contact</a></li>
                  
                </ul>
            </div>
            <button className=" text-color_Two text-22 cursor-pointer 630:hidden" onClick={()=>setOpen(!open)}>
                <RiMenu3Line/>

            </button>
        </div>
        </div> 
    </>
  )
}
export default Navbar