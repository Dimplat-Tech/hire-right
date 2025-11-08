
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Button from '../common/Button';
import { init, send } from '@emailjs/browser';

const EMAILJS = {
  SERVICE_ID: 'service_fsh6ew9',
  TEMPLATE_ID: 'template_5wwri8n',
  PUBLIC_KEY: '2k0B6L0Ikj4ZVJ7ue'
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    init(EMAILJS.PUBLIC_KEY);
  }, []);

  return (
    <section className="w-full bg-white font-montserrat py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-0">
        {/* Left: Text and Form */}
        <div className="flex-1 md:pr-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-space-grotesk">Stay in the loop</h2>
          <p className="font-semibold text-black mb-2">Stay ahead of the Hiring curve!</p>
          <p className="text-black/80 mb-8">Join our newsletter to stay in the loop with all our updates.</p>
          <form
            className="flex flex-col sm:flex-row items-stretch max-w-xl"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email) return setMessage({ type: 'error', text: 'Please enter a valid email.' });
              try {
                // Send email via EmailJS
                const templateParams = {
                  subscriber_email: email,
                  email: email,
                  to_email: 'info@hirerightng.com',
                  message: `New newsletter subscription from ${email}`
                };

                await send(
                  EMAILJS.SERVICE_ID,
                  EMAILJS.TEMPLATE_ID,
                  templateParams,
                  EMAILJS.PUBLIC_KEY
                );

                setMessage({ type: 'success', text: 'Thank you for subscribing! You will receive a confirmation email shortly.' });
                setEmail('');
              } catch (error) {
                console.error('Newsletter subscription error:', error);
                setMessage({ type: 'error', text: 'Subscription failed. Please try again or contact us directly.' });
              }
            }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-l-lg rounded-r-lg sm:rounded-r-none bg-[#D9E3F3] text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/40 text-base shadow-md"
              style={{ minWidth: 0 }}
            />
            <Button
              variant="secondary"
              type="submit"
              arrow
              className="mt-3 sm:mt-0 sm:ml-2 px-8 py-3 rounded-lg sm:rounded-l-none text-base font-medium shadow-md flex items-center gap-2 cursor-pointer"
            >
              Subscribe
            </Button>
          </form>
          {message && (
            <p className={`mt-3 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{message.text}</p>
          )}
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/img/landing/news.svg"
            alt="Newsletter illustration"
            width={540}
            height={260}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
