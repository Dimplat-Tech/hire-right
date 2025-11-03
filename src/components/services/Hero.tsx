// // src/components/services/Hero.tsx
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="relative p-12 flex justify-center h-[500px]">

//       {/* Background image */}
//       <div className="  border-4 ">
//         <Image 
//           src="/service/hero.jpg"
//           alt="Our Services"
//           fill
//           priority
//           className="object-cover "
//         />
//         {/* Overlay for darkening the image */}
//         <div className=" bg-black/40" />
//       </div>

//       {/* Foreground content */}
//       <div className="relative h-72 flex items-center px-4">
//         <div>
//           <p className="text-blue-200 font-semibold">What we do</p>
//           <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">
//             Our Services
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }



// import Image from "next/image";



//  export default function Hero() {


//   return(
//     <div className=" relative w-full h-[800px] "> 
//     <div className="relative h-72 w-full max-w-5xl ">
//       <Image
//         src="/service/hero.jpg"
//         alt="Our Services"
//         fill
//         priority
//         className=""
//       />
//       </div>
//     </div>
//   )
//  }
// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <header className="relative ">
//       {/* page background (kept light like figma) */}
//       <div className="absolute inset-0 bg-white -z-10" />

//       {/* centered hero card with rounded corners */}
//       <div className="mx-auto w-[95%] sm:w-[94%] md:w-[92%]">
//         <div className="relative h-[18rem] sm:h-[22rem] md:h-[26rem] overflow-hidden rounded-3xl border border-blue-200/60 shadow-xl">
//           {/* the image */}
//           <Image
//             src="/service/hero.jpg"          // <-- singular 'service' per your note
//             alt="Our Services"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />

//           {/* subtle dark overlay so text pops */}
//           <div className="absolute inset-0 bg-black/35" />

//           {/* overlayed content */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
//             {/* title: 'Our' white + 'Services' colored like figma */}
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
//               Our{" "}
//               <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-800 bg-clip-text text-transparent">
//                 Services
//               </span>
//             </h1>

//             {/* subtitle */}
//             <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/90">
//               Browse through the number of services we offer and discover tailored <br/>
//               solutions made perfectly for your company.
//             </p>

//             {/* primary CTA */}
//             <Link
//               href="/contact"
//               className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
//             >
//               Let’s talk
//               <span aria-hidden>→</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


import React from "react";
import HeroSection from '@/components/common/HeroSection'

function page() {
  return (
    <div>
      <HeroSection
        backgroundImage="/service/hero.jpg"
        titleFirst="Our"
        titleSecond="Services"
        gradientOn='second'
        subtitle="Browse through the number of services we offer and discover tailored 
           solutions made perfectly for your company."
      />
    </div>
  )
}

export default page