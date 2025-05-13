
import { useState, useRef, useEffect } from "react";
import { ShoppingCart, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProductQuickView from "./ProductQuickView";

const products = [
  {
    id: 1,
    name: "Harmon Modern Sofa",
    price: 1899,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Living Room",
    rating: 4.8,
    reviews: 24,
    description: "Experience ultimate comfort with our Harmon Modern Sofa. Featuring premium upholstery and ergonomic design, this sofa combines style and functionality for your living space."
  },
  {
    id: 2,
    name: "Vella Dining Table",
    price: 2499,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Dining",
    rating: 4.9,
    reviews: 18,
    description: "The Vella Dining Table brings elegance to your dining area with its solid wood construction and exquisite craftsmanship. Perfect for family gatherings and entertaining guests."
  },
  {
    id: 3,
    name: "Morgan Executive Chair",
    price: 1299,
    image: "https://images.unsplash.com/photo-1505797149600-d4d1ef5e3637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Office",
    rating: 4.7,
    reviews: 32,
    description: "Enhance your productivity with the Morgan Executive Chair. Featuring premium leather, advanced ergonomics, and adjustable settings for optimal comfort during long work sessions."
  },
  {
    id: 4,
    name: "Serene King Bed",
    price: 3299,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Bedroom",
    rating: 5.0,
    reviews: 14,
    description: "Transform your bedroom into a luxury retreat with our Serene King Bed. Featuring a padded headboard, solid wood frame, and exceptional craftsmanship for years of restful sleep."
  }
];

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
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

  const openQuickView = (product: any) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white px-4"
      id="featured-products"
    >
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className={cn(
            "font-serif text-4xl font-bold mb-4 text-navy transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            Handpicked for You
          </h2>
          <p className={cn(
            "text-navy/70 transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            Our most popular pieces, selected for their exceptional design, craftsmanship, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={cn(
                "group relative product-card-shadow rounded-sm overflow-hidden transition-all duration-700",
                isVisible ? "opacity-100" : "opacity-0 transform translate-y-10",
                isVisible && index === 0 ? "" : isVisible ? `delay-${(index+1)*100}` : ""
              )}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-gold hover:text-white">
                  <Heart size={18} />
                </div>
                <div 
                  className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <button 
                    className="bg-white text-navy px-4 py-2 rounded-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold hover:text-white mx-2"
                    onClick={() => openQuickView(product)}
                  >
                    <Search size={18} className="inline-block mr-1" />
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="mb-2">
                  <span className="text-xs text-navy/60 font-medium">{product.category}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2 text-navy group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-navy">${product.price.toLocaleString()}</span>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-gold" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-navy/60">({product.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0 bg-white">
                <Button className="w-full bg-navy text-cream hover:bg-navy-light">
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream px-8 py-6 rounded-sm text-lg font-medium transition-all">
            View All Products
          </Button>
        </div>
      </div>

      {quickViewProduct && (
        <ProductQuickView product={quickViewProduct} onClose={closeQuickView} />
      )}
    </section>
  );
};

export default FeaturedProducts;
