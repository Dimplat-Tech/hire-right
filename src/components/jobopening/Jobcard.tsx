"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import type { Job } from "@/data/jobs";

type Props = {
  job: Job;
  isOpen?: boolean;
  onToggle?: () => void;
};

const JobCard = ({ job, isOpen, onToggle }: Props) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isOpen ?? internalOpen;
  const toggle = onToggle ?? (() => setInternalOpen((v) => !v));

  const reqs =
    "requirements" in job && Array.isArray(job.requirements)
      ? job.requirements
      : job.duties ?? [];

  return (
    <article className="rounded-2xl bg-[#06060608] font-manrope shadow-xl ring-1 ring-gray-100 p-5 md:p-6">
      <div className="flex flex-col md:flex-row md:items-stretch gap-6">
        {/* ✅ LEFT SIDE: Job Image - fixed height on small screens, full cover on desktop */}
        <div className="md:w-64 md:h-auto md:flex-shrink-0 w-full h-48 relative rounded-xl overflow-hidden">
          <Image
            src={job.image}
            alt={`${job.role} graphic`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* RIGHT SIDE: Job Details */}
        <div className="flex-grow">
          {/* Role + Apply */}
          <div className="flex items-start justify-between gap-3 mt-[20px] font-manrope">
            <div className="mt-2 text-[14px] text-[#060606] font-[500]">
              <span className="font-[500] text-[20px] text-[#003780]">Role: </span>
              {job.role}
            </div>
            <Button
              variant="primary"
              className="px-5 py-2 text-sm"
              arrow
              href="https://bit.ly/hirerightrecruitment"
            >
              Apply
            </Button>
          </div>

          {/* About */}
          <div className="mt-2 text-[#060606] font-manrope">
            <span className="font-semibold text-[16px] text-[#1E3A8A]">About role: </span>
            {job.about}
          </div>

          {/* Meta */}
          <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-slate-700">
            <span className="inline-flex items-center gap-2">
              <Image src={job.locate} alt="Location" width={16} height={16} />
              {job.location}
            </span>
            <span className="rounded-md bg-[#F2793380] text-[#003780] px-2 py-[2px] font-manrope">
              {job.mode}
            </span>
            <span className="rounded-md bg-[#F2793380] text-[#003780] px-2 py-[2px] font-manrope">
              {job.type}
            </span>
          </div>

          {/* Salary */}
          <div className="mt-2 text-[14px] text-[#060606] font-[500] font-manrope">
            <span className="font-[500] text-[16px] text-[#003780] font-manrope">Salary: </span>
            {job.salary}
          </div>

          {/* Duties */}
          <div className="mt-2 flex flex-wrap gap-2 font-manrope">
            <span className="font-[500] text-[16px] text-[#003780]">Duties: </span>
            {job.duties.map((t, i) => (
              <span
                key={`${job.id}-duty-${i}`}
                className="rounded-md bg-[#F2793380] text-[#003780] px-2 py-[2px] font-manrope text-[12px] font-normal"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Toggle */}
          <div className="mt-2 font-manrope">
            <button
              type="button"
              className="text-orange-500 underline font-medium text-sm cursor-pointer"
              onClick={toggle}
            >
              {open ? "Hide requirements" : "See requirements"}
            </button>
          </div>

          {/* Collapsible */}
          <div
            className={`transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out grid ${
              open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden bg-[#003780] rounded-3xl shadow-2xl p-4 text-white font-manrope">
              <div className="font-semibold text-orange-300 mb-2 text-lg">Requirements:</div>
              <ul className="space-y-2 list-disc pl-5">
                {reqs.map((req: string, idx: number) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Posted date removed from job card per requirement to hide unnecessary dates */}
        </div>
      </div>
    </article>
  );
};

export default JobCard;