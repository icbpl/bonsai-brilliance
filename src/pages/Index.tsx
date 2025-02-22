import { motion } from "framer-motion";
import { ArrowRight, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-natural-100">
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
              {["About", "Products", "Why Us", "Process", "Testimonials", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-natural-700 hover:text-natural-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {["About", "Products", "Why Us", "Process", "Testimonials", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-natural-700 hover:text-natural-900 transition-colors"
                  >
                    {item}
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
            filter: "brightness(0.8)"
          }}
        />
        <div className="container relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Preserving Nature, Crafting Art: Bringing Bonsai to Life
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            PT Indo Cipanas Bonsai is a premier supplier of high-quality bonsai, rare plants, and landscaping greenery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              Our Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              WhatsApp Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-natural-900">Rooted in Tradition, Growing with Passion</h2>
            <p className="text-lg text-natural-700 leading-relaxed mb-12">
              Founded in 2010, Indo Cipanas Bonsai has been shaping nature into living art, specializing in bonsai, rare ornamental plants, and landscaping solutions. With years of expertise, we seamlessly blend tradition and innovation to cultivate plants of exceptional quality, beauty, and longevity.
            </p>
            <p className="text-lg text-natural-700 leading-relaxed mb-12">
              Trusted by landscape designers, collectors, and international exporters, our plants have transformed luxury residences, commercial spaces, and gardens worldwide. Clients value not only the superior quality of our plants but also our professionalism, reliability, and meticulous attention to detail—qualities that have made us a preferred supplier for high-end landscaping projects and bonsai exports.
            </p>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">Premium Ornamental Plants & Bonsai for Export</h2>
          <p className="text-lg text-center text-natural-700 max-w-3xl mx-auto mb-16">
            We offer a diverse range of high-quality ornamental plants, from semi-mature bonsai to rare tropical species. Whether for export, landscaping, or collectors, our selection is carefully curated to meet international standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Semi-Mature Bonsai",
                description: "70-80% developed, ideal for export and further cultivation"
              },
              {
                title: "Landscaping & Bulk Plants",
                description: "Wholesale supply for urban beautification and commercial projects"
              },
              {
                title: "Rare Tropical Plants",
                description: "Handpicked exotic species sourced from tropical regions"
              },
              {
                title: "Competition-Ready Bonsai",
                description: "Fully matured bonsai for exhibitions and contests"
              },
              {
                title: "Decorative Plant Pots",
                description: "High-quality, stylish pots to enhance plant displays"
              },
              {
                title: "Custom Orders & Sourcing",
                description: "Tailored plant procurement services, connecting buyers with trusted growers and suppliers"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-natural-200">
                  {/* Add product images here */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-natural-700">{product.description}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Learn More
                  </Button>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-sage-100">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">PT INDO CIPANAS BONSAI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Office Address</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-natural-700" />
                    <div>
                      <p className="text-natural-700">Kp Hanjawar, Desa/Kelurahan Cimacan,</p>
                      <p className="text-natural-700">Kec. Cipanas, Kab. Cianjur,</p>
                      <p className="text-natural-700">Provinsi Jawa Barat, Indonesia 43253</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                  <div className="space-y-2 text-natural-700">
                    <p>Phone: 0838-6966-3229</p>
                    <p>Email: timurbonsai@gmail.com</p>
                    <p>Business Hours: 9:00 AM–6:00 PM</p>
                    <p>WhatsApp: Chat Us on WhatsApp</p>
                  </div>
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
            <div className="mt-16 text-center">
              <p className="text-xl text-natural-700 mb-4">Follow Us</p>
              <div className="space-x-4">
                <a href="https://instagram.com/timurbonsai" className="text-natural-700 hover:text-natural-900">@timurbonsai</a>
                <a href="https://facebook.com/indocipanasbonsai" className="text-natural-700 hover:text-natural-900">Indo Cipanas Bonsai</a>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-natural-700">Copyright © 2024 Indo Cipanas Bonsai. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
