// import Link from "next/link";
// import { ArrowRight } from "lucide-react"; // you can also use your own icon image

// type Props = {
//   href?: string;
//   label?: string;
// };

// export default function ReturnButton({
//   href = "/",
//   label = "Return to home",
// }: Props) {
//   return (
//     <div className="flex justify-center mt-10">
//       <Link
//         href={href}
//         className="inline-flex items-center gap-2 rounded-lg bg-[#003087] text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-[#00246a] transition"
//       >
//         {label}
//         <ArrowRight size={16} />
//       </Link>
//     </div>
//   );
// }


import Button from "../common/Button";

type Props = {
  href?: string;
  label?: string;
};

export default function ReturnButton({
  href = "/",
  label = "Return to home",
}: Props) {
  return (
    <div className="flex justify-center mt-50 pb-25" >
      <Button
        href={href}
        variant="secondary" // using the blue style you already defined
      arrow>
        {label}
      </Button>
    </div>
  );
}
