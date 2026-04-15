import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Users, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION - Matches your design pattern */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')" }} // Replace with your construction image
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Home
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Excellence, <br /> Delivering Trust
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
            From modern residential homes to large-scale industrial projects, Sihara Constructions provides 
            unmatched quality and precision in every build.
          </p>
         
        </motion.div>

        {/* The Signature Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.11,1200,44.75V0Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800">15+</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800">200+</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">Projects Done</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800">150+</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">Expert Workers</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Sihara Constructions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <HardHat className="mx-auto mb-4 text-yellow-600" size={48} />
              <h4 className="text-xl font-bold mb-3">Safety First</h4>
              <p className="text-gray-600 text-sm">We maintain the highest safety standards on every job site to protect our team and your investment.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="mx-auto mb-4 text-yellow-600" size={48} />
              <h4 className="text-xl font-bold mb-3">Expert Team</h4>
              <p className="text-gray-600 text-sm">Our engineers and architects bring decades of combined experience to your project.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Award className="mx-auto mb-4 text-yellow-600" size={48} />
              <h4 className="text-xl font-bold mb-3">Quality Guaranteed</h4>
              <p className="text-gray-600 text-sm">We use premium materials and rigorous testing to ensure your structure lasts for generations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;