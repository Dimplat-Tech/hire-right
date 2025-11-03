import React from 'react';
import Button from '@/components/common/Button';

export const metadata = {
  title: 'Lazy youths? — A deeper look',
  description: 'An exploration of the recurring claim that Nigerian youths are lazy and what employers and educators can do about it.',
};

export default function LazyYouthsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <article className="prose prose-lg mx-auto">
        <h1>LAZY YOUTHS? A DEEPER LOOK TO A LOUD STATEMENT</h1>

        <p>
          Let&#39;s go back a few years when a statement was made that sent shockwaves across Nigeria:
          &ldquo;Nigerian youths are lazy&rdquo;
        </p>

        <p>
          Business owners were angry, youths were angrier and here we are, still circling around that
          question. So, were they right? Well, let&#39;s pause for a moment and ask what do you as a business
          owner see when you recruit?
        </p>

        <p>
          We&#39;ll be honest. At HireRight, we have worked with over 150 companies, placed 500+ professionals,
          and interviewed thousands of candidates across industries, and here&#39;s what we have found:
        </p>

        <h2>Nigerian youths are not lazy — many are unprepared</h2>

        <p>
          Some lack the right attitude, many lack direction, a good number have never had solid mentorship and
          too many simply don&#39;t understand the realities of the workplace but this isn&#39;t laziness, it&#39;s a
          system failure.
        </p>

        <p>
          There is a gap between what employers expect and what candidates know and every day, we see businesses
          losing money and time because of this.
        </p>

        <p>
          We see managers who are frustrated with poor work ethic. We see HR heads battling with hires who don&#39;t
          &ldquo;get it.&rdquo; We see businesses hiring for potential, then babysitting poor performance. So what can we do
          about it? That&#39;s the real question.
        </p>

        <h2>What we do at HireRight</h2>

        <p>
          At HireRight, we believe in building bridges, not burning them. That&#39;s why our work goes beyond filling
          roles. We coach candidates, we educate employers, and we focus on long-term fit not just short-term fixes.
        </p>

        <p>
          We also push for employer responsibility. Because let&#39;s be honest: some companies want magic from underpaid,
          unsupported staff and that&#39;s not sustainable either.
        </p>

        <h3>So instead of the label “lazy,” focus on:</h3>
        <ul>
          <li>Building better recruitment systems</li>
          <li>Investing in onboarding and training</li>
          <li>Speaking more to young people in a language they understand</li>
          <li>And holding both parties; employers and job seekers, accountable.</li>
        </ul>

        <p>
          Lazy youths? Not quite. But we all have work to do.
        </p>

        <p>
          If you&#39;re serious about building a workforce that works, we are here to help.
        </p>

        <div className="mt-8">
          <Button href="/lets-talk" variant="primary">Talk to us</Button>
        </div>
      </article>
    </main>
  );
}
