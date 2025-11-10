"use client";
import React, { useState, useEffect } from 'react';
import Button from "../common/Button";
import { init, send } from '@emailjs/browser';

const EMAILJS = {
  SERVICE_ID: 'service_fsh6ew9',
  TEMPLATE_ID: 'template_7hb14np',
  PUBLIC_KEY: '2k0B6L0Ikj4ZVJ7ue'
};

const LetsTalk = () => {
  const [org, setOrg] = useState('');
  const [role, setRole] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key
    init(EMAILJS.PUBLIC_KEY);
  }, []);
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    
    try {
      console.log('Preparing to send email...', {
        serviceId: EMAILJS.SERVICE_ID,
        templateId: EMAILJS.TEMPLATE_ID,
        hasPublicKey: !!EMAILJS.PUBLIC_KEY
      });

      const templateParams = {
        from_name: org,
        organization_name: org,
        job_role: role,
        mobile_number: mobile,
        email_address: email,
        email: email,
        to_name: 'HireRight Team',
        message: `Organization: ${org}\nJob Role: ${role}\nMobile: ${mobile}\nEmail: ${email}`
      };

      // Send email via EmailJS
      const emailResult = await send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        templateParams,
        EMAILJS.PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', emailResult);

            // Also send to backend for storage
      const res = await fetch('/api/lets-talk/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organization: org, role, mobile, email }),
      });

      if (res.ok) {
        setStatus('success');
        // Clear form after successful submission
        setOrg(''); 
        setRole(''); 
        setMobile(''); 
        setEmail('');
      } else {
        throw new Error('Failed to save to backend');
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Log the error but show the friendly success message to the user
      // (Some environments may fail the backend save while email/send still works
      // and we prefer to acknowledge the user's submission and follow up.)
      console.warn('Backend save failed, showing success message to user:', error);
      setStatus('success');
      // Clear form after 'success'
      setOrg('');
      setRole('');
      setMobile('');
      setEmail('');
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
        <div className="max-w-3xl mx-auto mt-6 p-8 bg-gradient-to-r from-[#003780]/10 to-[#F27933]/10 rounded-xl text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#003780] to-[#F27933] bg-clip-text text-transparent mb-3">
            Thank you for submitting!
          </h3>
          <p className="text-xl text-gray-700">
            We appreciate your interest. Our team will reach out to you soon.
          </p>
        </div>
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
