
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Living Room", href: "#living-room" },
        { name: "Bedroom", href: "#bedroom" },
        { name: "Dining", href: "#dining" },
        { name: "Office", href: "#office" },
        { name: "Appliances", href: "#appliances" },
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Craftsmanship", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Showrooms", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Shipping & Returns", href: "#" },
        { name: "Care Instructions", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-cream">PARAS</h1>
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              We curate exceptional furniture and home appliances that combine innovative design with timeless elegance. Elevate your living spaces with our premium collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-serif font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-gold transition-colors gold-border-hover hover:border-gold-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Paras Enterprises. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-4 text-sm text-white/70">
            <a href="#" className="hover:text-gold transition-colors mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors mb-2 md:mb-0">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
