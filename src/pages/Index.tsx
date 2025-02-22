
import { motion } from "framer-motion";
import { Tree, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-natural-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/e99c79c0-47e0-4698-90fc-0fa3103df0a4.png')",
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
            Your premier source for exquisite bonsai, elegant landscaping plants, and rare botanical treasures
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              Explore Our Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-natural-900">Rooted in Tradition, Growing with Passion</h2>
            <p className="text-lg text-natural-700 leading-relaxed mb-12">
              Dedicated to fine art bonsai, we've cultivated rare and exquisite plants for over 20 years, infusing each piece with artistry and tradition. Our expertise extends beyond bonsai to premium landscaping solutions and rare botanical specimens.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-sage-100">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">Premium Ornamental Plants & Bonsai for Export</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-natural-200">
                  {/* Add your product images here */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Bonsai Collection</h3>
                  <p className="text-natural-700">Expertly crafted and nurtured specimens</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">Our Process: From Cultivation to Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Careful Selection",
                description: "Each plant is meticulously chosen for its unique characteristics and potential."
              },
              {
                step: 2,
                title: "Expert Cultivation",
                description: "Our specialists nurture each specimen with precision and care."
              },
              {
                step: 3,
                title: "Quality Assurance",
                description: "Rigorous inspection ensures only the finest specimens are selected for export."
              },
              {
                step: 4,
                title: "Professional Packaging",
                description: "Secure, climate-controlled packaging for safe international transport."
              },
              {
                step: 5,
                title: "Export Documentation",
                description: "Complete handling of all necessary export permits and paperwork."
              },
              {
                step: 6,
                title: "Global Logistics",
                description: "Reliable shipping partners ensure timely delivery worldwide."
              }
            ].map((process) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: process.step * 0.1 }}
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

      {/* Contact Section */}
      <section className="py-24 bg-sage-100">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-natural-900">PT INDO CIPANAS BONSAI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Office Jakarta</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-natural-700" />
                    <div>
                      <p className="text-natural-700">Jl. Pluit Karang Karya 2 Blok A No.6</p>
                      <p className="text-natural-700">Pluit - Jakarta Utara</p>
                      <p className="text-natural-700">Indonesia</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Office Cipanas</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-natural-700" />
                    <div>
                      <p className="text-natural-700">Jl. Sindanglaya, Kp Pasir Muncang RT 01/05</p>
                      <p className="text-natural-700">Ds. Sindanglaya - Cipanas</p>
                      <p className="text-natural-700">Cianjur - Jawa Barat</p>
                      <p className="text-natural-700">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                {/* Add your map component here */}
                <div className="bg-natural-200 w-full h-[400px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
