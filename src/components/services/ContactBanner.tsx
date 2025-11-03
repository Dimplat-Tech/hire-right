// Example usage in ContactBanner or anywhere you want the orange button
import Button from "../common/Button";

export default function ContactBanner() {
  return (
    <section className="w-full flex justify-center py-12">
      <Button variant="secondary" href="/lets-talk" arrow>
        Let&apos;s talk 
      </Button>
    </section>
    
  );
}