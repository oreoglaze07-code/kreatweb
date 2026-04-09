const CTASection = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 font-body">
          Ready?
        </p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
          Let's build something{" "}
          <span className="italic text-gradient">better</span>
        </h2>
        <p className="text-muted-foreground font-body font-light text-lg mb-12 max-w-lg mx-auto">
          Your brand deserves a premium website. Let's make it happen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body hover:bg-accent transition-all duration-500"
          >
            DM on WhatsApp
          </a>
          <a
            href="mailto:hello@kreatweb.com"
            className="px-10 py-4 border border-primary/30 text-foreground text-sm tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
