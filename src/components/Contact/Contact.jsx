import React from 'react'
import img1 from "./img/Discord.png"
import img2 from "./img/Email.png"

const Contact = () => {
  return (
    <section id='contact'>
       <div data-aos="fade-up" className="top flex items-center gap-2 ">
   <h2 className="  flex items-center gap-1  ">
        <span className="text-color_Three text-30">#</span> <span className='capitalize text-26 text-white_color'>contacts</span>
    </h2>
    <div className="bar w-[600px] h-[2px] bg-color_Three"> </div>
   </div>
   <div className="flex 1000:flex-row items-center gap-10 flex-col mt-10">
    <div data-aos="fade-up"  className="1000:w-[50%]">
        <h2 className="text-color_Two">
        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
        </h2>
    </div>
    <div data-aos="fade-down"  className="1000:w-[50%] w-[100%]">
        <div className="1000:w-[45%]  500:w-[50%] w-[80%]  p-3 mx-auto border border-color_Two ">
            <h3 className=" text-white_color capitalize">
                message on here
            </h3>
            <ul className="">
                <li className="flex items-center gap-2"><img src={img1} className='w-[20%]' alt="" /> <span className="text-color_Two">Elias#1234</span></li>
                <li className="flex items-center gap-2"><img src={img2} className='w-[20%]' alt="" /> <span className="text-color_Two">elias@elias.me</span></li>

            </ul>
        </div>
    </div>
   </div>

    </section>
  )
}

export default Contact