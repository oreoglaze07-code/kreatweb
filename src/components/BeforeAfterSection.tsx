import { X, Check } from "lucide-react";

const BeforeAfterSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 font-body">
            The Transformation
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            From invisible to <span className="italic text-gradient">irresistible</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 md:p-12 border border-border/50 bg-card/30">
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-8 font-body">Before</p>
            <div className="space-y-5">
              {[
                "No website or outdated design",
                "Low trust from potential clients",
                "Losing clients to competitors",
                "No online presence or credibility",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground font-body font-light text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-12 border border-accent/20 bg-accent/5">
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-8 font-body">After</p>
            <div className="space-y-5">
              {[
                "Premium website that impresses instantly",
                "High trust and professional credibility",
                "Better clients reaching out to you",
                "Strong brand presence that converts",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground font-body font-light text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
