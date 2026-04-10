import { Gem, Layout, TrendingUp, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const points = [
  { icon: Gem, title: "Premium Design", desc: "Luxury aesthetics that position your brand above the competition" },
  { icon: Layout, title: "Clean Structure", desc: "Intuitive layouts that guide visitors toward action" },
  { icon: TrendingUp, title: "Built to Convert", desc: "Every element designed to turn visitors into paying clients" },
  { icon: Zap, title: "Fast & Modern", desc: "Lightning-fast performance on every device" },
];

const WhyChooseSection = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div ref={headerRef} className="text-center mb-20 scroll-reveal-up">
          <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 font-body">
            Why Kreat Web
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Not just a website. <br />
            <span className="italic text-gradient">A client magnet.</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8 stagger-children scroll-reveal-up scroll-revealed">
          {points.map((point) => (
            <div key={point.title} className="group p-8 md:p-10 border border-border/50 bg-card/50 backdrop-blur-sm hover-lift scroll-reveal-scale">
              <point.icon className="w-8 h-8 text-accent mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-heading text-xl text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
