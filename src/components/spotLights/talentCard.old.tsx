"use client";

import React from "react";
import Image from "next/image";
import Button from "../common/Button";



type ProfileProps = {
  name: string;
  gender: string;
  location: string;
  role: string;
  experience: string;
  ImgUrl: string;
};
  function ProfileCard({ name, gender, location, role, experience, ImgUrl }: ProfileProps) {
  // removed EmailJS init, state and handler from this old backup file to avoid unused-variable warnings

    return(
        <div className=" h-[600px] max-w-[1280px] mx-auto font-manrope">
           <div className=" flex items-center justify-around  flex-col md:flex-row ">

               <div className="relative hidden md:block">
                   <div className="relative h-full max-w-[329px] max-h-[393px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-white">
                     <Image
                       src={ImgUrl}
                       alt={"talent"}
                       width={329.33} height={393.94}
                       className="rounded-2xl object-cover"
                       priority={false}
                    />
                                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[rgba(204,215,230,0.7)] rounded-[20px] px-4 py-2 text-center w-[218px] h-[83px]">
                                         <span className="block font-semibold text-gray-900 text-base">{name}</span>
                                          <span className="block text-gray-600 text-sm">{role}</span>
                                   </div>
                              

                                 </div>
                              

                {/* <div className="">
                   <Image src={ImgUrl} alt="hr1" width={329.33} height={393.94} className="rounded-[20px]"/>
                   </div>
                     <div className="absolute bottom-10 left-10 border 1  bg-[#CCD7E6] rounded-[20px] w-[218.06px] h-[83.45px] text-center font-manrope text-[17px] text-[#060606] font-[500] leading-relaxed pt-2 text-center">
                        <h1 className="">{name}</h1>
                        <p className="">{role}</p>
                     </div> */}
               </div>
               

               
<div
  className="relative w-full overflow-hidden max-w-[684px] min-h-[330px]  p-6 flex flex-col gap-[20px] md:gap-[20px] rounded-[20px] border border-primary-orange bg-[rgba(6,6,6,0.03)] font-medium text-[18px] pl-5 pt-5 leading-normal"
  style={{ boxShadow: '0px 4.99px 24.97px rgba(0, 55, 128, 0.15)' }}
>
  {/* Responsive Image and Name for Mobile */}
  <div className="flex md:hidden items-center gap-4">
    <Image
      src={ImgUrl}
      width={100}
      height={200}
      alt="ge"
      className="rounded-full"
    />
    <h1 className="text-xl font-semibold">{name}</h1>
  </div>

  {/* Content - improved visibility */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <span className="text-sm text-[#1746A2] font-medium uppercase tracking-wide">Gender</span>
      <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{gender}</span>
    </div>

    <div className="flex flex-col">
      <span className="text-sm text-[#1746A2] font-medium uppercase tracking-wide">Location</span>
      <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{location}</span>
    </div>

    <div className="flex flex-col">
      <span className="text-sm text-[#1746A2] font-medium uppercase tracking-wide">Suitable role</span>
      <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{role}</span>
    </div>

    <div className="flex flex-col">
      <span className="text-sm text-[#1746A2] font-medium uppercase tracking-wide">Years of experience</span>
      <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{experience}</span>
    </div>
  </div>

<div className="flex  justify-center ">
  <Button variant="secondary" href="/lets-talk" arrow>Hire Me</Button>
</div>

</div>


           </div>

        

        </div>
    )

}


export default ProfileCard;