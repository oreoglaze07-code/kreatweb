const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="animate-reveal text-sm tracking-[0.4em] text-muted-foreground uppercase mb-8 font-body">
          Premium Web Design Studio
        </p>

        <h1 className="animate-reveal animate-reveal-delay-1 font-heading text-4xl sm:text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8 text-foreground">
          We design websites that{" "}
          <span className="text-gradient italic">attract better clients</span>
        </h1>

        <p className="animate-reveal animate-reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-body font-light leading-relaxed">
          Premium websites for modern brands and interior designers
        </p>

        <div className="animate-reveal animate-reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="group px-10 py-4 border border-primary/30 text-foreground text-sm tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body hover:bg-accent transition-all duration-500"
          >
            Get a Website
          </a>
        </div>

        <div className="animate-reveal animate-reveal-delay-4 mt-20 flex items-center justify-center gap-12 text-muted-foreground">
          <div className="text-center">
            <span className="block font-heading text-2xl text-foreground">50+</span>
            <span className="text-xs tracking-widest uppercase font-body">Projects</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <span className="block font-heading text-2xl text-foreground">4.9★</span>
            <span className="text-xs tracking-widest uppercase font-body">Rating</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <span className="block font-heading text-2xl text-foreground">3 yrs</span>
            <span className="text-xs tracking-widest uppercase font-body">Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
