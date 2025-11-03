


// import React from "react";
// import Image from "next/image";

// const clients = [
//   { name: "Google", logo: "/img/landing/t1.svg", size: 1200, height: 400 },
//   { name: "Apple", logo: "/img/landing/t2.svg", size: 400, height: 400 },
//   { name: "CAC", logo: "/img/landing/t3.svg", size: 400, height: 400 },
//   { name: "Oando", logo: "/img/landing/t4.svg", size: 400, height: 400 },
//   { name: "Dangote", logo: "/img/landing/t5.svg", size: 400, height: 400 },
//   { name: "Client6", logo: "/img/landing/t6.svg", size: 400, height: 400 },
//   { name: "Client7", logo: "/img/landing/t7.svg" , size: 3000, height: 1000 },
//   { name: "Client8", logo: "/img/landing/t88.svg", size: 3000, height: 1000 },
// ];

// export default function Satisfied() {
//   // duplicate once so marquee loops smoothly
//   const items = [...clients, ...clients];

//   return (
//     <section className="w-full py-10 sm:py-14">
//       <div className="relative w-full min-h-[280px] sm:min-h-[320px] overflow-hidden rounded-none">
//         {/* ✨ Background gradient (deep navy → soft blue) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#173A63] to-[#1E4E79]" />
//         {/* Optional subtle veil to improve readability */}
//         <div className="absolute inset-0 bg-black/10" />

//         <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
//           <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-8">
//             Satisfied Clients
//           </h2>

//           {/* marquee */}
//           <div
//             className="mt-8 w-full group"
//             style={{
//               overflow: "hidden",
//               WebkitMaskImage:
//                 "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
//               maskImage:
//                 "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
//             }}
//           >
//             <ul className="marquee-track ">
//               {items.map((c, i) => (
//                 <li
//                   key={`${c.name}-${i}`}
//                   className="flex items-center justify-center px-2 sm:px-12"
//                 >
//                   <Image
//                     src={c.logo}
//                     alt={c.name}
//                     width={c.size}
//                     height={c.height}
//                     className=" mt-8 drop-shadow-sm"
//                     priority={i < 6}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* styles for marquee */}
//       <style jsx>{`
//         .marquee-track {
//           display: inline-flex;
//           align-items: center;
//           min-width: 200%;
//           gap: 2rem;
//           white-space: nowrap;
//           animation: marquee 40s linear infinite;
//           will-change: transform;
//         }
//         .group:hover .marquee-track {
//           animation-play-state: paused;
//         }
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .marquee-track {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



// import React from "react";
// import Image from "next/image";

// // Optional per-logo scale for fine-tuning (1 = normal)
// const clients = [
//   { name: "Google",  logo: "/img/landing/t1.svg",  scale: 2.5   },
//   { name: "Apple",   logo: "/img/landing/t2.svg",  scale: 1   },
//   { name: "CAC",     logo: "/img/landing/t3.svg",  scale: 1.1 }, // a bit larger
//   { name: "Oando",   logo: "/img/landing/t4.svg",  scale: 1.4},
//   { name: "Dangote", logo: "/img/landing/t5.svg",  scale: 1.5   },
//   { name: "Client6", logo: "/img/landing/t6.svg",  scale: 1.5  },
//   { name: "Client7", logo: "/img/landing/t7.svg",  scale: 2.5 }, // a bit smaller
//   { name: "Client8", logo: "/img/landing/t88.svg", scale: 2.5   },
// ];

// export default function Satisfied() {
//   const items = [...clients, ...clients]; // duplicate for seamless loop

//   return (
//     <section className="w-full py-10 sm:py-14">
//       <div className="relative w-full min-h-[280px] sm:min-h-[320px] overflow-hidden">
//         {/* Background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#173A63] to-[#1E4E79]" />
//         <div className="absolute inset-0 bg-black/10" />

//         <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
//           <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-8">
//             Satisfied Clients
//           </h2>

//           {/* marquee (continuous; pauses on hover) */}
//           <div
//             className="mt-8 w-full group"
//             style={{
//               overflow: "hidden",
//               WebkitMaskImage:
//                 "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
//               maskImage:
//                 "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
//             }}
//           >
//             <ul className="track" aria-hidden="true">
//               {items.map((c, i) => (
//                 <li key={`${c.name}-${i}`} className="flex items-center">
//                   <div
//                     className="flex items-center justify-center"
//                     style={{
//                       // normalize height; width auto from the image
//                       height: "56px", // h-14 (change to 64/80 if you want bigger)
//                       transform: `scale(${c.scale ?? 1})`,
//                       transformOrigin: "center",
//                     }}
//                   >
//                     <Image
//                       src={c.logo}
//                       alt={c.name}
//                       width={200}  // intrinsic (not visual); keeps Next happy
//                       height={100} // intrinsic (not visual)
//                       className="h-full w-auto object-contain drop-shadow-sm"
//                       priority={i < 6}
//                     />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* styles for marquee */}
//       <style jsx>{`
//   /* wrapper that moves both tracks */
//   .marqueeRow {
//     display: flex;
//     width: max-content;     /* shrink to content so -100% lines up perfectly */
//     will-change: transform;
//     animation: scroll 55s linear infinite;
//   }
//   /* pause when hovering the outer .group div */
//   .group:hover .marqueeRow { animation-play-state: paused; }

//   /* a single track of logos */
//   .track {
//     display: flex;
//     align-items: center;
//     gap: 2.75rem;           /* spacing between logos - no space at ends */
//     flex-shrink: 0;         /* keep full width; sit side-by-side */
//     padding: 0;
//     margin: 0;
//     list-style: none;
//   }
//   .item { display: flex; align-items: center; }

//   @keyframes Satisfied-scroll {
//     from { transform: translateX(0); }
//     to   { transform: translateX(-100%); } /* move left by exactly one track width */
//   }

//   /* TEMP: if your OS has Reduce Motion ON, comment this out while testing */
//   @media (prefers-reduced-motion: reduce) {
//     .marqueeRow { animation: none; }
//   }
// `}</style>

//     </section>
//   );
// }




import React from "react";
import Image from "next/image";

const clients = [
  { name: "Google",  logo: "/img/landing/t1.svg",  scale: 3.5 },
  { name: "Apple",   logo: "/img/landing/t2.svg",  scale: 2.0 },
  { name: "CAC",     logo: "/img/landing/t3.svg",  scale: 2.8 },
  { name: "Oando",   logo: "/img/landing/t4.svg",  scale: 2.2 },
  { name: "Dangote", logo: "/img/landing/t5.svg",  scale: 3.0 },
  { name: "Client6", logo: "/img/landing/t6.svg",  scale: 2.0 },
  { name: "Client7", logo: "/img/landing/t7.svg",  scale: 3.4 },
  { name: "Client8", logo: "/img/landing/t88.svg", scale: 3.9 },
];

export default function Satisfied() {
  const items = [...clients, ...clients]; // duplicate once (loop span = 50%)

  return (
    <section className="w-full py-10 sm:py-14">
      <div className="relative w-full min-h-[280px] sm:min-h-[320px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#173A63] to-[#1E4E79]" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-8">
            Satisfied Clients
          </h2>

          {/* Row that moves (same idea as your tutor's) */}
          <div
            className=" py-24 w-full group"
            style={{
              overflow: "hidden",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              maskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div className="flex w-max mt-8 items-center gap-10 sm:gap-12 md:gap-14 animate-brand-scroll group-hover:[animation-play-state:paused]">
              {items.map((c, i) => (
                <div key={`${c.name}-${i}`} className="flex items-center">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      height: "60px", // visual height for all logos
                      transform: `scale(${c.scale ?? 1})`,
                      transformOrigin: "center",
                    }}
                  >
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={200}
                      height={300}
                      className="h-full w-auto object-contain mx-10 drop-shadow-sm"
                      priority={i < 6}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use your tutor's pattern: one row, duplicated content, translateX(-50%) */}
      <style jsx>{`
        @keyframes brand-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* exactly one duplicate width */
            0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* exactly one duplicate width */
        }
        .animate-brand-scroll {
          animation: brand-scroll 45s linear infinite; /* adjust speed here */
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-brand-scroll { animation: none; }
        }
      `}</style>
    </section>
  );
}

