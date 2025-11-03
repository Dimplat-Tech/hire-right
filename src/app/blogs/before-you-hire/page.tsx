import React from 'react';
import Button from '@/components/common/Button';

export const metadata = {
  title: 'Before You Hire — The one question that changes everything',
  description: 'Why are you hiring for this role? The one question that reveals the real need behind every open role.',
};

export default function BeforeYouHirePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <article className="prose prose-lg mx-auto">
        <h1>BEFORE YOU HIRE: THE ONE QUESTION THAT CHANGES EVERYTHING</h1>

        <p>
          When businesses reach out to us to fill a role, one of the first things we ask is, <strong>Why are you hiring for this role?</strong>
        </p>

        <p>
          It might sound like a simple question but you would be surprised how many hiring managers or business owners pause before answering.
        </p>

        <p>
          Some say, “We just need someone urgently.” Others say, “The last person didn’t work out.” A few say, “We’re growing, and we need more hands.”
        </p>

        <p>
          But the ones who truly understand the weight of the decision go deeper. They know that behind every open role is a bigger picture, a business need,
          a leadership gap, a culture shift, a missed opportunity, or an urgent call to scale.
        </p>

        <p>
          At HireRight, we’ve worked with over 150 companies across industries, and we’ve seen this play out in real time:
        </p>

        <blockquote>
          <p>
            A company once reached out to us saying they needed a new operations manager because the last one “wasn’t working.” But when we asked why, they
            revealed it wasn’t just about the manager, their business had doubled in size, and the job had outgrown the original structure. The real need? A
            systems thinker who could scale operations, not just manage them.
          </p>
        </blockquote>

        <blockquote>
          <p>
            Another brand told us they needed three new sales reps fast. When we asked why, they mentioned targets not being met. But the root cause wasn’t lack
            of people — it was poor team performance and zero coaching. Instead of just hiring more, we recommended hiring one sales lead with training ability,
            then later filled two support roles. Their numbers picked up within a quarter.
          </p>
        </blockquote>

        <p>
          You see, hiring right isn’t just about how fast we can find you someone. It’s about why you need them in the first place.
        </p>

        <p>
          When you are clear about the “why,” the “who” becomes easier to define, and when the “who” is aligned, your team moves with power.
        </p>

        <p>
          This is why our process at HireRight is different. We don’t jump straight into sharing CVs. We dig in, we listen, we uncover the gaps, the unspoken needs,
          and the unaddressed issues that are often at the core of why hiring feels hard, and then we tailor the solution not just for today, but for where your
          business is going.
        </p>

        <p>
          Because to us, recruitment is not a checkbox exercise. It is strategic partnership, business growth, and it’s our reputation too.
        </p>

        <h2>So, before you open that next job role, pause and ask:</h2>
        <p className="font-semibold">“Why are we hiring for this?”</p>

        <p>
          And if the answer isn’t clear, talk to us, we’ll help you figure it out together; your success is our success and when you hire with purpose, you build
          teams that move your business forward.
        </p>

        <div className="mt-8">
          <Button href="/lets-talk" variant="primary">Talk to us</Button>
        </div>
      </article>
    </main>
  );
}
