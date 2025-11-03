import JobCard from "./Jobcard";
import type { Job } from "@/data/jobs";
import { jobs as defaultJobs } from "@/data/jobs";

type Props = {
  items?: Job[];
  withPadding?: boolean;
};

export default function Cards({ items, withPadding = true }: Props) {
  const list = items ?? defaultJobs;

  return (
    <section
      className={`mx-auto w-[92%] md:w-[88%] lg:w-[84%] ${
        withPadding ? "py-10" : ""
      } space-y-20`}
    >
      {list.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}