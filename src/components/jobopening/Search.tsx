// // src/components/jobs/SearchBar.tsx
// "use client";

// import { useState } from "react";
// import Image from "next/image";

// import Button from "@/components/common/Button";

// type Props = {
//   onSearch: (q: string, loc: string) => void;
//   defaultQuery?: string;
//   defaultLocation?: string;
// };

// export default function SearchBar({
//   onSearch,
//   defaultQuery = "",
//   defaultLocation = "",
// }: Props) {
//   const [q, setQ] = useState(defaultQuery);
//   const [loc, setLoc] = useState(defaultLocation);

//   function submit(e: React.FormEvent) {
//     e.preventDefault();
//     onSearch(q.trim(), loc.trim());
//   }

//   return (
//     <form
//       onSubmit={submit}
//       className="mx-auto w-[92%] md:w-[88%] lg:w-[84%] grid grid-cols-1 md:grid-cols-[1.25fr_1fr_auto] gap-3"
//       aria-label="job search"
//     >
//       {/* Search input */}
//       <div className="relative">
//         <Image
//                 src="/jobopening/search.png"
//                 alt=""
//                 width={30}
//                 height={18}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
//               />
//         <input
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//           placeholder="Search for jobs by title, roles, or company"
//           className="h-[54px] w-full rounded-2xl border border-orange-200 bg-white pl-10 pr-4 text-[14px] outline-none focus:ring-2 focus:ring-orange-400"
//         />
//       </div>

//       {/* Location input */}
//       <div className="relative">
//         <Image
//                src="/jobopening/location.png"
//                alt=""
//                width={30}
//                height={18}
//                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
//              />
//         <input
//           value={loc}
//           onChange={(e) => setLoc(e.target.value)}
//           placeholder="Preferred location"
//           className="h-[54px] w-full rounded-2xl border border-orange-200 bg-white pl-10 pr-4 text-[14px] outline-none focus:ring-2 focus:ring-orange-400"
//         />
//       </div>

//       {/* Search button */}
//       <Button type="submit" variant="primary" className="h-[54px] px-8">
//         Search
//       </Button>
//     </form>
//   );
// }




// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Button from "@/components/common/Button";

// type Props = {
//   onSearch: (q: string, loc: string) => void;
//   defaultQuery?: string;
//   defaultLocation?: string;
//   searchIconSrc?: string;   // 👈 new
//   locationIconSrc?: string; // 👈 already prepared
// };

// export default function SearchBar({
//   onSearch,
//   defaultQuery = "",
//   defaultLocation = "",
//   searchIconSrc = "/jobopening/search.png",      // 👈 fallback
//   locationIconSrc = "/jobopening/locationr.png", // 👈 fallback
// }: Props) {
//   const [q, setQ] = useState(defaultQuery);
//   const [loc, setLoc] = useState(defaultLocation);

//   function submit(e: React.FormEvent) {
//     e.preventDefault();
//     onSearch(q.trim(), loc.trim());
//   }

//   return (
//     <form
//       onSubmit={submit}
//       className="mx-auto w-[92%] md:w-[88%] lg:w-[84%] grid grid-cols-1 md:grid-cols-[1.25fr_1fr_auto] gap-3 py-20"
//       aria-label="job search"
//     >
//       {/* Search input */}
//       <div className="relative">
//         <Image
//           src={searchIconSrc}
//           alt="Search"
//           width={30}
//           height={30}
//           className="absolute left-3 top-1/2 -translate-y-1/2"
//         />
//         <input
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//           placeholder="Search for jobs by title, roles, or company"
//           className="h-[54px] w-full rounded-2xl border border-orange-200 bg-white pl-10 pr-4 text-[14px] outline-none focus:ring-2 focus:ring-orange-400"
//         />
//       </div>

//       {/* Location input */}
//       <div className="relative">
//         <Image
//           src={locationIconSrc}
//           alt="Location"
//           width={30}
//           height={30}
//           className="absolute left-3 top-1/2 -translate-y-1/2"
//         />
//         <input
//           value={loc}
//           onChange={(e) => setLoc(e.target.value)}
//           placeholder="Preferred location"
//           className="h-[54px] w-full rounded-2xl border border-orange-200 bg-white pl-10 pr-4 text-[14px] outline-none focus:ring-2 focus:ring-orange-400"
//         />
//       </div>

//       {/* Search button */}
//       <Button type="submit" variant="primary" className="h-[54px] px-8">
//         Search
//       </Button>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

type Props = {
  /** Called when the form is submitted */
  onSearch?: (query: string, location: string) => void;   // <- now optional
  /** Initial values */
  defaultQuery?: string;
  defaultLocation?: string;
  /** Icons (from /public) */
  searchIconSrc?: string;
  locationIconSrc?: string;
  /** Extra classes on the wrapper */
  className?: string;
};

export default function SearchBar({
  onSearch,
  defaultQuery = "",
  defaultLocation = "",
  searchIconSrc = "/jobopening/search.png",
  locationIconSrc = "/jobopening/location.png",
  className = "",
}: Props) {
  const [q, setQ] = useState(defaultQuery);
  const [loc, setLoc] = useState(defaultLocation);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // call only if provided
    onSearch?.(q.trim(), loc.trim());
  }

  
  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto w-[92%]  md:w-[88%] lg:w-[84%] grid grid-cols-1 md:grid-cols-[1.25fr_1fr_auto] gap-3 sm:grid-cols-1 ${className}  py-10`}
      aria-label="job search"
    >
      {/* Search input */}
      <div className="relative flex items-center flex-1 rounded-xl p-[1px] bg-gradient-to-r from-[#003780] to-[#f27933]">
        <Image
          src={searchIconSrc}
          alt="Search"
          width={30}
          height={30}
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          name="query"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search for jobs by title, roles, or company"
          className="h-[54px] w-full rounded-2xl border border-orange-200 bg-white pl-10 pr-4 text-[14px] text-[#060606] outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Location input */}
      <div className="relative flex items-center flex-1 rounded-xl p-[1px] bg-gradient-to-r from-[#003780] to-[#f27933]">
        <Image
          src={locationIconSrc}
          alt="Location"
          width={30}
          height={30}
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          name="location"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          placeholder="Preferred location"
          className="h-[54px] w-full rounded-2xl border border-orange-200 bg-white pl-10 pr-4 text-[14px] text-[#060606] outline-none focus:ring-2 focus:ring-orange-400  "
        />
      </div>

      {/* Button */}
      <Button type="submit" variant="primary" className="h-[54px] px-8">
        Search
      </Button>
    </form>
  );
}
