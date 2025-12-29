import Link from 'next/link';

export const metadata = {
  title: 'Hire Right — Ebook Download',
  description: 'Red Flags in Hiring — download the Hire Right ebook',
};

const googleDriveUrl =
  'https://drive.google.com/file/d/1mUiVVFzHTfiGWUYGFHyJMid4TeE8257A/view?usp=sharing';

export default function EbookDownloadPage(): React.ReactNode {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">INTRODUCTION</h1>

      <p className="mb-4">Have you ever onboarded a new hire only to realize within months that they’re not meeting expectations, despite training and guidance?</p>
      <p className="mb-4">After these months with little or no productivity from your hire, do you sit back, feel sad, and get discouraged about hiring? Do you reflect on the recruitment process and wonder what you could have done right, or are you stuck trying to figure out what went wrong?</p>
      <p className="mb-6">Are you currently struggling to identify the warning signs before making a hiring decision? This guide will help you uncover the top red flags in hiring that can save your business from costly mistakes and show you how to streamline your recruitment process for better results.</p>

      <p className="mb-6">With over six years of experience in recruitment, Hire Right NG has helped businesses like yours avoid bad hires and build high-performing teams. We believe that the right people are essential for driving the growth of your organization, and we are here to guide you through the process.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">TABLE OF CONTENT</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>INTRODUCTION</li>
        <li>CHAPTER ONE: RED FLAG #1: JOB-HOPPING (THE COST OF COMMITMENT ISSUES)</li>
        <li>CHAPTER TWO: RED FLAG #2: A LACK OF SPECIALIZATION (WHY FOCUS MATTERS)</li>
        <li>CHAPTER THREE: RED FLAG #3: SMART ANSWERS WITHOUT SUBSTANCE (SPOTTING THE BLUFF)</li>
        <li>CHAPTER FOUR: OUR PROVEN RECRUITMENT PROCESS</li>
      </ol>

      <h3 className="text-xl font-bold mt-6">CHAPTER ONE — Red Flag #1: JOB-HOPPING</h3>
      <p className="mb-4">Job hopping is when someone frequently switches jobs, often staying in each role for a short period, like a few months or a year, before moving to another job.</p>
      <p className="mb-4">Did you know that candidates who spend short durations at multiple companies can indicate a lack of commitment? While they might have valid reasons, this pattern often suggests:</p>
      <ul className="list-disc list-inside mb-4">
        <li>A tendency to leave when things get tough.</li>
        <li>Difficulty settling into a work environment.</li>
        <li>Potentially lacking long-term goal alignment with employers.</li>
      </ul>
      <p className="mb-4">How to Avoid Job-Hoppers: Ask targeted interview questions such as “What prompted your decision to leave your last few roles?” and “What are you looking for in your next role?”</p>

      <h3 className="text-xl font-bold mt-6">CHAPTER TWO — Red Flag #2: A LACK OF SPECIALIZATION</h3>
      <p className="mb-4">Another red flag that can be spotted easily through a resume is a varied job history. Over the last two years, have they held numerous unrelated roles? While versatility is a strength, too much variance can signal lack of a clear career trajectory.</p>

      <h3 className="text-xl font-bold mt-6">CHAPTER THREE — Red Flag #3: SMART ANSWERS WITHOUT SUBSTANCE</h3>
      <p className="mb-4">Many candidates impress interviewers with polished communication skills and confidence, even when they lack the required expertise. Signs include overly polished or rehearsed answers and evasive responses to specific job-related questions. Use practical tests or scenario-based questions to reveal real capability.</p>

      <h3 className="text-xl font-bold mt-6">CHAPTER FOUR — OUR PROVEN RECRUITMENT PROCESS</h3>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Application Review</strong> — We review applications to identify qualified candidates.</li>
        <li><strong>Initial Screening</strong> — Preliminary screenings to gauge interest and cultural fit.</li>
        <li><strong>Structured Interviews</strong> — Behavioral and technical interviews.</li>
        <li><strong>Skills Assessment</strong> — Tailored tests for technical roles.</li>
        <li><strong>Final Round & Decision</strong> — Leadership interviews to confirm the best match.</li>
      </ol>

      <p className="mt-6 mb-6">Need assistance with your hiring process? Let us conduct in-depth assessments and find the perfect candidate for your team.</p>

      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
          <div className="flex gap-4">
            <a href={googleDriveUrl} target="_blank" rel="noopener noreferrer" className="border border-primary-orange text-primary-orange bg-white px-4 py-2 rounded-md">Download PDF</a>
            <Link href="/" className="border border-gray-300 px-4 py-2 rounded-md">Return home</Link>
          </div>
        </div>
      </div>

      {/* single Download button shown above in white card */}

      <section className="mt-10 text-sm text-gray-600">
        <h4 className="font-semibold">Contact Us</h4>
        <p>📩 Email: hirerightng@elvaridah.com</p>
        <p>📞 Phone: +234 (0) 912 389 4223</p>
        <p>🌐 Visit: https://bit.ly/consultwithHR</p>
      </section>

      <p className="mt-6 font-bold">Hire Now, Hire Right!</p>
    </main>
  );
}
