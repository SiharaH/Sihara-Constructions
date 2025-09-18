import React from "react";
import { CheckCircle, Eye, Flag, Heart } from "lucide-react";

import projectImg from "../../assets/projects-building.jpg";
import clientsImg from "../../assets/happy-clients.jpg";
import commitmentImg from "../../assets/commitment-house.jpg";
import drivesImg from "../../assets/construction-worker.jpg";
import heroBg from "../../assets/hero-bg.jpg";

const About = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white h-[100vh] px-6 text-center flex flex-col justify-center transition-opacity duration-1000 opacity-100"
        style={{ backgroundImage: `url(${heroBg})`, clipPath: "ellipse(100% 85% at 50% 0%)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <span className="bg-yellow-500 text-red-900 px-4 py-1 rounded-full text-sm uppercase tracking-wide">
            About
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 transform transition-transform duration-700 hover:scale-105">
            Building With Purpose, Backed by Trust
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto transition-opacity duration-700">
            At Sihara Constructions, we don’t just build spaces — we create lasting relationships through quality, reliability, and precision.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <h2 className="text-4xl font-bold leading-tight mb-6 md:mb-0 transform transition-transform duration-700 hover:translate-y-[-4px]">
            Constructing Inspired Spaces, Building Enduring Trust
          </h2>
          <p className="text-lg text-gray-700 transition-opacity duration-700">
            Construction is more than concrete and steel — it’s about building trust, understanding your vision, and creating lasting spaces. 
            We deliver high-quality residential and commercial construction services with precision, dedication, and pride.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 h-[600px]">
          {/* Projects */}
          <div className="flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-red-900 text-yellow-500 p-6 flex flex-col justify-center h-1/2">
              <h3 className="font-semibold uppercase">Projects</h3>
              <p className="text-3xl font-bold mt-2">100+</p>
              <p className="mt-2 text-yellow-200 text-sm">
                Completed over 100 residential and commercial projects with unmatched precision and professionalism.
              </p>
            </div>
            <img src={projectImg} alt="Projects" className="w-full h-1/2 object-cover transition-transform duration-500 hover:scale-105" />
          </div>

          {/* Commitment */}
          <div className="flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <img src={commitmentImg} alt="Commitment" className="w-full h-1/2 object-cover transition-transform duration-500 hover:scale-105" />
            <div className="bg-yellow-500 text-red-900 p-6 flex flex-col justify-center h-1/2">
              <h3 className="font-semibold uppercase">Commitment</h3>
              <p className="text-3xl font-bold mt-2">110%</p>
              <p className="mt-2 text-sm">
                Dedicated to exceeding expectations with professionalism, reliability, and care from start to finish.
              </p>
            </div>
          </div>

          {/* Happy Clients */}
          <div className="flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-red-900 text-yellow-500 p-6 flex flex-col justify-center h-1/2">
              <h3 className="font-semibold uppercase">Happy Clients</h3>
              <p className="text-3xl font-bold mt-2">80+</p>
              <p className="mt-2 text-yellow-200 text-sm">
                Earned the trust of homeowners and businesses through consistent quality, transparency, and client-focused service.
              </p>
            </div>
            <img src={clientsImg} alt="Happy Clients" className="w-full h-1/2 object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <span className="uppercase tracking-wide text-sm text-gray-500 font-semibold transition-opacity duration-700 opacity-100">
            Impactful
          </span>
          <h2 className="text-4xl font-bold mt-4 transition-transform duration-700 hover:scale-105">
            Vision, Mission & Values
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center transition-transform duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-red-900 p-4 rounded-full mb-4 flex items-center justify-center">
                <Eye className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be the leading construction company, delivering innovative, sustainable, and high-quality projects that inspire communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center transition-transform duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-red-900 p-4 rounded-full mb-4 flex items-center justify-center ">
                <Flag className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To provide reliable, safe, and client-focused construction services, ensuring every project exceeds expectations.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center transition-transform duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-red-900 p-4 rounded-full mb-4 flex items-center justify-center ">
                <Heart className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600 text-center">
                Integrity, innovation, and excellence guide our work. We prioritize transparency, sustainability, and strong client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={drivesImg} alt="Construction worker" className="rounded-2xl shadow-lg transform transition duration-500 hover:scale-105" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Real Foundation</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">What Drives Us</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our commitment to quality, safety, and client satisfaction drives every project. We deliver excellence through skilled craftsmanship and clear communication.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Licensed, insured, and ISO-certified professionals",
                "Customized and innovative build solutions",
                "Reliable timelines and project management",
                "Clean, safe, and organized job sites",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 transition-transform duration-500 hover:translate-x-2">
                  <CheckCircle className="h-6 w-6 text-red-900 mr-3 " />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
