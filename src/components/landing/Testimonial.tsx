import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Grace A.',
    feedback: "I applied through HireRight and was in my dream role within two weeks! They didn't just find me a job, they matched me with a company where I can grow and feel valued.",
    emoji: '👩🏾‍💼',
    bg: 'from-yellow-300 via-pink-300 to-red-400',
  },
  {
    name: 'Tunde O.',
    feedback: "Hire Right made the process so easy. They kept me updated at every stage, prepared me for my interviews, and celebrated with me when I got the offer. I felt supported from start to finish.",
    emoji: '👨🏿‍💼',
    bg: 'from-cyan-300 via-blue-300 to-indigo-400',
  },
  {
    name: 'Michael B.',
    feedback: "What stood out to me was how well they understood my skills and career goals. The role they connected me with was exactly what I had been hoping for.",
    emoji: '👨🏾‍💻',
    bg: 'from-green-300 via-emerald-300 to-teal-400',
  },
  {
    name: 'Amaka E.',
    feedback: "I felt like I was truly supported throughout the process. Hire Right made sure I was prepared and confident every step of the way.",
    emoji: '👩🏽‍💻',
    bg: 'from-pink-300 via-rose-300 to-orange-300',
  },
];

const Testimonial = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-[60px] font-[500] font-space-grotesk text-blue-900">Testimonials</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-6 md:gap-10 flex-nowrap animate-marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-80 md:w-96 bg-orange-500 text-white rounded-xl p-6 shadow-lg flex-shrink-0 flex flex-col relative"
            >
              <div className="absolute top-4 left-4">
                <Image
                  src="/img/landing/like.svg"
                  alt="Thumbs Up Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div className="absolute top-4 right-4">
                <Image
                  src="/img/landing/star.svg"
                  alt="Sparkle Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex items-center mb-4">
                {/* Memoji style avatar: emoji in a colorful gradient circle */}
                <div className={`h-20 w-20 rounded-full flex items-center justify-center text-3xl shadow-xl ring-4 ring-white bg-gradient-to-tr ${testimonial.bg}`}>
                  <span aria-hidden>{testimonial.emoji}</span>
                </div>
              </div>
              <h3 className="text-lg font-space-grotesk md:text-xl font-bold mb-3 text-blue-900">{testimonial.name}</h3>
              <p className="text-sm md:text-base font-manrope text-center leading-relaxed">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }

          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 4s; 
            }
          }
      `}</style>
    </section>
  );
};

export default Testimonial;