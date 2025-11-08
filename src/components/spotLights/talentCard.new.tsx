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
  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] font-manrope">
      <div className="relative h-[240px] w-full">
        <Image
          src={ImgUrl}
          alt={`${name}'s profile picture`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-200">{role}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#1746A2] uppercase">Gender</p>
            <p className="text-base text-gray-900">{gender}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#1746A2] uppercase">Location</p>
            <p className="text-base text-gray-900">{location}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#1746A2] uppercase">Experience</p>
            <p className="text-base text-gray-900">{experience}</p>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            variant="secondary" 
            href="/lets-talk" 
            className="w-full justify-center" 
            arrow
          >
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;