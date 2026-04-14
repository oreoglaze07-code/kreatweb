const steps = [
  { num: "01", title: "Understand Your Brand", desc: "We dive deep into your vision, audience, and goals to craft a strategy that resonates." },
  { num: "02", title: "Design Premium Layout", desc: "Every pixel is intentional — we create a luxury design tailored to your brand." },
  { num: "03", title: "Launch Your Website", desc: "We build, test, and launch a fast, responsive website that converts visitors into clients." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 px-6 lg:px-12 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 font-body">
            Our Process
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Simple. <span className="italic text-gradient">Refined.</span> Effective.
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-12 ${
                i !== steps.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <span className="font-heading text-5xl md:text-6xl text-accent/30">{step.num}</span>
              <div>
                <h3 className="font-heading text-2xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-body font-light leading-relaxed text-sm max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
