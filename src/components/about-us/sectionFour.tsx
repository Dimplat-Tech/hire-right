import React from "react";

const SectionFour = () => (
  <section className="h-auto w-full mt-15">
    <h1 className="text-[#F27933] text-center text-[26px] sm:text-[50px] md:text-[60px] font-space grotesk font-[500]">
      The HireRight Difference
    </h1>
    {/* <!-- for absolute positioning of the horizontal line within it. --> */}
    <div className="relative w-full max-w-6xl px-2 m-auto">
      {/* Horizontal line for desktop */}
      <div className=" absolute inset-0  h-[1.4px] my-auto bg-[#003780] hidden lg:block"></div>

      {/* Vertical line for mobile */}
      {/* <div className="absolute left-1/2 top-6 bottom-6 w-[2px] bg-[#003780] md:hidden transform -translate-x-1/2  "></div>  */}

      {/* <div className="relative flex flex-col  md:flex-row justify-between items-center md:items-start gap-12"> */}
      <div className="hidden lg:flex relative items-start gap-10 justify-between mt-16 max-w-6xl   mx-auto">
        {/* Timeline Point 1 */}

        <div className="flex flex-col items-center text-center md:w-1/5 w-full px-4 ">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10 md:mt-10 mr-50 ">
            1
          </div>
          <div className="mt-2 text-sm text-gray-700 leading-snug px-1 w-[250px] px-4 md:mr-35 ">
            People-first, strategy-led recruitment.
          </div>
        </div>

        {/* Timeline Point 2 */}
        <div className="flex flex-col items-center text-center md:w-1/5 w-full px-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10 md:mr-30 mt-10">
            2
          </div>
          <div className="  mt-2 text-sm text-gray-700 leading-snug px-1 w-[250px] text-right md:mr-35">
            Deep industry knowledge across sectors.
          </div>
        </div>

        {/* Timeline Point 3 */}
        <div className="flex flex-col items-center  md:w-1/5 text-center">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10 md:mr-30 mt-10">
            3
          </div>
          <div className="mt-2 text-sm text-gray-700 leading-snug px-1 w-[250px] md:mr-25">
            Transparent, tailored partnership model.
          </div>
        </div>

        {/* Timeline Point 4 */}
        <div className="flex flex-col items-center text-center w-1/5">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10 md:mr-30 mt-10">
            4
          </div>
          <div className="mt-2 text-sm text-gray-700 leading-snug px-1 w-[250px] md:mr-25 ">
               Full-spectrum HR & talent solutions.
          </div>
        </div>

        {/* Timeline Point 5 */}
        <div className="flex flex-col items-center md:w-1/5 text-center ">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10  md:mr-30 mt-10">
            5
          </div>
          <div className="mt-2 text-sm text-gray-700 leading-snug px-1 w-[250px] md:mr-35">
             A reputation built on trust, precision, and results.
          </div>
        </div>
      </div>

      {/* Vertical timeline for small screens only */}
      <div>
        <div className="relative flex flex-col gap-10 mt-12 max-w-md mx-auto  lg:hidden">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#003780] z-0"></div>

          {/* Point 1 */}
          <div className="relative flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10">
              1
            </div>
            <p className="text-sm text-gray-700 leading-snug">
              People-first, strategy-led recruitment.
            </p>
          </div>

          {/* Point 2 */}
          <div className="relative flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10">
              2
            </div>
            <p className="text-sm text-gray-700 leading-snug">
              Deep industry knowledge across sectors.
            </p>
          </div>

          {/* Point 3 */}
          <div className="relative flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10">
              3
            </div>
            <p className="text-sm text-gray-700 leading-snug">
              Transparent, tailored partnership model.
            </p>
          </div>

          {/* Point 4 */}
          <div className="relative flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10">
              4
            </div>
            <p className="text-sm text-gray-700 leading-snug">
              Full-spectrum HR & talent solutions.
            </p>
          </div>

          {/* Point 5 */}
          <div className="relative flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-lg text-blue-900 z-10">
              5
            </div>
            <p className="text-sm text-gray-700 leading-snug">
              A reputation built on trust, precision, and results.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Learn more button removed per design request */}
  </section>
);

export default SectionFour;
