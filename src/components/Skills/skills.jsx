import React from 'react'

function skills() {
    const skill = [
        {
          title: "Languages",
          languages: ["TypeScript", "Lua", "Python", "JavaScript"],
        },
        { title: "Databases", languages: ["SQLite", "PostgreSQL", "Mongo"] },
        {
          title: "Tools",
          languages: [
            "VSCode",
            "Neovim",
            "Linux",
            "Figma",
            "XFCE",
            "Arch",
            "Git",
            "Font Awesome",
          ],
        },
        {
          title: "Other",
          languages: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
        },
        {
          title: "Frameworks",
          languages: [
            "React",
            "Vue",
            "Disnake",
            "Discord.js",
            "Flask",
            "Express.js",
          ],
        },
      ];
  return (
   <section>
    <div className=" mt-[5%]">
  <div data-aos="fade-down" className="top flex items-center gap-2 ">
      <h2 className="  flex items-center gap-1  ">
        <span className="text-color_Three text-30">#</span> <span className='capitalize text-26 text-white_color'>skills</span>
       </h2>
       <div className="bar w-[600px] h-[2px] bg-color_Three"> </div>
   </div>
   <div className="flex 1015:flex-row flex-col items-center justify-between  mt-[10%] gap-10">
    <div data-aos="fade-down" className="1015:w-[35%] mx-auto w-[70%] ">
        <img src={require("../../img/shapes.png")} className='' alt="" />
    </div>
    <div data-aos="fade-up"  className=" grid 700:grid-cols-3 500:grid-cols-2 grid-cols-1   1015:flex 1015:justify-end   1015:flex-wrap 1015:w-1/2 gap-4">
            {skill.map(({ title, languages ,index}) => {
              return (
                <>
                  <div className=" 1015:w-[30%] border border-[#ABB2BF]" key={index}>
                    <div className=" p-2">
                      <h2 className=" font-semibold">{title}</h2>
                    </div>
                    <div className="flex flex-wrap  border-t border-[#ABB2BF]  p-2 text-[#ABB2BF]">
                      {languages.map((e) => {
                        return <span>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>

   </div>
  </div>
   </section>
  )
}

export default skills