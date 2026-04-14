import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-5 px-6 lg:px-12">
        <a href="#" className="font-heading text-xl tracking-[0.3em] text-primary">
          KREAT WEB
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Work", "About", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 uppercase font-body"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm tracking-widest bg-primary text-primary-foreground px-6 py-2.5 hover:bg-accent transition-colors duration-300 uppercase font-body"
          >
            Get a Website
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in-up">
          <div className="flex flex-col items-center gap-6 py-8">
            {["Work", "About", "Process", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase font-body"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest bg-primary text-primary-foreground px-8 py-3 uppercase font-body"
            >
              Get a Website
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
