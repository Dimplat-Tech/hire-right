// src/app/services/page.tsx
import Hero from "../../components/services/Hero";
import Recruitment from "../../components/services/Recruitment";

import PeopleManagement from "../../components/services/PeopleManagement";
import ContactBanner from "../../components/services/ContactBanner";

export default function ServicesPage() {
  return (
    <main className="pb-22 max-w-[1440px] mx-auto">
      <Hero />
      <Recruitment />
      
      <PeopleManagement />
      <ContactBanner />
    </main>
  );
}
