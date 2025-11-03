import Image from "next/image";
import Link from 'next/link';
import Button from "../common/Button";
// Calendar removed — dates hidden in listing
const ebooks = [
  {
    title: "Business Owners",
    subtitle: "BEFORE YOU HIRE: THE ONE QUESTION THAT CHANGES EVERYTHING.",
    description:"When businesses reach out to us to fill a role, one of the first things we ask is,Why are you hiring for this role?It might sound like a simple question  but you would be surprised how many hiring managers or business owners pause before answering.",
    image: "/img/blog/b11.svg",
    logo: "/img/landing/Logo.svg",
    buttonText: "Read more...",
    buttonLink: "/blogs/before-you-hire",
    readTime: "5mins",
  },
  {
    title: "Hiring Managers",
    subtitle: "BEFORE ANOTHER STAR EMPLOYEE WALKS AWAY....READ THIS.",
    description:
      "Let’s talk about the pain no one prepares you for;You went through the stress; screening, interviews, offers, negotiation. You finally found the one, the candidate that just gets it. They resume, they perform, they fit and then… they leave..",
    image: "/img/blog/b14.svg",
    logo: "/img/landing/Logo.svg",
    buttonText: "Read more...",
    buttonLink: "/ebooks/hiring-managers-tech-talent",
    readTime: "5mins",
  },
  {
    title: "Founders",
    subtitle: "HR is Not Just Recruitment.",
    description:
      "Dear Founder, Business Leader, or People Manager,Let's talk. When most people hear “HR,” what usually comes to mind is hiring.Hiring managers, shortlisting CVs, conducting interviews, and onboarding new staff, that's it, and because of that, many businesses believe once they have filled the roles, HR is “done.” Box checked.",
    image: "/img/blog/b12.svg",
    logo: "/img/landing/Logo.svg",
    buttonText: "Read more...",
    buttonLink: "/ebooks/hiring-managers-future-ready",
    readTime: "5mins",
  },
  {
    title: "Talents",
    subtitle: "When Leadership Breaks Its Own Rules: Who Holds Culture Accountable?.",
    description:
      "Dear Leaders,Let’s talk.It’s been a wild week on the internet. You’ve probably heard about the astronomer tech CEO who resigned after the viral Coldplay kiss moment with his HR head at a company retreat. Just in case you missed it, here’s the gist: company rules clearly frowned on workplace romance but when it came to top leadership, those rules… evaporated.",
    image: "/img/blog/b12.svg",
    logo: "/img/landing/Logo.svg",
    buttonText: "Read more...",
    buttonLink: "/ebooks/hiring-managers-future-ready",
    readTime: "5mins",
  },
  {
    title: "Hiring Managers",
    subtitle: " A DEEPER LOOK TO A LOUD STATEMENT.",
    description:
      "Let’s go back a few years when a statement was made that sent shockwaves across Nigeria “Nigerian youths are lazy” Business owners were angry, youths were angrier and  here we are, still circling around that question.So, were they right?.",
    image: "/img/blog/b12.svg",
    logo: "/img/landing/Logo.svg",
    buttonText: "Read more...",
    buttonLink: "/blogs/lazy-youths",
    readTime: "5mins",
  },
  {
    title: "Business Owners",
    subtitle: "DEAR BUSINESS OWNER, WHAT IS YOUR BIGGEST RECRUITMENT CHALLENGE RIGHT NOW?.",
    description:
      "Let’s have an honest conversation.If we sat across from you right now and asked,“What is the biggest challenge you're facing with recruitment at the moment?”What would your answer be?",
    image: "/img/blog/b12.svg",
    logo: "/img/landing/Logo.svg",
    buttonText: "Read more...",
    buttonLink: "/ebooks/hiring-managers-future-ready",
    readTime: "5mins",
  },
];



type BlogCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink?: string;
  readTime: string;
  logo: string;
};

export  function EbookCard({
  title,
  subtitle,
  description,
  image,
  // date removed
  buttonText,
  buttonLink = '/blogs',
  readTime,
  logo,
}: BlogCardProps) {
  return (
    <div className="flex  flex-col sm:flex-row max-w-[1280px] bg-[rgba(6, 6, 6, 0.03)] rounded-2xl shadow-sm p-4 mb-8 items-start sm:items-center gap-4 sm:gap-6 border border-gray-100">
      {/* Image Section */}
      <div className="relative w-full sm:w-[220px] h-[200px] sm:h-[220px] flex-shrink-0 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />

        {/* Logo overlay (top-left) */}
        <div className="absolute top-2 left-2   flex items-center ">
          <Image src={logo} alt="logo" width={84} height={24} />
        
        </div>

        {/* Read time (bottom-left) */}
        <div className="absolute bottom-2 left-2 bg-primary-orange/50 text-primary-blue text-xs px-1 py-1 rounded-md">
          {readTime} read
        </div>
      </div>

      <div className="flex-1 w-full">
        <h3 className="text-primary-orange  text-sm md:text-[26px] font-[400] mb-1 font-space-grotesk">
          {title}
        </h3>
        <h4 className="text-base sm:text-[20px] font-bold font-space-grotesk text-primary-blue mb-2 leading-snug">
          {subtitle}
        </h4>
        <p className="text-[#060606] mt-6 text-sm sm:text-[20px] mb-3 leading-relaxed font-normal font-manrope">
          {description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <Link
              href={buttonLink}
              className="text-primary-orange font-space-grotesk text-sm hover:underline font-medium"
            >
              {buttonText}
            </Link>
          {/* date removed from blog listing per request */}
        </div>
      </div>
    </div>
  );
}

export default function EbookSection2() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      {ebooks.map((ebook, idx) => (
        <EbookCard key={idx} {...ebook} />
      ))}
      <div className="flex justify-center mt-16">
        <Button
          variant="secondary"
          href="/"
          className="px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl"
        arrow>
          Return to home
        </Button>   
      </div>
    </div>
  );
}
