// import React from "react";

// const SectionThree = () => (
//   <div className="h-[600px] flex items-center justify-center w-[100%] ">

//     <form action="">
//       <h3 className="text-[#003780] text-[60px] leading[100%] text-center pb-20">Our people solution</h3>
  
//       <div className="flex items-center justify-between gap-20 ">
//     <div
//   className="relative p-[2px] rounded-md"
//   style={{ background: 'linear-gradient(to right, #003780, #f27933)' }}
// >
//   <div className="absolute -top-27 -left-1 px-3 text-[94px] font-semibold z-10">
//     <span className="text-[#003780]">1.</span>
//   </div>
//   <div className="bg-white rounded-md">
//     <input
//       type="text"
//       defaultValue="END-TO-END RECRUIMENT"
//       className="w-[552px] h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606]"
//     />
//   </div>
// </div>


//    <div
//   className="relative p-[2px] rounded-md"
//   style={{ background: 'linear-gradient(to left, #003780, #f27933)' }}
// >
//   <div className="absolute -top-27 right-1 px-1 text-[94px] font-semibold z-10">
//     <span className="text-[#003780]">2.</span>
//   </div>

//   <div className="bg-white rounded-md">
//     <input
//       type="text"
//       defaultValue="HUMAN RESCOURCES MANAGEMENT & CONSULTING"
//       className="w-[552px] h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606]"
//     />
//   </div>
// </div>


//       </div>


//     <div className="flex items-center justify-between gap-20 mt-30">
//   {/* Input 3 */}
//   <div
//     className="relative p-[2px] rounded-md"
//     style={{ background: 'linear-gradient(to right, #003780, #f27933)' }}
//   >
//     <div className="absolute -top-27 -left-1 px-3 text-[94px] font-semibold z-10">
//       <span className="text-[#003780]">3.</span>
//     </div>

//     <div className="bg-white rounded-md">
//       <input
//         type="text"
//         defaultValue="EMPLOYEE ONBOARDING & DOCUMENTATION"
//         className="w-[552px] h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606]"
//       />
//     </div>
//   </div>

//   {/* Input 4 */}
//   <div
//     className="relative p-[2px] rounded-md"
//     style={{ background: 'linear-gradient(45deg, #f27933, #003780)' }}
//   >
//     <div className="absolute -top-27 right-1 px-1 text-[94px] font-semibold z-10">
//       <span className="text-[#003780]">4.</span>
//     </div>

//     <div className="bg-white rounded-md">
//       <input
//         type="text"
//         defaultValue="EMPLOYEE ONBOARDING & DOCUMENTATION"
//         className="w-[552px] h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606]"
//       />
//     </div>
//   </div>
// </div>








//     </form>


//   </div>
// )
// export default SectionThree;


import React from "react";

const SectionThree = () => (
  <div className="min-h-screen flex items-center justify-center w-full px-4 py-20 bg-white">
    <form className="w-full max-w-[1200px]">
      {/* Heading */}
      <h3 className="text-[#003780] text-[32px] md:text-[60px] leading-[100%] text-center mb-24 pb-5">
        Our People Solution
      </h3>

      {/* Input Blocks Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Input 1 */}
        <div
          className="relative p-[2px] rounded-md mt-10"
          style={{ background: 'linear-gradient(to right, #003780, #f27933)' }}
        >
          <div className=" left-0 px-3 text-[60px] md:text-[94px] font-semibold z-10">
            <span className="text-[#003780] absolute left-1 -top-16 text-[60px] w-[40px] h-[60px] md:-left-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:left-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]  font-medium font-space-grotesk text-[#003780]">1.</span>
          </div>
          <div className="bg-white rounded-md">
            <input
              type="text"
              defaultValue="END-TO-END RECRUITMENT"
              className="w-full h-[90px] md:h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606] text-[16px] md:text-[20px]"
            />
          </div>
        </div>

        {/* Input 2 */}
        <div
          className="relative p-[2px] rounded-md mt-10 "
          style={{ background: 'linear-gradient(to left, #003780, #f27933)' }}
        >
          <div className="right-0 px-3 text-[60px] md:text-[94px] font-semibold z-10">
            <span className="text-[#003780] absolute right-1 -top-16 text-[60px] w-[40px] h-[60px] md:-right-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:right-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]   font-medium  font-space-grotesk  text-[#003780]">2.</span>
          </div>
          <div className="bg-white rounded-md">
            <input
              type="text"
              defaultValue="HUMAN RESOURCES MANAGEMENT & CONSULTING"
              className="w-full h-[90px] md:h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606] text-[16px] md:text-[20px]"
            />
          </div>
        </div>

        {/* Input 3 */}
       
         <div
          className="relative p-[2px] rounded-md mt-15"
          style={{ background: 'linear-gradient(to right, #003780, #f27933)' }}
        >
          <div className=" left-0 px-3 text-[60px] md:text-[94px] font-semibold z-10 ">
            <span className="text-[#003780] absolute left-1 -top-16 text-[60px] w-[40px] h-[60px] md:-left-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:left-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]  font-medium font-space-grotesk text-[#003780]">3.</span>
          </div>
          <div className="bg-white rounded-md">
            <input
              type="text"
              defaultValue="EMPLOYEE ONBOARDING & DOCUMENTATION"
              className="w-full h-[90px] md:h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606] text-[16px] md:text-[20px]"
            />
          </div>
        </div> 

        {/* Input 4 */}
        <div
          className="relative p-[2px] rounded-md mt-15"
          style={{ background: 'linear-gradient(45deg, #f27933, #003780)' }}
        >
          <div className=" right-0 px-3 text-[60px] md:text-[94px] font-semibold z-10">
            <span className="text-[#003780] absolute right-1 -top-16 text-[60px] w-[40px] h-[60px] md:-right-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:right-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]   font-medium  font-space-grotesk  text-[#003780]">4.</span>
          </div>
          <div className="bg-white rounded-md">
            <input
              type="text"
              defaultValue="PERFORMANCE MANAGEMENT & DEVELOPMENT"
              className="w-full h-[90px] md:h-[110px] px-3 py-2 bg-transparent focus:outline-none rounded-md text-center text-[#060606] text-[16px] md:text-[20px]"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default SectionThree;
