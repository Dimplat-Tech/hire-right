import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { LocateFixed } from 'lucide-react';

type CardProps = {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  location: string;
  read: string;
  logo: string;
};

function Card({
  image,
  title,
  subtitle,
  date,
  location,
  read,

}: CardProps){
  return(
    
    <div className=" mx-auto rounded-2xl mb-8 items-start sm:items-center gap-4 sm:gap-6">

      <div className=" relative w-full h-[200px] md:w-[395px] md:h-[290px] sm:items-center flex-shrink-0 rounded-xl overflow-hidden ">
       <Image src={image} alt={title} fill className="rounded-[20px] object-cover" />

   

      
        {/* <div className="absolute top-2 left-2">
      <Image src={ logo} alt={logo} width={84} height={24} />
      </div> */}
     

      <div className="absolute bottom-4 left-2 font-manrope bg-primary-orange/50
       text-primary-blue text-xs px-1 py-1 rounded-md">
      {read} read 

      
        </div>
         </div>







      <div className=" mt-3 p-2 w-[395] h-[109] bg-[#06060608]/30 rounded-2xl shadow-lg">
        <h2 className="text-primary-orange  text-sm md:text-[16px] font-[400]  mb-2 font-space-grotesk">{title}</h2>
        <h3 className="text-base sm:text-[18px] font-[400] font-space-grotesk mb-2" >{subtitle}</h3>
       


         <div className=" flex justify-between font-manrope text-[#060606] text-xs sm:text-[12px]">

          <div className="flex gap-1">
         <LocateFixed className="w-4 h-4 text-slate-600 " />
          <span className="text-base sm:text-[12px]  font-space-grotesk">{location}</span>
            </div>
        
            <div className="flex gap-1"> 
            <Calendar className="w-4 h-4 font-manrope  " />
            <span className="text-base sm:text-[10px] ">{date}</span>
          </div>
         
        
        </div>
        
      </div>
      
       
    </div>
    
  )
}
export default Card;