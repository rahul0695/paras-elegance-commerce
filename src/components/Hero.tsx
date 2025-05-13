
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-cream-light flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 hero-parallax" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          opacity: 0.9,
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy opacity-40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:ml-0 text-center md:text-left text-cream">
          <h1 
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'
            }`}
          >
            Extraordinary <span className="text-gradient">Craftsmanship</span> for Your Home
          </h1>
          
          <p 
            className={`text-lg md:text-xl mb-8 font-light transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'
            }`}
          >
            Discover our curated collection of luxury furniture and premium appliances, designed to elevate your living spaces with unparalleled elegance.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'
            }`}
          >
            <Button 
              className="bg-gold hover:bg-gold-light text-navy px-8 py-6 rounded-sm text-lg font-medium transition-all"
            >
              Explore Collection
            </Button>
            <Button 
              variant="outline" 
              className="border-cream text-cream hover:bg-cream hover:text-navy px-8 py-6 rounded-sm text-lg font-medium transition-all"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-cream text-sm mb-2">Scroll to Explore</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-cream"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
