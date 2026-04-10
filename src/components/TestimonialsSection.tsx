import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useScrollRevealChildren } from "@/hooks/useScrollRevealChildren";

const testimonials = [
  {
    quote: "Kreat Web completely transformed our online presence. The website they designed for our studio brought in more premium clients within the first month.",
    name: "Ananya Sharma",
    role: "Interior Designer",
  },
  {
    quote: "Clean, modern, and exactly what our brand needed. Our café bookings increased significantly after the website launch.",
    name: "Rohan Mehta",
    role: "Founder, Brew & Co.",
  },
];

const TestimonialsSection = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollRevealChildren<HTMLDivElement>();

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <div ref={headerRef} className="text-center mb-20 scroll-reveal-up">
          <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 font-body">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            What our <span className="italic text-gradient">clients</span> say
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-10 md:p-12 border border-border/50 bg-card/30 hover-lift scroll-reveal-scale">
              <p className="font-heading text-lg md:text-xl text-foreground leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div>
                <p className="text-foreground font-body font-medium text-sm">{t.name}</p>
                <p className="text-muted-foreground font-body text-xs tracking-wider uppercase mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
