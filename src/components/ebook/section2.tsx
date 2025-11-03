import Image from "next/image";
import Button from "../common/Button";
// Calendar removed — dates hidden in listing
const ebooks = [
  {
    title: "RED FLAG #1",
    subtitle: "Job-Hoping: The Cost Of Commitment Issues.",
    description:
      "Job hoping is when someone frequently switches jobs,Often staying in each role for a short period,Like a few months or a year,Before moving to another job.",
    image: "/img/blog/b11.svg",
    buttonText: "Read more...",
    buttonLink: "/ebooks/talents-remote-jobs",
    readTime: "5mins",
  },
  {
    title: "RED FLAG #2",
    subtitle: "A Lack Of Specialization: Why Focus Matters.",
    description:
      "Another red flag that can be spotted easily through a resume is a varied job history.Over the last 2 years have they held numerous unrelated roles ?",
    image: "/img/blog/b14.svg",
    buttonText: "Read more...",
    buttonLink: "/ebooks/hiring-managers-tech-talent",
    readTime: "5mins",
  },
  {
    title: "RED FLAG #3",
    subtitle: "Smart Answers Without Substance: Spotting The Bluff.",
    description:
      "This is one of the trickest red flags to spot.Many candidates impress interviewers with there polished communication skills and confidence,Even when they lack required expertise for the job.",
    image: "/img/blog/b12.svg",
    buttonText: "Read more...",
    buttonLink: "/ebooks/hiring-managers-future-ready",
    readTime: "5mins",
  },
];



type EbookCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  readTime: string;
};

export  function EbookCard({
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  readTime,
}: EbookCardProps) {
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
        {/* <div className="absolute top-2 left-2   flex items-center ">
          <Image src={logo} alt="logo" width={84} height={24} />
        
        </div> */}

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
          <a
            href={buttonLink}
            className="text-primary-orange font-space-grotesk text-sm hover:underline font-medium"
          >
            {buttonText}
          </a>
          {/* date removed from ebook listing per request */}
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
