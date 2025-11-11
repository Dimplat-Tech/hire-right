"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import type { Job } from "@/data/jobs";
import { init, send } from '@emailjs/browser';


const EMAILJS = {
  SERVICE_ID: 'service_fsh6ew9',
  TEMPLATE_ID: 'template_5wwri8n',
  PUBLIC_KEY: '2k0B6L0Ikj4ZVJ7ue'
};

type Props = {
  job: Job;
  isOpen?: boolean;
  onToggle?: () => void;
};

const JobCard = ({ job, isOpen, onToggle }: Props) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const open = isOpen ?? internalOpen;
  const toggle = onToggle ?? (() => setInternalOpen((v) => !v));

  useEffect(() => {
    init(EMAILJS.PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        subscriber_email: email,
        email: email,
        to_email: 'info@hirerightng.com',
        job_role: job.role,
        job_location: job.location,
        job_type: job.type,
        message: `Job application and newsletter subscription for: ${job.role} (${job.type})`
      };

      await send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        templateParams,
        EMAILJS.PUBLIC_KEY
      );

      setStatus('success');
      setEmail('');
      setTimeout(() => {
        window.location.href = "https://bit.ly/hirerightrecruitment";
      }, 2000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    }
  };

  const reqs =
    "requirements" in job && Array.isArray(job.requirements)
      ? job.requirements
      : job.duties ?? [];

  return (
  <article className="group rounded-3xl bg-gradient-to-b from-white to-slate-50 font-manrope shadow-md ring-1 ring-gray-100/75 p-6 md:p-8 card-elevate animate-fade-in-up hover:shadow-2xl hover:-translate-y-1 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-stretch gap-6">
        {/* LEFT: Decorative, image-free panel (company badge, role summary, chips) */}
        <div className="md:w-80 md:flex-shrink-0 w-full h-60 rounded-2xl overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-white flex flex-col items-start justify-center p-5 border border-indigo-100/50 relative animate-slow-tilt backdrop-blur-sm">
          <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-gradient-to-tr from-[#E6F0FF] to-[#F0F7FF] opacity-70 blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          <div className="flex items-start gap-4 z-10 w-full">
            <div className="relative group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-full blur-md opacity-75"></div>
              <div className="relative bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10 overflow-hidden">
                {job.logo ? (
                  <Image
                    src={job.logo}
                    alt={`${job.company || 'Employer'} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-3xl font-extrabold text-indigo-600">
                    {job.company ? job.company.charAt(0).toUpperCase() : job.role.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-slate-500 font-medium truncate">{job.company || 'Top Employer'}</div>
                  {(!job.company || job.company === 'Top Employer') && (
                    <div className="relative ml-2 inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-100 to-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </div>
                  )}
                </div>

                <div className="text-xl md:text-2xl font-extrabold text-[#062E73] leading-snug mt-1.5 max-w-full break-words group-hover:text-indigo-700 transition-colors">{job.role}</div>              <div className="mt-2 flex items-center justify-between w-full text-sm text-gray-600">
                <div className="inline-flex items-center gap-2 truncate">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4B5563] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="2" strokeWidth="1.5" />
                  </svg>
                  <span className="truncate">{job.location}</span>
                </div>
                <div className="text-right font-semibold text-[#0B57D0] ml-4 truncate">{job.salary}</div>
              </div>
            </div>
          </div>

          <div className="mt-4 z-10 w-full flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold shadow-sm border border-indigo-100/50 group-hover:bg-indigo-100 transition-colors">{job.mode}</span>
            <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold shadow-sm border border-violet-100/50 group-hover:bg-violet-100 transition-colors">{job.type}</span>
          </div>
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
              onClick={() => setShowDialog(true)}
            >
              Apply
            </Button>
          </div>

          {/* Email Collection Modal */}
          {showDialog && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 relative">
                <button 
                  onClick={() => setShowDialog(false)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply for {job.role}</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter to receive updates about this position and other job opportunities.
                  After subscribing, you&apos;ll be redirected to the application form.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-full justify-center"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Subscribing...' : 
                     status === 'success' ? 'Redirecting...' : 
                     status === 'error' ? 'Try Again' : 
                     'Continue to Application'}
                  </Button>

                  {status === 'success' && (
                    <p className="text-green-600 text-sm text-center">
                      Thank you for subscribing! Redirecting to application form...
                    </p>
                  )}

                  {status === 'error' && (
                    <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-red-800">
                            Unable to complete subscription
                          </h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>Please try again or contact us at{' '}
                              <a 
                                href="mailto:dimplattech@gmail.com"
                                className="font-medium text-blue-600 hover:text-blue-500 underline"
                              >
                                dimplattech@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

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