import React from 'react'
import img1 from "../Data/img/Rectangle 22 (1).png"
import img2 from "../Data/img/Rectangle 22.jpg"
import img3 from "../Data/img/Rectangle 22.png"

function Projects() {

    const Project = [
        {
          img: img1,
          language: "[HTML,SCSS,Python flask]",
          title: "ChertNodes",
          disc: "Minecraft service hosting",
        },
        {
          img: img2,
          language: "[React express discord.js node.js HTML,SCSS,Python flask]",
          title: "protectx",
          disc: "discord anti-crash bot",
        },
        {
          img: img3,
          language: "[React express discord.js node.js HTML,SCSS,Python ]",
          title: "kahoot answers viewer",
          disc: "git answers to your kahoot quiz",
        },
      ];
  return (
   <section>
   <div data-aos="fade-down" className="top flex items-center gap-2 ">
   <h2 className="  flex items-center gap-1  ">
        <span className="text-color_Three text-30">#</span> <span className='capitalize text-26 text-white_color'>projects</span>
    </h2>
    <div className="bar w-[600px] h-[2px] bg-color_Three"> </div>
   </div>
   <div data-aos="fade-up" className="grid 1100:grid-cols-3 800:grid-cols-2 gap-6 mt-10  ">
    {Project.map((work,index)=>{
       return(
        < >
      <div className=' border-[2px] rounded-[2px] border-color_Two'>
      <div key={index} className=''>
            <div className="">
                <img src={work.img} alt="" />
            </div>
           <div className="p-3">
           <h2 className="my-3 text-color_Two">
                {work.language}
            </h2>
            <h2 className="text-22 capitalize text-white_color">
                {work.title}
            </h2>
            <p className="my-3 text-color_Two capitalize">{work.disc}</p>
            <div className="button">
                <button className='px-[15px] py-[10px] border-[2px] text-color_Two border-color_Two hover:bg-color_Two hover:text-first_color font-semibold duration-300'>live {"<"}~{">"}</button>
            </div>
           </div>
        </div>
      </div>
       
        </>
       )
    })}
   </div>
   </section>
  )
}

export default Projects