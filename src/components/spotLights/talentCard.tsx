"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import Head from "next/head";
import Button from "../common/Button";

type ProfileProps = {
  name: string;
  gender: string;
  location: string;
  role: string;
  experience: string;
  ImgUrl: string;
};

function ProfileCard({
  name,
  gender,
  location,
  role,
  experience,
  ImgUrl
}: ProfileProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [requesterName, setRequesterName] = useState('');
  const [requesterPhone, setRequesterPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailjsResult, setEmailjsResult] = useState<string | null>(null);

  // using server-side EmailJS forwarding endpoint instead of client SDK to avoid CORS/visibility issues

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        // requester details
        requester_name: requesterName,
        requester_email: email,
        requester_phone: requesterPhone,
        // talent details
        talent_name: name,
        talent_role: role,
        talent_location: location,
        to_email: process.env.NEXT_PUBLIC_TO_EMAIL || 'info@hirerightng.com',
        message: `Hiring interest submitted for ${name} (${role}) by ${requesterName} (${requesterPhone} / ${email}). Please connect.`
      };
      // Try sending via client-side EmailJS (browser) first. This is the supported flow for EmailJS.
      let sent = false;

      try {
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const serializeError = (e: unknown) => {
          try {
            if (!e) return String(e);
            if (typeof e === 'string') return e;
            if (e instanceof Error) return e.message || JSON.stringify(e);
            return JSON.stringify(e, Object.getOwnPropertyNames(e));
          } catch {
            return String(e);
          }
        };

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
          setEmailjsResult('EmailJS not configured: please add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your .env.local');
        } else {
          // initialize and send via client SDK
          try {
            // init is optional when passing public key to send, but calling init can help some environments
            try { emailjs.init(PUBLIC_KEY); } catch { /* ignore init errors */ }
            const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setEmailjsResult(`EmailJS client send OK: ${JSON.stringify(res)}`);
            sent = true;
          } catch (err) {
            console.warn('EmailJS client error:', err);
            setEmailjsResult(`EmailJS client error: ${serializeError(err)}`);
          }
        }
      } catch (err) {
        console.warn('EmailJS client unexpected error:', err);
        setEmailjsResult(`EmailJS client unexpected error: ${String(err)}`);
      }

      // If EmailJS client send failed, attempt server-side persistence as a fallback
      if (!sent) {
        try {
          const res = await fetch('/api/lets-talk/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: requesterName,
              phone: requesterPhone,
              email,
              talentName: name,
              talentRole: role,
              talentLocation: location,
            }),
          });
          if (res.ok) {
            sent = true;
            setEmailjsResult((prev) => (prev ? prev + ' | Server fallback: OK' : 'Server fallback: OK'));
          } else {
            const text = await res.text();
            console.warn('Server fallback responded not ok', text);
            setEmailjsResult((prev) => (prev ? prev + ` | Server fallback error: ${text}` : `Server fallback error: ${text}`));
          }
        } catch (err) {
          console.warn('Server fallback failed:', err);
          setEmailjsResult((prev) => (prev ? prev + ` | Server fallback exception: ${String(err)}` : `Server fallback exception: ${String(err)}`));
        }
      }

      // Regardless of send/fallback success, show user a friendly thank-you message
      setStatus('success');
  // keep emailjsResult visible for debugging (cleared after modal closes)
      setRequesterName('');
      setRequesterPhone('');
      setEmail('');
      setTimeout(() => {
        setShowDialog(false);
        setStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Subscription error:', error);
      // On unexpected error, log and still show a friendly success message
      console.warn('Unexpected submission error, showing success to user:', error);
      setEmailjsResult(`Unexpected error: ${error}`);
      setStatus('success');
      setRequesterName('');
      setRequesterPhone('');
      setEmail('');
    }
  };

  return (
    <>
      <Head>
        <meta 
          name="description" 
          content={`View ${name}'s professional profile. ${role} with ${experience} of experience in ${location}. Hire or contact this professional via HireRight.`}
        />
      </Head>
      <div className="w-full rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] font-manrope card-elevate">
        <div className="relative h-[240px] w-full glass-panel texture-diagonal overflow-hidden">
          <Image
            src={ImgUrl}
            alt={`${name}'s profile picture`}
            width={240}
            height={240}
            className="w-auto h-full object-contain mx-auto rounded-t-xl transform transition-transform duration-300 hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/12 to-transparent pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-4 bottom-4 text-white">
              <h3 className="text-xl font-bold drop-shadow-md">{name}</h3>
              <p className="text-sm text-gray-100/90">{role}</p>
            </div>
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
                className="w-full justify-center"
                arrow
                onClick={() => setShowDialog(true)}
              >
                I want to hire
              </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Dialog */}
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

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">I want to hire {name}</h3>
                  <p className="text-gray-600 mb-6">
                    Enter your email and we will connect you with {name} or forward your hiring interest to our team.
                  </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={requesterName}
                  onChange={(e) => setRequesterName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your full name"
                  disabled={status === 'loading'}
                />

                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={requesterPhone}
                  onChange={(e) => setRequesterPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your phone number"
                  disabled={status === 'loading'}
                />

                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your email"
                  disabled={status === 'loading'}
                />
              </div>

              <Button
                variant="secondary"
                type="submit"
                className="w-full justify-center"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 
                 status === 'success' ? 'Subscribed!' : 
            status === 'error' ? 'Try Again' : 
            'Send Interest'}
              </Button>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">
                  Thank you for submitting! We appreciate your interest. Our team will reach out to you soon.
                </p>
              )}

              {/* Debug output for EmailJS/send status - remove in production */}
              {emailjsResult && (
                <pre className="mt-3 text-xs text-gray-500 break-words bg-gray-50 p-2 rounded">{emailjsResult}</pre>
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
    </>
  );
}

export default ProfileCard;