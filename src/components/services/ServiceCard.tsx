import Button from "../common/Button";
import Image from "next/image";
import { ServiceItem } from "../../data/services";

interface ServiceCardProps extends ServiceItem {
  features?: string[];
  showCTA?: boolean;
  featured?: boolean;
}

export default function ServiceCard({ title, description, href, features, showCTA = true, featured = false }: ServiceCardProps) {
  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB86B] via-[#FF7A59] to-[#FF4E50] opacity-95" />
        <div className="relative p-8 md:p-10 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">{title}</h3>
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-md text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-95" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Trusted
            </div>
          </div>

          <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-white/95 font-medium">{description}</p>

          {features && features.length > 0 && (
            <ul className="mt-6 grid grid-cols-1 gap-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-white/20 text-white text-sm">✓</span>
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Optionally render CTA if requested */}
          {showCTA && (
            <div className="mt-6">
              <Button variant="outline" href={href} className="bg-white text-[#FF4E50] px-5 py-2 rounded-md font-semibold border-transparent hover:border-transparent">Contact us</Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[270px]  md:h-[300px] rounded-[15px] bg-[#06060608] p-5 shadow-xl ring-1 ring-blue-100/50 transition-shadow hover:shadow-md flex flex-col justify-between">
      {/* Title (blue, medium size) */}
      <h3 className="text-blue-800 font-semibold text-[20px] leading-6 font-space-grotesk">
        {title}
      </h3>

      {/* Description (smaller, comfy line-height) */}
      <p className="text-[16px] leading-6 text-gray-700 mt-[15px] font-manrope">
        {description}
      </p>

      {/* Features list with star icon */}
      {features && (
        <ul className="mt-3 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700 text-[16px]">
              <Image
                src="/service/star.png"
                alt="star"
                width={16}
                height={16}
                className="mr-2"
              />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Centered CTA using the shared Button; a bit smaller than default */}
      {showCTA && (
        <div className="pt-2 flex justify-center">
          <Button variant="primary" href={href} className="px-6 py-2 text-sm " arrow>
            <span className="inline-flex items-center gap-2">Learn more</span>
          </Button>
        </div>
      )}
    </div>
  );
}