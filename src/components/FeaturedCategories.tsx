
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: 1,
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    items: "48 Items",
    link: "#living-room"
  },
  {
    id: 2,
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    items: "36 Items",
    link: "#bedroom"
  },
  {
    id: 3,
    name: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    items: "24 Items",
    link: "#dining"
  },
  {
    id: 4,
    name: "Office",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    items: "32 Items",
    link: "#office"
  }
];

const FeaturedCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-cream px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className={cn(
            "font-serif text-4xl font-bold mb-4 text-navy transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            Curated Collections
          </h2>
          <p className={cn(
            "text-navy/70 transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            Explore our carefully selected furniture collections designed to transform your living spaces into sanctuaries of comfort and elegance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a 
              key={category.id}
              href={category.link}
              className={cn(
                "group relative overflow-hidden rounded-sm product-card-shadow transition-all duration-700",
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10",
                isVisible && index === 0 ? "" : isVisible ? `delay-${(index+1)*100}` : ""
              )}
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="object-cover w-full h-[300px] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy opacity-20 transition-opacity duration-500 group-hover:opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{category.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm">{category.items}</span>
                    <span className="text-gold flex items-center font-medium invisible group-hover:visible transition-all duration-300 transform translate-x-5 group-hover:translate-x-0">
                      Explore 
                      <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
