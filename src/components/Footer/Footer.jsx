import React from 'react'

const Footer = () => {

  return (
   <div className='border-t-[2px] border-color_Two mt-[30px]'>
     <section className='pt-10'>
        <div className="flex items-center justify-between">
            <div  className="left">
                <div  className="flex items-center gap-10">
                <div className="logo flex flex-row items-center gap-2 ">  
            <img  src={require("./img/Logo.png")} className='w-[30px]' alt="" />
             <span className='text-white_color text-20'>Elias</span>
            </div>
          
            <div  className="">
                <h2 className=' text-color_Two'>elias@elias.me</h2>
            </div>
                </div>
                <p className="text-white_color mt-6">
            Web designer and front-end developer based in Ukraine
            </p>
            </div>
            <div className="right text-center">
                <h2 className="capitalize text-white_color">media</h2>
                <ul className="flex items-center">
                    <li><img src={require("./img/Figma.png")} alt="" /></li>
                    <li><img src={require("./img/Github.png")} alt="" /></li>
                    <li><img src={require("./img/Logo.png")} alt="" /></li>
                </ul>
            </div>
        </div>
    </section>
   </div>
  )
}

export default Footer