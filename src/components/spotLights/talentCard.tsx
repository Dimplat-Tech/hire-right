"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Button from "../common/Button";
import { init, send } from '@emailjs/browser';

const EMAILJS = {
  SERVICE_ID: 'service_fsh6ew9',
  TEMPLATE_ID: 'template_5wwri8n',
  PUBLIC_KEY: '2k0B6L0Ikj4ZVJ7ue'
};

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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
        talent_name: name,
        talent_role: role,
        talent_location: location,
        message: `Newsletter subscription and talent interest: ${name} (${role})`
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
        setShowDialog(false);
        setStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <meta 
          name="description" 
          content={`View ${name}'s professional profile. ${role} with ${experience} of experience in ${location}. Connect and receive updates about talented professionals.`}
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
              Subscribe & Connect
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

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with {name}</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive updates about {name} and other talented professionals.
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
                variant="secondary"
                type="submit"
                className="w-full justify-center"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 
                 status === 'success' ? 'Subscribed!' : 
                 status === 'error' ? 'Try Again' : 
                 'Subscribe Now'}
              </Button>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">
                  Thank you for subscribing! You&apos;ll receive updates about {name} and other opportunities.
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
    </>
  );
}

export default ProfileCard;