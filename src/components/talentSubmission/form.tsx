import React from "react";
import TalentButton from "./buttonSubmission";


const TalentForm = () => {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <p className="font-manrope font-semibold text-[18px] text-center mb-8">Please fill out the form below to join our talent pool, and take the next step toward meaningful employment.</p>
      <form className="space-y-10 w-full mx-auto py-4">
    

        <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder ="Full Name * "
            />
          </div>
        </div>

        
        <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="tel"
              placeholder="Phone Number *"
            />
          </div>
        </div>


<div className="mb-4">
  <label className="block text-gray-700 font-medium mb-2">
    Gender <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-6">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="gender"
        value="male"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Male
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="gender"
        value="female"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Female
    </label>
  </div>
</div>









 <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder="Preferred  job Location *"
            />
          </div>
        </div>




         <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder="Current Location *"
            />
          </div>
        </div>


<div className="mt-25">
  <label className="block text-gray-700 font-medium mb-6">
    Availability for new role <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-4">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="immediately"
        value="immediately"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Immediately
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="two weeks"
        value="two weeks"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Two weeks
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="Month"
        value="Month"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      One Month
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="Months"
        value="Months"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Three Months
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="Other"
        value="Other"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Other
    </label>
  </div>
</div>






<div className="mt-25">
  <label className="block text-gray-700 font-medium mb-6">
    Job level <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-4">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="hybrid"
        value="Hybrid"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Hybrid
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Fully on-site
    </label>
  
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Other
    </label>
  </div>
</div>






<div className="mt-25">
  <label className="block text-gray-700 font-medium mb-6">
    Current employment status <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-4">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Employed
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Unemployed
    </label>
    
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Self-employed
    </label>
  
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="Other"
        value="Other"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Other
    </label>
  </div>
</div>





<div className="mt-25">
  <label className="block text-gray-700 font-medium mb-7">
    Preferred work style <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-5">
     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Entry level
    </label>

     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Mid level
    </label>


    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Senior
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Leadership executive positon *
    </label>
  
  
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="Other"
        value="Other"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Other
    </label>
  </div>
</div>



  <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder="Current industry *"
            />
          </div>
        </div>




     <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder="Current job title *"
            />
          </div>
        </div>



             <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder="Roles considering for *"
            />
          </div>
        </div>




        
<div className="mt-25">
  <label className="block text-gray-700 font-medium mb-7">
    Years of expereience <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-5">
     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Entry level
    </label>

     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    1 - 3 years
    </label>


    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      3 - 5 years
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
  5 - 10 years
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    10 - 15 years
    </label>
  
  
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name="Other"
        value="Other"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Above 15 years
    </label>
  </div>
</div>





<div className="mt-25">
  <label className="block text-gray-700 font-medium mb-7">
    Highest level of education  <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-5">
     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    Diploma or equivalent
    </label>

     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
    HND
    </label>


    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Associate&apos;s degree
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
  Bachelor&apos;s degree
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
   Master&apos;s degree
    </label>
  
  
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      Doctorate(Ph.D. or Professional doctorate)
    </label>
  </div>
</div>






  <div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <select
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              defaultValue=""
              aria-label="Select skills"
            >
              <option value="" disabled>
                - Select which of these skills best describes you -
              </option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="operations">Operations</option>
              <option value="finance">Finance</option>
              <option value="hr">Human Resources</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>




<div className="mt-25">
  <label className="block text-gray-700 font-medium mb-7">
  How did you hear about us?   <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col gap-5">
     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
   Social media
    </label>

     <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
HireRight website
    </label>


    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
     Referral
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
  Friends/Colleague
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        value=""
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
Other
    </label>
  </div>
</div>




<div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder="Upload your CV *"
            />
          </div>
        </div>





<div
          className="rounded-lg p-[2px]"
          style={{ background: "linear-gradient(45deg, #003780, #f27933)" }}
        >
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full h-[60px] md:w-[800px] md:h-[90px] lg:w-[1283px] lg:h-[116px] px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606] placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
              type="text"
              placeholder="Message to hiring manager(optional) "
            />
          </div>
        </div>


    <div className="mt-25 font-medium font-manrope text-[24px]">
      <p>Before you submit, kindly click the link to join our telegram channel: </p>
    </div>

<div className="font-medium text-[#156CE0] font-manrope text-[24px]">
  <a  href="https://t.me/+j1VxswDXjEYzMTY0">https://t.me/+j1VxswDXjEYzMTY0</a>
</div>

      <TalentButton/>

      </form>

    
      
    </div>
  );
};

export default TalentForm;
