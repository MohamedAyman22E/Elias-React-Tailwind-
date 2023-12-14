import React from 'react'

function Hero() {
  return (
    <section className="" id='home'>
            <div className='flex flex-col-reverse 700:flex-row items-center gap-5 justify-between 1200:mt-[15%] 1000:mt-[20%] mt-[30%]'>
                <div data-aos="fade-up" className="left 700:w-[70%]">
                    <h2 className="text-18 360:text-22 470:text-30 text-white_color font-bold tracking-spacing">Elias is a <span className=" text-color_Three">web designer </span> and <span className="text-color_Three">front-end developer  </span></h2>
                    <p className="text-color_Two capitalize my-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatum.</p>
                    <button className=" px-[15px] py-[7px] border rounded-[2px] border-color_Three text-white_color tracking-spacing hover:bg-color_Three hover:text-white_color duration-300">contact me!!</button>
                    </div>
                <div data-aos="fade-down" className="right 700:w-[30%]">
                    <img src={require("./img/man.png")} alt="" />
                    <div className=" border border-color_Three flex items-center gap-2 p-2">
                      <div className="w-4 h-4 bg-color_Three"></div>
                      <h3 className="text-color_Two">currently working on <span className="text-white">portfolio</span></h3>
                    </div>
                </div>
        </div>
        <img  data-aos="fade-down" src={require("./img/quote.png")} className='1400:w-[30%] 1200:w-[40%] 1000:w-[50%] 900:w-[60%] w-[70%] mx-auto mt-8' alt="" />
    </section>
  )
}

export default Hero