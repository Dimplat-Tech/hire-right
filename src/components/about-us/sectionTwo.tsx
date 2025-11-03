// import React from "react"
// import Image from "next/image";



// const SectionTwo =() =>(
 
// <div className="flex items-center  justify-center gap-20 md:max-w-[90%] lg:max-w-[100%] h-[600px] sm:col-1"  >
//     <div className=" min-h-[404px] max-w-[730px] md:max-w-[90%] lg:max-w-[100%]  ">
//         <div className=" w-full sm:max-w-[100%]">
//             <h1 className="text-[60px] text-[#F27933] font-500 leading-[100%]  sm-text[20px]">Our Vision</h1>
//             <p className="lg:text-[16px] text-[#060606] leading-10 pt-5 md:text-[14px] max-w-4xl md:mt-4">To shape the future of work by building
//                 exceptional teams that drive innovation, <br />
//                 growth, and lasting impact.
//              </p>
//         </div>
//         <div>
//             <h1 className="text-[60px] text-[#F27933] font-500  leading-[100%] pt-5">Our Mission</h1>
//             <p className="text-[16px] leading-10 text-[#060606] pt-5">To connect businesses with top-tier talent through strategic,
//               people-first recruitment<br /> and end-to-end HR solutions. 
//             </p>
//         </div>
//     </div>

//     <div className="relative w-96 h-80 ">
//             <div className="relative z-20">
//               {/*Main Image */}
//                <Image src="/img/aboutUs/hr2.png" alt="proffesional team" width={400} height={300} className="w-full h-72 object-cover rounded-3xl shadow-xl relative z-20" />
//               </div>   
     

//                  {/* decorative blue line */}
//             <div className="absolute -bottom-2 -left-8 w-32 h-1.5 bg-blue-600 rounded-full z-30"></div>

            
//             {/* Decorative Orange Line */}
//             <div className="absolute -top-2 right-8 w-20 h-1.5 bg-orange-500 rounded-full z-30"></div>
            
            
            
            
//         </div>
// </div>
// )
// export default SectionTwo;


import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="mx-auto w-[92%] md:w-[88%] lg:w-[84%] py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="max-w-3xl">
          <div className="w-full">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#F27933]  font-space grotesk  font-[60px] font-[500] leading-[1.05]">
              Our Vision
            </h2>
            <p className="mt-4 md:mt-5 text-[#060606] text-base md:text-lg leading-relaxed font-manrope font-[18px] font-[400]">
              To shape the future of work by building exceptional teams that
              drive innovation, growth, and lasting impact.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#F27933] font-[500] leading-[1.05] font-space grotesk font-[60px]">
              Our Mission
            </h2>
            <p className="mt-4 md:mt-5 text-[#060606] text-base md:text-lg leading-relaxed font-manrope font-[18px] font[400]">
              To connect businesses with top-tier talent through strategic,
              people-first recruitment and end-to-end HR solutions.
            </p>
          </div>
        </div>

        {/* Image + decorations */}
        <div className="relative max-w-md w-full mx-auto">
          {/* Main image (keeps aspect ratio and scales) */}
          {/* <div className="relative w-full aspect-[4/3] z-20">
            <Image
              src="/img/aboutUs/hr2.png"
              alt="Professional HR team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover rounded-3xl shadow-xl"
              priority
            />
          </div> */}


          <div className=" max-w-[600px] w-full m-auto rotate-0  md:rotate-7 ">
                  <Image
                    src="/img/landing/about-1.svg"
                    alt="Team group"
                    width={487}
                    height={437}
                    // objectFit="cover"/
                    className="rounded-2xl mx-auto"
          
                  />
                </div>

          
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;