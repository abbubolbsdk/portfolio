import Image from 'next/image';

const clients = [
  { name: "TechCorp", logo: "https://placehold.co/150x80.png", hint: "technology company" },
  { name: "InnovateX", logo: "https://placehold.co/150x80.png", hint: "innovation startup" },
  { name: "Future Solutions", logo: "https://placehold.co/150x80.png", hint: "futuristic tech" },
  { name: "Alpha Systems", logo: "https://placehold.co/150x80.png", hint: "software solutions" },
  { name: "Beta Dynamics", logo: "https://placehold.co/150x80.png", hint: "dynamic systems" },
  { name: "Gamma Industries", logo: "https://placehold.co/150x80.png", hint: "industrial tech" },
  { name: "Delta Services", logo: "https://placehold.co/150x80.png", hint: "service provider" },
  { name: "Epsilon Labs", logo: "https://placehold.co/150x80.png", hint: "research lab" },
];

// Duplicate clients for seamless marquee effect
const marqueeClients = [...clients, ...clients];

export default function ClientMarqueeSection() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">Trusted by Visionaries</h2>
        <p className="text-secondary-foreground/80 mt-2">We partner with companies shaping the future.</p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeClients.map((client, index) => (
            <div key={index} className="inline-flex items-center justify-center mx-8 md:mx-12 flex-shrink-0">
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={80}
                className="object-contain"
                data-ai-hint={client.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
