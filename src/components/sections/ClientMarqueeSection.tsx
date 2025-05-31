import Image from 'next/image';

const clients = [
  { name: "Saif's Valued Client", logo: "https://firebasestudio.googleapis.com/v0/b/builder-521d8.appspot.com/o/tmp%2FUXgQ9p8U9l%2Fimage.png?alt=media&token=922e486c-028e-4a76-93d2-6d9174c47a52", hint: "client portrait", isProvided: true },
  { name: "E-commerce Innovator", logo: "https://placehold.co/150x80.png", hint: "online shop" },
  { name: "SaaS Solution Provider", logo: "https://placehold.co/150x80.png", hint: "software dashboard" },
  { name: "Local Business Champion", logo: "https://placehold.co/150x80.png", hint: "store map" },
  { name: "Tech Startup Visionary", logo: "https://placehold.co/150x80.png", hint: "modern app" },
  { name: "Digital Agency Partner", logo: "https://placehold.co/150x80.png", hint: "creative team" },
  { name: "Non-Profit Impact Maker", logo: "https://placehold.co/150x80.png", hint: "community logo" },
  { name: "Personal Brand Site", logo: "https://placehold.co/150x80.png", hint: "portfolio website" },
];

// Duplicate clients for seamless marquee effect
const marqueeClients = [...clients, ...clients];

export default function ClientMarqueeSection() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">Trusted by Clients Like You</h2>
        <p className="text-secondary-foreground/80 mt-2">Delivering web solutions that drive success.</p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeClients.map((client, index) => (
            <div key={index} className="inline-flex items-center justify-center mx-8 md:mx-12 flex-shrink-0 h-20"> {/* Fixed height for consistency */}
              <Image
                src={client.logo}
                alt={client.name}
                width={client.isProvided ? 80 : 150} // Adjust width for portrait vs landscape
                height={80}
                className={`object-contain ${client.isProvided ? 'rounded-full' : ''}`} // Make portrait circular
                data-ai-hint={client.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
