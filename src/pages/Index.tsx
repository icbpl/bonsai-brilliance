import { motion, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Schemas from "@/components/Schemas";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Update active section
      const sections = ["about", "products", "why-us", "process", "testimonials", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", updateScroll);
    console.log("Scroll progress:", scrollProgress); // Debug log
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "why-us", label: "Why Us" },
    { id: "process", label: "Process" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-natural-100">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar"
          style={{ 
            "--scroll-percent": `${scrollProgress}%` 
          } as React.CSSProperties}
        />
      </div>

      {/* Navigation Dots */}
      <div className="nav-indicator">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.label}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-natural-900">Indo Cipanas Bonsai</div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-natural-700 hover:text-natural-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-natural-700 hover:text-natural-900 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://lh5.googleusercontent.com/p/AF1QipNDXnxmDLb6JcbqT70SpWFnkG2T5thvmsBrjuze=s0')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(0.65)"
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-heading"
          >
            Trusted Bonsai Supplier & Exporter – Wholesale & Landscaping Plants
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-description"
          >
            Indo Cipanas Bonsai is a leading bonsai supplier and exporter specializing in wholesale bonsai trees, rare ornamental plants, and large-scale landscaping greenery. We provide export-grade bonsai with global shipping compliance. Trusted by landscapers, collectors, and businesses worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-6 flex-wrap"
          >
            <Button 
              size="lg" 
              className="cta-button cta-primary"
              onClick={() => scrollToSection('products')}
            >
              Explore Our Bonsai Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="cta-button cta-secondary"
              onClick={() => window.location.href = "https://wa.me/628386966229"}
            >
              Get a Free Quote on Wholesale Orders <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-natural-900">Rooted in Tradition, Growing with Passion</h2>
            <div className="space-y-8">
              <p className="text-lg text-content">
                Founded in 2010, Indo Cipanas Bonsai has been shaping nature into living art, specializing in bonsai, rare ornamental plants, and landscaping solutions. With years of expertise, we seamlessly blend tradition and innovation to cultivate plants of exceptional quality, beauty, and longevity.
              </p>
              <p className="text-lg text-content">
                Trusted by landscape designers, collectors, and international exporters, our plants have transformed luxury residences, commercial spaces, and gardens worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-natural-100 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Decades of Expertise</h3>
                <p className="text-natural-700">Our team has years of experience in cultivating and shaping high-quality bonsai and ornamental plants.</p>
              </div>
              <div className="p-6 bg-natural-100 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Authentic Craftsmanship</h3>
                <p className="text-natural-700">Our bonsai are trained with traditional techniques, ensuring natural elegance and character in every tree.</p>
              </div>
              <div className="p-6 bg-natural-100 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Export-Grade Quality</h3>
                <p className="text-natural-700">We follow international phytosanitary regulations, making our plants ready for safe global shipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-sage-100">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-8 text-natural-900">Premium Ornamental Plants & Bonsai for Export</h2>
          <p className="text-lg text-center text-natural-700 max-w-3xl mx-auto mb-16">
            Buy export-quality ornamental plants, bonsai, and rare tropical species. We supply high-demand plants for landscapers, nurseries, and collectors worldwide. Bulk and wholesale orders are available with international shipping.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Semi-Mature Bonsai for Sale",
                description: "Order semi-mature bonsai (70-80% developed), ideal for export, nurseries, and further cultivation. Our bonsai are carefully trained for years to ensure strong roots, artistic shaping, and high survival rates. Available in bulk for international buyers.",
                image: "/assets/export-ready.jpg",
                catalog: "/pdf/semi.pdf"
              },
              {
                title: "Wholesale Landscaping & Bulk Plants",
                description: "Buy premium landscaping plants in bulk for urban beautification, resorts, and commercial spaces. Our plants are grown using sustainable methods and are carefully selected for resilience in various climates. We offer large-scale supply with full export certification.",
                image: "/assets/landscaping.jpg",
                catalog: "/pdf/landscaping.pdf"
              },
              {
                title: "Rare Tropical Plants Supplier",
                description: "Discover and order rare tropical plants, including exotic variegated species, sourced from Asia's rich biodiversity. Perfect for collectors, nurseries, and specialty plant stores. We provide direct supply with professional packaging and export compliance.",
                image: "/assets/variegated.jpg",
                catalog: "/pdf/tropical.pdf"
              },
              {
                title: "Competition-Ready Bonsai for Sale",
                description: "Fully matured, exhibition-grade bonsai, crafted with precision for competitions and high-end collections. Each tree is shaped using traditional techniques and nurtured for years to achieve aesthetic perfection. Limited stock available for direct purchase.",
                image: "/assets/contest-ready.jpg",
                catalog: "/pdf/contest.pdf"
              },
              {
                title: "Decorative Plant Pots Supplier",
                description: "Enhance your plant displays with stylish, durable pots designed for bonsai and ornamental plants. We offer a variety of premium materials, including ceramic, clay, and custom designs. Wholesale and retail orders are available for nurseries, interior designers, and retailers.",
                image: "/assets/pots.jpg",
                catalog: "/pdf/pot.pdf"
              },
              {
                title: "Custom Plant Sourcing & Orders",
                description: "Looking for specific plants? We provide tailored procurement services, connecting buyers with trusted growers and exporters. Whether you need a rare species or a large bulk order, we ensure quality and smooth international delivery.",
                image: "/assets/pots.jpg",
                catalog: ""
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="aspect-w-16 aspect-h-9 relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-natural-900">{product.title}</h3>
                  <p className="text-natural-700 mb-4">{product.description}</p>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-natural-900 hover:text-white transition-colors"
                      onClick={() => scrollToSection('contact')}
                    >
                      Inquire Now
                    </Button>
                    {product.catalog && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-natural-900 hover:text-white transition-colors"
                        onClick={() => window.open(product.catalog, '_blank')}
                      >
                        View Catalog
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">Why Choose Indo Cipanas Bonsai?</h2>
          <p className="text-lg text-center text-natural-700 max-w-3xl mx-auto mb-16">
            Not all bonsai and ornamental plants are created equal. Here's what makes Indo Cipanas Bonsai the top choice for collectors, landscapers, and exporters worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Decades of Expertise",
                description: "Our team has years of experience in cultivating and shaping high-quality bonsai and ornamental plants."
              },
              {
                title: "Handpicked Selection",
                description: "We carefully choose every plant, ensuring it meets strict standards in aesthetics, health, and longevity."
              },
              {
                title: "Authentic Craftsmanship",
                description: "Our bonsai are trained with traditional techniques, ensuring natural elegance and character in every tree."
              },
              {
                title: "Export-Grade Quality",
                description: "We follow international phytosanitary regulations, making our plants ready for safe global shipment."
              },
              {
                title: "Large-Scale & Custom Orders",
                description: "Whether for personal collections, landscaping projects, or bulk exports, we accommodate all requests."
              },
              {
                title: "Sustainable Growing Practices",
                description: "We implement eco-friendly techniques that promote plant health while preserving the environment."
              },
              {
                title: "Dedicated Customer Support",
                description: "From selection to aftercare, our team ensures you receive the best advice and guidance."
              },
              {
                title: "Wide Variety of Species",
                description: "We offer a diverse range of bonsai and ornamental plants to suit different styles and preferences."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-natural-100 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-natural-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-sage-100">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">Our Process: From Cultivation to Delivery</h2>
          <p className="text-lg text-center text-natural-700 max-w-3xl mx-auto mb-16">
            Every step matters, from seedling to your space
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1️⃣",
                title: "Careful Selection & Growth",
                description: "We start with the finest seedlings and nurture them for years to develop strong, healthy plants."
              },
              {
                step: "2️⃣",
                title: "Shaping & Refinement",
                description: "Using precise techniques, we train and style our bonsai to enhance their natural elegance and character."
              },
              {
                step: "3️⃣",
                title: "Health & Quality Inspection",
                description: "Every plant undergoes rigorous checks to ensure it is free from pests and diseases."
              },
              {
                step: "4️⃣",
                title: "Secure Packaging",
                description: "Each bonsai is carefully wrapped and protected to maintain its structure and health during transport."
              },
              {
                step: "5️⃣",
                title: "Fast & Safe Delivery",
                description: "We partner with trusted logistics providers to ensure timely delivery, both domestically and internationally."
              },
              {
                step: "6️⃣",
                title: "Aftercare Support",
                description: "We provide detailed care instructions and expert guidance to help you maintain the beauty of your bonsai."
              }
            ].map((process) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-natural-100 p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-natural-900 text-white rounded-full flex items-center justify-center font-semibold">
                    {process.step}
                  </span>
                  <h3 className="text-xl font-semibold ml-4">{process.title}</h3>
                </div>
                <p className="text-natural-700">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">Stories from Our Customers</h2>
          <p className="text-lg text-center text-natural-700 max-w-3xl mx-auto mb-16">
            Trusted by businesses, landscapers, collectors, and bonsai enthusiasts worldwide for our exceptional quality, reliability, and commitment to excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-natural-100 p-8 rounded-lg"
            >
              <p className="text-natural-700 italic mb-6">
                "We've worked with Indo Cipanas Bonsai on a previous project for our landscaping plant supply, and we couldn't be happier with the results. The plants were of excellent quality, and their team was professional and reliable throughout the process. It was a great experience, and we highly recommend them for anyone looking for quality landscaping plants."
              </p>
              <div>
                <h4 className="font-semibold">Puri Botanical Residence</h4>
                <p className="text-natural-600">Landscape Client</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-natural-100 p-8 rounded-lg"
            >
              <p className="text-natural-700 italic mb-6">
                "I've been sourcing bonsai from Indo Cipanas Bonsai for my exports to Europe, and I'm really happy with their quality. They offer a great variety of species, which makes it much easier for me to meet my clients' needs. The pricing is also reasonable, and the whole process has been smooth. Definitely a supplier I can rely on."
              </p>
              <div>
                <h4 className="font-semibold">Rahmad Alsaubar</h4>
                <p className="text-natural-600">Export Client</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">🌟 Committed to Customer Satisfaction</h3>
            <p className="text-natural-700 max-w-3xl mx-auto">
              At Indo Cipanas Bonsai, we take pride in building long-term relationships with our clients. Whether you are a landscaper, a bonsai collector, or an exporter, we guarantee the highest quality plants, smooth transactions, and dedicated customer support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">Frequently Asked Questions (FAQ)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What are the minimum order requirements?",
                answer: "Minimum order varies by plant type. For bulk landscaping plants, MOQ is 100 units; for bonsai, MOQ is 10 units."
              },
              {
                question: "Do you provide international shipping?",
                answer: "Yes, we export worldwide. We ensure compliance with international regulations."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept Bank Transfer (TT), Letter of Credit (LC), and PayPal for international transactions."
              },
              {
                question: "How long does shipping take?",
                answer: "Delivery time depends on the destination. Most shipments take 10-20 business days."
              },
              {
                question: "Do you provide customization services?",
                answer: "Yes, we source specific plants and bonsai upon request."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-natural-100 p-8 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-start">
                  <span className="text-2xl mr-3">❓</span>
                  {faq.question}
                </h3>
                <p className="text-natural-900 flex items-start">
                  <span className="text-2xl mr-3">✔</span>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-sage-100">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-natural-900">Get in Touch</h2>
            <div className="text-center mb-12">
              <p className="text-2xl font-semibold text-natural-900 mb-4">
                "Where Passion for Plants Thrives and Greenery Finds Its Home"
              </p>
              <p className="text-lg text-natural-900 max-w-3xl mx-auto mb-8">
                We're always ready to help you grow your collection, design stunning landscapes, and bring nature closer to your everyday life.
                From large-scale bonsai projects to rare ornamental plants, let's make your green space a reflection of artistry and care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">PT INDO CIPANAS BONSAI</h3>
                    <p className="text-natural-900">Kp Hanjawar, Desa Cimacan, Kec. Cipanas, Kab. Cianjur, Jawa Barat, Indonesia 43253</p>
                  </div>
                </div>

                <div className="space-y-4 text-natural-900">
                  <p className="flex items-center"><span className="text-2xl mr-3">📞</span>Phone: +62-838-6966-3229</p>
                  <p className="flex items-center"><span className="text-2xl mr-3">✉️</span>Email: business@icbplants.com</p>
                  <p className="flex items-center"><span className="text-2xl mr-3">🕘</span>Business Hours: 9:00 AM – 6:00 PM</p>
                  <p className="flex items-center"><span className="text-2xl mr-3">💬</span>
                    <a href="#" className="text-natural-900 hover:text-natural-900 underline">WhatsApp: Chat Us Now</a>
                  </p>
                  <p className="flex items-center"><span className="text-2xl mr-3">📷</span>
                    <a href="https://instagram.com/timurbonsai" className="text-natural-900 hover:text-natural-900 underline">Follow Us: @timurbonsai</a>
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold">💡 Ready to Order?</h3>
                  <p className="flex items-center"><span className="text-2xl mr-3">📥</span>
                    <a href="#" className="text-natural-900 hover:text-natural-900 underline">Request a Quote Now – Click Here</a>
                  </p>
                  <p className="flex items-center"><span className="text-2xl mr-3">📄</span>
                    <a href="/pdf/landscaping_plants_compressed.pdf" className="text-natural-900 hover:text-natural-900 underline">Download Our Catalog</a>
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.451544554483!2d107.0564286!3d-6.710680499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3003c0b9c57%3A0x383c596b750c6b95!2sIndo%20cipanas%20bonsai!5e0!3m2!1sen!2sid!4v1708440000000!5m2!1sen!2sid`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="mt-16 text-center space-y-4">
              <div className="max-w-3xl mx-auto px-4 py-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <p className="text-natural-700 text-sm">
                  Indo Cipanas Bonsai is a legally registered company in Indonesia, officially recognized under the Indonesian business registry with NIB 212240016669. We operate in full compliance with national regulations, ensuring reliable and professional service for our clients worldwide.
                </p>
              </div>
              <p className="text-natural-600">Copyright © 2024 Indo Cipanas Bonsai. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg transform translate-y-full transition-transform duration-300 hover:translate-y-0">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-natural-900 font-semibold">
              Ready to start your bonsai journey?
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="cta-button cta-primary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="cta-button cta-secondary hidden md:flex"
                onClick={() => window.location.href = "https://wa.me/628386966229"}
              >
                WhatsApp Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Data */}
      <Schemas />
    </div>
  );
};

export default Index;

// ... keep existing CSS file content
