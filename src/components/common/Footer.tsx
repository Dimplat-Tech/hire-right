import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Send, Instagram, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Blog", href: "/blogs" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hire-right-ng/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "Telegram",
      href: "https://t.me/+Gsb8Qks9FT4zZjRk",
      icon: <Send className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/hirerightng?igsh=MTQ5Mm1lbmt0eTR0ZA%3D%3D&utm_source=qr",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/2349123894223",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@hireright.ng?_t=ZS-8ymdrhzNoaQ&_r=1",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1033_493)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.35016 3.66042C10.5509 3.41613 12.7602 3.2147 14.9994 3.2147C17.2387 3.2147 19.448 3.41613 21.6487 3.66042C22.8525 3.8002 23.9736 4.34321 24.8295 5.20111C25.6855 6.05901 26.226 7.18131 26.363 8.38542C26.5966 10.5711 26.7852 12.7718 26.7852 15.0004C26.7852 17.229 26.5966 19.4297 26.363 21.6154C26.226 22.8195 25.6855 23.9418 24.8295 24.7997C23.9736 25.6576 22.8525 26.2006 21.6487 26.3404C19.448 26.5847 17.2387 26.7861 14.9994 26.7861C12.7602 26.7861 10.5509 26.5847 8.35016 26.3404C7.14636 26.2006 6.02529 25.6576 5.16934 24.7997C4.31338 23.9418 3.77292 22.8195 3.63587 21.6154C3.4023 19.4297 3.21373 17.229 3.21373 15.0004C3.21373 12.7718 3.4023 10.5711 3.63587 8.38542C3.77292 7.18131 4.31338 6.05901 5.16934 5.20111C6.02529 4.34321 7.14636 3.8002 8.35016 3.66042ZM14.9994 0.536133C12.6102 0.536133 10.2809 0.750419 8.05658 0.996847C6.24541 1.20312 4.55794 2.01826 3.27053 3.30879C1.98311 4.59932 1.17205 6.28875 0.970156 8.10042C0.736585 10.314 0.535156 12.6283 0.535156 15.0004C0.535156 17.3726 0.736585 19.6868 0.972299 21.9004C1.17446 23.7111 1.98511 25.3995 3.27162 26.6895C4.55814 27.9795 6.24436 28.7948 8.05444 29.0018C10.2809 29.2504 12.6102 29.4647 14.9994 29.4647C17.3887 29.4647 19.718 29.2504 21.9423 29.004C23.7534 28.7972 25.4406 27.9815 26.7277 26.6906C28.0147 25.3997 28.8252 23.71 29.0266 21.8983C29.2623 19.6868 29.4637 17.3726 29.4637 15.0004C29.4637 12.6283 29.2623 10.314 29.0266 8.10042C28.8249 6.2894 28.0144 4.60047 26.7279 3.31002C25.4413 2.01957 23.7548 1.20402 21.9444 0.996847C19.718 0.750419 17.3887 0.536133 14.9994 0.536133ZM17.9544 7.00113C17.8641 6.6179 17.6363 6.28115 17.3141 6.05479C16.992 5.82843 16.5979 5.7282 16.2068 5.77313C15.8156 5.81807 15.4545 6.00502 15.1921 6.29854C14.9296 6.59205 14.7841 6.97169 14.783 7.36542V18.4568C14.783 18.9653 14.6323 19.4624 14.3498 19.8852C14.0673 20.3081 13.6659 20.6376 13.1961 20.8323C12.7264 21.027 12.2095 21.0781 11.7107 20.979C11.212 20.88 10.7538 20.6353 10.3941 20.2759C10.0344 19.9165 9.78929 19.4585 9.68983 18.9598C9.59037 18.4612 9.64098 17.9442 9.83528 17.4743C10.0296 17.0044 10.3588 16.6026 10.7814 16.3198C11.204 16.037 11.701 15.8858 12.2094 15.8854C12.6357 15.8854 13.0445 15.7161 13.3459 15.4147C13.6473 15.1133 13.8166 14.7045 13.8166 14.2783C13.8166 13.852 13.6473 13.4433 13.3459 13.1419C13.0445 12.8405 12.6357 12.6711 12.2094 12.6711C11.0651 12.6711 9.94653 13.0105 8.99507 13.6462C8.04362 14.2819 7.30205 15.1855 6.86414 16.2428C6.42623 17.3 6.31166 18.4633 6.5349 19.5856C6.75814 20.7079 7.30918 21.7388 8.11832 22.548C8.92747 23.3571 9.95839 23.9081 11.0807 24.1314C12.203 24.3546 13.3663 24.2401 14.4235 23.8021C15.4807 23.3642 16.3843 22.6227 17.0201 21.6712C17.6558 20.7198 17.9952 19.6012 17.9952 18.4568V12.5661C19.1116 13.2926 20.4552 13.6804 21.9702 13.6804C22.3964 13.6804 22.8052 13.5111 23.1066 13.2097C23.408 12.9083 23.5773 12.4995 23.5773 12.0733C23.5773 11.647 23.408 11.2383 23.1066 10.9369C22.8052 10.6355 22.3964 10.4661 21.9702 10.4661C20.7916 10.4661 19.9494 10.104 19.3387 9.5597C18.7087 8.99828 18.2202 8.14328 17.9544 7.00113Z"
              fill="#FAFAFA"
            />
          </g>
          <defs>
            <clipPath id="clip0_1033_493">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <footer
      style={{ backgroundColor: "var(--color-primary-orange)" }}
      className="text-white font-montserrat relative overflow-hidden min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex flex-col   mt-24 justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Left: Tagline & Social */}
          <div>
            <p className="text-lg mb-8 mt-2">
              Connecting talent with opportunity!
            </p>
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="text-xs flex items-center space-x-2 text-white/80 mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M9.5 10.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5 2.5v2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>
                {currentYear} HireRight. Serving Africa and beyond. All rights
                reserved.
              </span>
            </div>
          </div>

          {/* Center: Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline text-white/90 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80" />
                <span className="text-white/90">+234-9123894223</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white/90">
                  Lekki Phase 1, Lagos State.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80" />
                <Link
                  href="mailto:info@hirerightn.com"
                  className="text-white/90 hover:text-white transition-colors duration-200 hover:underline"
                >
                  info@hirerightng.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Watermark Logo - bottom center, behind content */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 w-full max-w-[95vw] h-[90px] sm:h-[140px] md:h-[200px] lg:h-[260px] xl:h-[340px] pointer-events-none select-none flex items-end justify-center">
        <Image
          src="/img/landing/HR BW.svg"
          alt="HireRight watermark"
          fill
          style={{ objectFit: "contain", opacity: 0 }}
          className="object-bottom w-full h-full"
          priority
        />
      </div>
    </footer>
  );
};

export default Footer;
