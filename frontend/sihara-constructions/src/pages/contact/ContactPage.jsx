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
        
      </section>
    </div>
  );
}
