import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Menu, X, Instagram, Facebook, Twitter, Armchair, Hammer, Ruler } from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Modern Minimalist",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Urban Sanctuary",
      category: "Bedroom",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Bespoke Culinary",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const services = [
    {
      title: "Interior Design",
      description: "Comprehensive design services from conceptualization to final styling, creating spaces that reflect your unique identity.",
      icon: <Armchair className="w-8 h-8 stroke-1" />
    },
    {
      title: "Renovation",
      description: "Transforming existing spaces with meticulous attention to detail, ensuring seamless integration of old and new.",
      icon: <Hammer className="w-8 h-8 stroke-1" />
    },
    {
      title: "Construction",
      description: "End-to-end project management and execution, delivering uncompromising quality and craftsmanship.",
      icon: <Ruler className="w-8 h-8 stroke-1" />
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl tracking-widest uppercase ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Lumina
          </a>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex space-x-10 text-sm tracking-widest uppercase ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}>
            <a href="#projects" className="hover:text-stone-400 transition-colors">Projects</a>
            <a href="#services" className="hover:text-stone-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-stone-400 transition-colors">Studio</a>
            <a href="#contact" className="hover:text-stone-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden text-sm tracking-widest uppercase text-stone-600">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>Studio</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          >
            Design Your <br className="hidden md:block" /> Dream Space
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl font-light text-stone-200 mb-10 max-w-2xl mx-auto"
          >
            We create elegant, functional interiors tailored to your lifestyle, blending timeless aesthetics with modern comfort.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-white text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-200 transition-colors w-full sm:w-auto text-center">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-colors w-full sm:w-auto text-center">
              Book Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Selected Works</h2>
              <p className="text-stone-500 max-w-md">A curated collection of our most recent interior design and architectural projects.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm tracking-widest uppercase hover:text-stone-500 transition-colors group">
              All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <p className="text-xs tracking-widest uppercase text-stone-500 mb-2">{project.category}</p>
                <h3 className="font-serif text-2xl font-light">{project.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-stone-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Our Expertise</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">Comprehensive design solutions tailored to elevate your living experience.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.2} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 text-stone-400">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[700px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" 
                alt="Studio Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-lg">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">Crafting Spaces <br/> That Inspire</h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                Founded on the belief that our surroundings profoundly impact our well-being, Lumina Studio is dedicated to creating environments that are both beautiful and livable.
              </p>
              <p className="text-stone-500 leading-relaxed mb-10">
                With over a decade of experience in high-end residential and boutique commercial design, our approach is rooted in a deep appreciation for craftsmanship, natural materials, and the subtle interplay of light and space.
              </p>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Founder Signature" 
                className="h-12 opacity-40 filter grayscale invert-0"
                style={{ filter: 'brightness(0) opacity(0.4)' }}
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 text-sm tracking-widest uppercase text-stone-400">Elena Rostova, Founder</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-32 bg-stone-900 text-stone-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 leading-tight">Let's Design <br/> Your Space</h2>
            <p className="text-stone-400 max-w-md mb-12 text-lg font-light">
              Ready to transform your environment? Reach out to discuss your project, and let's bring your vision to life.
            </p>
            
            <div className="space-y-6 text-stone-300">
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">Email</p>
                <a href="mailto:hello@luminastudio.com" className="hover:text-white transition-colors">hello@luminastudio.com</a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">Studio</p>
                <p>124 Design Avenue<br/>New York, NY 10001</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-stone-700 pb-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-none outline-none text-stone-100 placeholder-stone-600 focus:ring-0 px-0"
                />
              </div>
              <div className="border-b border-stone-700 pb-2">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-none outline-none text-stone-100 placeholder-stone-600 focus:ring-0 px-0"
                />
              </div>
              <div className="border-b border-stone-700 pb-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell us about your project" 
                  className="w-full bg-transparent border-none outline-none text-stone-100 placeholder-stone-600 focus:ring-0 px-0 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-white text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-200 transition-colors w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 px-6 md:px-12 bg-stone-50 text-stone-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl tracking-widest uppercase text-stone-900">
            Lumina
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-900 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-stone-900 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-stone-900 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>

          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Lumina Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
