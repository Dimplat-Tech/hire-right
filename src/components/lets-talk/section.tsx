"use client";
import React, { useState } from 'react';
import Button from "../common/Button";

const LetsTalk = () => {
  const [org, setOrg] = useState('');
  const [role, setRole] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/lets-talk/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organization: org, role, mobile, email }),
      });
      if (res.ok) {
        setStatus('success');
        setOrg(''); setRole(''); setMobile(''); setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen flex flex-col p-4">

      <form onSubmit={handleSubmit} className="space-y-8 w-full mx-auto py-4 max-w-3xl">

        <div className="relative rounded-lg p-[2px]" style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}>
          <div className="bg-white rounded-lg p-4">
            <input
              className="w-full h-12 px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:text-[15px] text-[18px]"
              type="text"
              placeholder="Organization name"
              value={org}
              onChange={e=>setOrg(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="relative rounded-lg p-[2px]" style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}>
          <div className="bg-white rounded-lg p-4">
            <input
              className="w-full h-12 px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:text-[15px] text-[18px]"
              type="text"
              placeholder="Job role(s) you want to recruit for"
              value={role}
              onChange={e=>setRole(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="relative rounded-lg p-[2px]" style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}>
          <div className="bg-white rounded-lg p-4">
            <input
              className="w-full h-12 px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:text-[15px] text-[18px]"
              type="tel"
              placeholder="Mobile number"
              value={mobile}
              onChange={e=>setMobile(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="relative rounded-lg p-[2px]" style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}>
          <div className="bg-white rounded-lg p-4">
            <input
              className="w-full h-12 px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:text-[15px] text-[18px]"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Button
            variant="secondary"
            type="submit"
            className="px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl"
            arrow
          >
            {status === 'loading' ? 'Submitting...' : 'Find your next great hire'}
          </Button>
        </div>
      </form>

      {status === 'success' && (
        <div className="max-w-3xl mx-auto mt-6 p-4 bg-green-50 text-green-800 rounded">Thank you — we will reach out shortly.</div>
      )}

      <div className="flex justify-center mt-10 md:mt-16 lg:mt-14">
        <h1 className="bg-gradient-to-r from-[#003780] via-[#763e18] to-[#F27933] bg-clip-text font-bold text-transparent text-[80px] text-center">OR</h1>
      </div>

      <div className="font-bold text-gray-700 text-[24px] text-center mb-2 mt-10 md:mt-8 lg:mt-14">
        <p>Reach out to us via email to book a consultation or for more enquiries</p>
      </div>

      <div className="mb-12 mt-6 text-center">
        <p className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#003780] via-[#763e18] to-[#F27933]">info@hirerightng.com</p>
      </div>

      {/* CSV download moved to admin panel for restricted access */}

    </div>
  );
};
export default LetsTalk;
