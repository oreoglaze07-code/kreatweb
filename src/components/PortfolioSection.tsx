import { useScrollReveal } from "@/hooks/useScrollReveal";
import interiorImg from "@/assets/portfolio-interior.jpg";
import cafeImg from "@/assets/portfolio-cafe.jpg";
import brandImg from "@/assets/portfolio-brand.jpg";

const projects = [
  {
    title: "Luxe Interiors",
    category: "Interior Design Studio",
    image: interiorImg,
  },
  {
    title: "Brew & Co.",
    category: "Café & Lifestyle Brand",
    image: cafeImg,
  },
  {
    title: "Minimal Studio",
    category: "Modern Brand",
    image: brandImg,
  },
];

const PortfolioSection = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="work" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div ref={headerRef} className="text-center mb-20 scroll-reveal-up">
          <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 font-body">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Projects that <span className="italic text-gradient">convert</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-reveal-up scroll-revealed">
          {projects.map((project) => (
            <div key={project.title} className="group hover-lift cursor-pointer scroll-reveal-scale">
              <div className="overflow-hidden bg-secondary mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1280}
                  height={864}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground tracking-wider uppercase font-body">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
