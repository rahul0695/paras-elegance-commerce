
import { useState } from "react";
import { ShoppingCart, X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProductQuickViewProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    description: string;
  };
  onClose: () => void;
}

const ProductQuickView = ({ product, onClose }: ProductQuickViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Mocked additional images for demo purpose
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden rounded-md">
        <div className="relative bg-white flex flex-col md:flex-row">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 z-10 hover:bg-gray-100 transition-colors"
          >
            <X size={18} className="text-navy" />
          </button>
          
          <div className="md:w-1/2 p-6 bg-gray-50">
            <div className="relative h-[400px] mb-4">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="flex space-x-2">
              {productImages.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 p-8">
            <div className="mb-2">
              <span className="text-sm text-navy/60 font-medium">{product.category}</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4 text-navy">{product.name}</h3>
            
            <div className="flex items-center mb-6">
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
              <span className="text-sm text-navy/60">({product.reviews} reviews)</span>
            </div>
            
            <p className="text-lg font-semibold mb-6 text-navy">${product.price.toLocaleString()}</p>
            
            <p className="text-navy/70 mb-8">
              {product.description}
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-sm">
                <button 
                  onClick={decreaseQuantity} 
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  onClick={increaseQuantity} 
                  className="px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <Button className="flex-1 bg-navy text-cream hover:bg-navy-light py-6">
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </Button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-green-600 font-medium">In stock and ready to ship</span>
              </div>
              <p className="text-sm text-navy/60">
                Free shipping on orders over $100
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
