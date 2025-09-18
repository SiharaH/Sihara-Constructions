import { useState } from "react";
import heroImage from "../../assets/contact-hero1.jpg";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      
      <section
        className="relative bg-cover bg-center text-white h-[100vh] px-6 text-center flex flex-col justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          clipPath: "ellipse(100% 85% at 50% 0%)",
        }}
      >

        <div className="absolute inset-0 bg-green-900/40"></div>

        <div className="relative z-10">
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Get in Touch with Sihara Construction
          </h1>
          <p className="mt-2 text-lg">
            Start planning your next project with us today 
          </p>
        </div>
        
      </section>
    </div>
  );
}
