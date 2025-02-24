import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
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
        <div className="container relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-[#E6DFD3] drop-shadow-lg"
          >
            Trusted Bonsai Supplier & Exporter – Wholesale & Landscaping Plants
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#F7F3E9] drop-shadow-md"
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
              className="bg-natural-900 text-white hover:bg-natural-800 inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('products')}
            >
              Explore Our Bonsai Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-natural-900 hover:bg-natural-100 inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = "https://wa.me/628386966229"}
            >
              Get a Free Quote on Wholesale Orders <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* Add other sections here */}
    </main>
  );
};

export default Index;
