

// import ServiceCard from "./ServiceCard";
// import Divider from "./Divider";
// import { recruitmentServices } from "../../data/services";

// export default function Recruitment() {
//   const left  = [recruitmentServices[0], recruitmentServices[2]];
//   const right = [recruitmentServices[1], recruitmentServices[3]];

//   return (
//     <section className="mx-auto w-[92%] md:w-[88%] lg:w-[84%] py-12">
//       <h2 className="text-orange-500 font-bold text-2xl md:text-[60px]">
//         Recruitment Services
//       </h2>
//       <p className="mt-4 max-w-2xl text-gray-700 text-[18px] font-medium leading-relaxed">
//         Hiring the right people is at the core of every successful business. At HireRight,
//         we offer flexible recruitment solutions tailored to your current needs and future
//         growth whether you’re hiring for one critical role or expanding your entire team.
//       </p>

//       {/* 3 cols: [left cards] [divider] [right cards] */}
//       <div className="mt-10 grid md:grid-cols-[1fr_auto_1fr] gap-y-8 md:gap-x-[3px]">
//         {/* left column */}
//         <div className="flex flex-col items-start gap-[100px]">
//           {left.map((item) => (
//             <div key={item.title} className="w-full max-w-[400px]">
//               <ServiceCard {...item} />
//             </div>
//           ))}
//         </div>

//         {/* center divider, vertically centered and fixed height */}
//         <div className="flex items-center justify-center">
//           <Divider />
//         </div>

//         {/* right column */}
//         <div className="flex flex-col items-end gap-[100px]">
//           {right.map((item) => (
//             <div key={item.title} className="w-full max-w-[400px]">
//               <ServiceCard {...item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import ServiceCard from "./ServiceCard";
import Divider from "./Divider";
import { recruitmentServices } from "../../data/services";

export default function Recruitment() {
  const left  = [recruitmentServices[0], recruitmentServices[2]];
  const right = [recruitmentServices[1], recruitmentServices[3]];

  return (
    <section className="mx-auto w-[92%] md:w-[88%] lg:w-[84%] py-12">
      <h2 className="text-[#F27933] pb-6 lg:pb-8 font-[500] text-2xl lg:text-[40px] sm:text-[35px] font-space-grotesk">
        Recruitment Services
      </h2>
      <p className=" mt-3 lg:mt-4  text-gray-700 lg:text-[18px] max-w-4xl sm:text-[16px] font-[400] leading-relaxed font-montserrat">
        Hiring the right people is at the core of every successful business. At HireRight,
        we offer flexible recruitment solutions tailored to your current needs and future
        growth whether you’re hiring for one critical role or expanding your entire team.
      </p>

      {/* Cards + divider, close together */}
      <div className=" mt-8 lg:mt-10 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 lg:gap-20">
        {/* Left column */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end sm:mb-14 space-y-12">
          {left.map((item) => (
            <div key={item.title} className="w-full max-w-[500px] ">
              <ServiceCard {...item} showCTA={false} />
            </div>
          ))}
        </div>

        {/* Divider, centered vertically */}
        
        <div className="hidden lg:flex  items-center justify-center h-[300px] sm:h-[1px] sm:justify-center lg:display">
          <Divider />
        </div>
        

        {/* Right column */}
        <div className=" w-full lg:w-auto flex flex-col items-center lg:items-start sm:mb-14 space-y-12">
          {right.map((item) => (
            <div key={item.title} className="w-full max-w-[500px]">
              <ServiceCard {...item} showCTA={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}