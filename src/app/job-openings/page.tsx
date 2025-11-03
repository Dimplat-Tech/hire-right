// import Hero from "../../components/jobopening/Hero";
// import Cards from "../../components/jobopening/Cards";
// import Search from "../../components/jobopening/Search";
// import Returnbutton from "../../components/jobopening/Returnbutton"; // match exact file name


// export default function JobsPage() {
//   return (
//     <>
//       <Hero />
//       <Search />
//       <Cards />
//       <Returnbutton />
      
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Hero from "../../components/jobopening/Hero";
import Cards from "../../components/jobopening/Cards";
import Search from "../../components/jobopening/Search";
import Returnbutton from "../../components/jobopening/Returnbutton";
import { jobs as allJobs } from "../../data/jobs";

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  // Filter jobs based on search
  const filteredJobs = allJobs.filter(job =>
    (job.role?.toLowerCase().includes(query.toLowerCase()) ||
     job.company?.toLowerCase().includes(query.toLowerCase())) &&
    (location === "" || job.location?.toLowerCase().includes(location.toLowerCase()))
  );

  return (
    <>
      <Hero />
      <Search
        onSearch={(q, loc) => {
          setQuery(q);
          setLocation(loc);
        }}
        defaultQuery={query}
        defaultLocation={location}
      />
      <Cards items={filteredJobs} />
      <Returnbutton />
    </>
  );
}