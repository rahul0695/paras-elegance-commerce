
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Thompson",
    title: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    quote: "Paras Enterprises has consistently exceeded my expectations. Their furniture collection combines artistry with functionality, making my design projects stand out with elegance and sophistication."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Homeowner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    quote: "I've furnished my entire home with pieces from Paras, and the quality is unmatched. Their customer service team went above and beyond to ensure every detail was perfect — truly a luxury experience from start to finish."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    quote: "The attention to detail in every Paras piece is remarkable. I recommend them to all my clients who desire that perfect balance of innovative design and timeless elegance in their living spaces."
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-navy text-white px-4"
    >
      <div className="container mx-auto relative">
        <div 
          className={cn(
            "absolute top-0 left-0 -mt-12 ml-6 text-8xl font-serif text-gold opacity-25",
            isVisible ? "opacity-25" : "opacity-0",
            "transition-all duration-700"
          )}
        >
          "
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={cn(
            "font-serif text-4xl font-bold mb-16 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            What Our <span className="text-gold">Clients</span> Say
          </h2>
          
          <div className="relative h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col items-center transition-all duration-1000",
                  index === activeIndex 
                    ? "opacity-100 transform translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 transform -translate-x-full" 
                      : "opacity-0 transform translate-x-full"
                )}
              >
                <div className="mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-gold"
                  />
                </div>
                <blockquote className="mb-6 text-xl italic font-light">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-serif font-bold text-lg mb-1">{testimonial.name}</p>
                  <p className="text-gold">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-gold" : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
