import React from 'react'

const About = () => {
  return (
    <section className='mt-10' id='about'>
     <div data-aos="fade-down" className="top flex  items-center gap-2  ">
   <h2 className="  flex items-center gap-1  ">
        <span className="text-color_Three text-30">#</span> <span className='capitalize text-26 text-white_color'>about-me</span>
    </h2>
    <div className="bar w-[600px] h-[2px] bg-color_Three"> </div>
   </div>
   <div className="flex items-center gap-7 mt-6 1000:flex-row flex-col-reverse">
    <div data-aos="fade-down" className="left 1000:w-[50%]">
    <p className="text-color_Two  ">
              Hello, i’m Elias!
              <br />
              <br />
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <button className='capitalize mt-4 px-[15px] py-[10px] border-[2px] text-color_Two border-color_Two hover:bg-color_Two hover:text-first_color font-semibold duration-300'>read more{"<"}~{">"}</button>
    </div>
    <div data-aos="fade-up" className="right 1000:w-[50%]">
        <img src={require("../../img/man2.png")} className='1000:w-[50%] mx-auto' alt="" />
    </div>
   </div>
    </section>
  )
}

export default About