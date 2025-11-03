
// 

import Image from "next/image";

export default function Divider() {
  return (
    <div className="relative hidden md:block h-[300px] w-[70px] select-none pointer-events-none">
      {/* Centered dashed line */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-dashed border-orange-300/80" />

      {/* Top diamond */}
      <Image
        src="/service/diamond.png"
        alt=""
        width={30}
        height={18}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Middle diamond */}
      <Image
        src="/service/diamond.png"
        alt=""
        width={30}
        height={18}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Bottom diamond */}
      <Image
        src="/service/diamond.png"
        alt=""
        width={30}
        height={18}
        className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}



// // src/components/services/Divider.tsx
// import Image from "next/image";

// export default function Divider() {
//   return (
//     <>
//       {/* Horizontal divider (small screens) */}
//       <div className="relative flex lg:hidden w-full h-6 items-center justify-center">
//         {/* line */}
//         <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-orange-300/80" />
//         {/* diamond in the center */}
//         <Image
//           src="/service/diamond.png"
//           alt=""
//           width={18}
//           height={18}
//           className="relative z-10 bg-white"
//         />
//       </div>

//       {/* Vertical divider (large screens) */}
//       <div className="relative hidden lg:flex h-full w-6 items-center justify-center">
//         {/* line */}
//         <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-orange-300/80" />
//         {/* diamonds at 25%, 75% */}
//         <Image
//           src="/service/diamond.png"
//           alt=""
//           width={18}
//           height={18}
//           className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
//         />
//         <Image
//           src="/service/diamond.png"
//           alt=""
//           width={18}
//           height={18}
//           className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
//         />
//       </div>
//     </>
//   );
// }
