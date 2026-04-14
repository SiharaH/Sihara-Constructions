import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  HardHat,
  Ruler,
  ShieldCheck,
  PaintBucket,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Building2, title: "Residential Construction", desc: "Modern homes built with quality and durability.", features: ["Custom Homes", "Apartments", "Villas"] },
  { icon: HardHat, title: "Commercial Construction", desc: "Professional spaces for business growth.", features: ["Offices", "Retail", "Warehouses"] },
  { icon: Ruler, title: "Infrastructure Development", desc: "Precision-built infrastructure solutions.", features: ["Roads", "Bridges", "Facilities"] },
  { icon: ShieldCheck, title: "Project Management", desc: "Efficient execution with quality assurance.", features: ["Planning", "Budget", "Quality"] },
  { icon: PaintBucket, title: "Interior Design", desc: "Modern and functional interiors.", features: ["Planning", "Materials", "Furniture"] },
  { icon: Wrench, title: "Renovation & Remodeling", desc: "Upgrade existing spaces with modern designs.", features: ["Renovation", "Modernization", "Extensions"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Services = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative pt-32 pb-36 overflow-hidden bg-gradient-to-r from-red-400 via-red-500 to-amber-300">

        {/* GRID */}
        {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

        {/* BLOBS */}
        <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-10 w-28 h-28 bg-white/20 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-20 right-10 w-36 h-36 bg-amber-300/30 rounded-full blur-3xl" />

        {/* CONTENT */}
        <motion.div style={{ y }} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-8 py-10 shadow-xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Our Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-white/90"
            >
              We deliver reliable construction solutions with quality and precision.
            </motion.p>
          </div>
        </motion.div>

        {/* CURVE */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 150" className="w-full h-[110px]">
            <path fill="#ffffff" d="M0,80 C360,160 1080,0 1440,90 L1440,150 L0,150 Z"></path>
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} initial="hidden" whileInView="show" custom={i}
              className="border rounded-2xl p-8 bg-gray-50/50 hover:shadow-xl hover:border-red-200 transition duration-300">
              
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r bg-gray-400">
                <s.icon className="text-white" size={24} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{s.desc}</p>

              <ul className="space-y-1">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-r bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "100+", label: "Projects" },
            { num: "10+", label: "Years Experience" },
            { num: "120+", label: "Clients" },
            { num: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i}>
              <h3 className="text-3xl font-bold text-red-600">{stat.num}</h3>
              <p className="text-white text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Process</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Planning", "Execution", "Delivery"].map((step, i) => (
              <motion.div key={step} variants={fadeUp} initial="hidden" whileInView="show" custom={i}
                className="p-6 border rounded-xl bg-gray-50/50 hover:shadow-md hover:border-red-200 transition">
                <h3 className="font-semibold text-gray-800 mb-2">{step}</h3>
                <p className="text-sm text-gray-500">Handled with precision and care.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-500 mb-6">Let’s Build Your Dream Together.</p>

        <Link to="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 hover:shadow-lg transition">
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default Services;