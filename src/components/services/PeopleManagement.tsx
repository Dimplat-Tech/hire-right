



// // src/components/services/PeopleManagement.tsx
// import ServiceCard from "./ServiceCard";

// import { peopleManagement } from "../../data/services";
// import Image from 'next/image';

// export default function PeopleManagement() {
//   // Split into left and right cards
//   const left = [peopleManagement[0]];
//   const right = [peopleManagement[1]];

//   return (
//     <section className="mx-auto w-[92%] md:w-[88%] lg:w-[84%] py-12">
//       {/* Section heading */}
//       <h2 className="text-orange-500 font-bold text-2xl md:text-[60px]">
//         People Management Services
//       </h2>

//       <p className="mt-3 text-gray-600 text-[18px] max-w-4xl font-medium leading-relaxed">
//         Smarter HR, Without the Overhead.<br />
//         Running a business is demanding. Managing people shouldn’t slow you down.<br />
//         Our HR Management services are built to give you the structure, support,
//         and expertise of a fully functioning HR department, without the cost or
//         complexity of building one in-house.
//       </p>

//       {/* Cards grid with divider in the middle */}
//       <div className="mt-15 grid  md:grid-cols-[1fr_auto_1fr] gap-y-8 md:gap-x-4">
//         {/* Left card(s) */}
//         <div className="flex flex-col items-start gap-8">
//           {left.map((item) => (
//             <div key={item.title} className="w-full max-w-[500px]">
//               <ServiceCard {...item} />
//             </div>
//           ))}
//         </div>

//         {/* Divider in the middle */}
//         <div className="w-[40px] h-[20px] ">
//           <Image src="/service/diamond.png" alt="Description" width={50} height={1} />
//         </div>

//         {/* Right card(s) */}
//         <div className="flex flex-col items-end gap-8">
//           {right.map((item) => (
//             <div key={item.title} className="w-full max-w-[500px]">
//               <ServiceCard {...item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import ServiceCard from "./ServiceCard";
import { peopleManagement } from "../../data/services";


export default function PeopleManagement() {
  const left = [peopleManagement[0]];

  return (
    <section className="mx-auto w-[92%] md:w-[88%] lg:w-[84%] py-12">
      <h2 className="text-[#F27933] pb-6 md:pb-8 font-[500] text-2xl md:text-[40px] sm:text-[35px] font-space-grotesk">
        People Management Services
      </h2>
      <p className="mt-3 md:mt-4  text-gray-700 lg:text-[18px] max-w-4xl sm:text-[16px] font-[400] leading-relaxed font-montserrat">
        Running a business is demanding. Managing people shouldn’t slow you down.<br />
        Our HR Management services are built to give you the structure, support,
        and expertise of a fully functioning HR department, without the cost or
        complexity of building one in-house.
      </p>

      <div className="mt-16 flex justify-center">
          <div className="w-full max-w-[700px]">
          {/* Render a single featured ServiceCard without CTA */}
          <ServiceCard {...left[0]} showCTA={false} featured={true} />
        </div>
      </div>
    </section>
  );
}
