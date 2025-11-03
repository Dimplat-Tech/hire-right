import React from 'react';
import HeroSection from '@/components/common/HeroSection';

const PrivacyPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        backgroundImage="/img/aboutUs/hr.jpg"
        titleFirst="Privacy"
        titleSecond="Policy"
        gradientOn="second"
        subtitle="At HireRight, your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-[#0b1220] rounded-lg shadow-sm p-6 md:p-10 text-gray-800 dark:text-gray-200">
          <p className="mb-6">At HireRight, your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you visit our website or use our services.</p>

          <ol className="list-decimal ml-6 space-y-6">
            <li>
              <h3 className="font-semibold mb-2">1. Information we collect</h3>
              <ul className="list-disc ml-6">
                <li>Personal details you provide (such as name, email, phone number, CV/resume, etc.).</li>
                <li>Information collected automatically (such as cookies, IP address, and browsing activity).</li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold mb-2">2. How we use your information</h3>
              <p>We use your information to:</p>
              <ul className="list-disc ml-6">
                <li>Provide and improve our services.</li>
                <li>Respond to your enquiries.</li>
                <li>Share job opportunities, updates, or newsletters (only if you subscribe).</li>
                <li>Comply with legal or regulatory requirements.</li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold mb-2">3. How we protect your information</h3>
              <p>We use appropriate security measures to keep your personal information safe. However, no system is 100% secure, so we cannot guarantee absolute security.</p>
            </li>

            <li>
              <h3 className="font-semibold mb-2">4. Sharing your information</h3>
              <p>We do not sell or rent your information to third parties. We may share it only with:</p>
              <ul className="list-disc ml-6">
                <li>Trusted service providers who support our operations.</li>
                <li>When required by law or to protect our legal rights.</li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold mb-2">5. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of receiving our communications at any time.</li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold mb-2">6. Cookies</h3>
              <p>Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings.</p>
            </li>

            <li>
              <h3 className="font-semibold mb-2">7. Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-3">
                <a className="text-orange-500 hover:underline" href="mailto:info@hirerightng.com">📧 info@hirerightng.com</a>
              </p>
              <p>
                <a className="text-orange-500 hover:underline" href="tel:09123894223">📞 0912 389 4223</a>
              </p>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
