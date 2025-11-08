"use client"
import Image from "next/image";
import Button from "../common/Button";

interface HeroSectionProps {
  backgroundImage: string;
  titleFirst?: string;
  titleSecond?: string;
  gradientOn?: "first" | "second";
  title?: React.ReactNode; 
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  buttonVariant?: "primary" | "outline" | "secondary";
  buttonProps?: React.ComponentProps<typeof Button>;
  ellipseOverlay?: string;
  backgroundPosition?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  titleFirst,
  titleSecond,
  gradientOn = "second",
  title,
  subtitle,
  buttonText,
  buttonLink,
  buttonVariant = "secondary",
  buttonProps = {},
  ellipseOverlay = "/ellipse-overlay.svg", 
  backgroundPosition = 'center',
}) => (
  <section
    className="relative my-[100px] w-full max-w-[1280px] mx-auto mt-4 rounded-[20px] overflow-hidden min-h-[320px] h-[320px] sm:min-h-[400px] sm:h-[400px] md:min-h-[561px] md:h-[561px]"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: backgroundPosition,
      minHeight: undefined,
      height: undefined,
    }}
  >
    {/* Ellipse SVG Overlay */}
    {ellipseOverlay && (
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-center">
        <Image
          src="/img/ebook/gradient.svg"
          alt="Ellipse Gradient Overlay"
          width={1280}
          height={462}
          className="w-full h-auto absolute top-0 object-contain md:object-cover"
        />
      </div>
    )}

    {/* Dark overlay for readability */}
    <div
      className="absolute inset-0 z-20 pointer-events-none"
      style={{
        background: "rgba(0,0,0,0.5)",
        borderRadius: 20,
      }}
    />

    {/* Content */}
    <div className="relative z-30 flex flex-col items-center justify-center h-[320px] sm:h-[400px] md:h-[561px] px-4 sm:px-6 text-center">
      <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[100px] font-[500] leading-tight mb-2 break-words max-w-full">
        {title
          ? title
          : (
            <>
              {gradientOn === "first" && titleFirst ? (
                <span className="bg-gradient-to-r from-orange-400 via-[#B86B36] to-[#1746A2] bg-clip-text text-transparent mr-2">{titleFirst}</span>
              ) : (
                <span className="text-[#FAFAFA] mr-2">{titleFirst}</span>
              )}
              {gradientOn === "second" && titleSecond ? (
                <span className="bg-gradient-to-r from-orange-400 via-[#B86B36] to-[#1746A2] bg-clip-text text-transparent ml-2">{titleSecond}</span>
              ) : (
                <span className="text-[#FAFAFA] ml-2">{titleSecond}</span>
              )}
            </>
          )}
      </h1>
      <p
        className="text-white font-manrope text-base sm:text-lg  leading-[1.5] sm:leading-[40px] font-medium mb-6 sm:mb-8 max-w-[95vw] sm:max-w-[700px] md:max-w-[1150px] mx-auto"
      >
        {subtitle}
      </p>
      {buttonText && buttonLink && (
        <Button
          variant={buttonVariant}
          href={buttonLink}
          {...buttonProps}
          arrow
        >
          {buttonText}
        </Button>
      )}
    </div>
  </section>
);

export default HeroSection;
