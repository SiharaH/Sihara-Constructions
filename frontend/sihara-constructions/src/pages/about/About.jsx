import React from "react";
import { CheckCircle2 } from "lucide-react";

// ✅ Import images from src/assets
import projectImg from "../../assets/projects-building.jpg";
import clientsImg from "../../assets/happy-clients.jpg";
import commitmentImg from "../../assets/commitment-house.jpg";
import drivesImg from "../../assets/construction-worker.jpg";
import heroBg from "../../assets/hero-bg.jpg"; // 🔹 Add your background image here

const About = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white text-center py-32"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10">
          <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm uppercase tracking-wide">
            About
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Building With Purpose, <br /> Backed by Trust
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At Sihara Constructions, we don’t just build spaces — we build lasting relationships.
          </p>
        </div>
      </section>

      {/* Section Two */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <h2 className="text-4xl font-bold leading-tight mb-6 md:mb-0">
            Built in Austin. Trusted Across Central Texas.
          </h2>
          <p className="text-lg text-gray-700">
            At Brikly, we believe construction is more than just concrete and
            steel — it’s about building trust, understanding your vision, and
            creating spaces that last for generations. Based in the heart of
            Austin, we’ve been delivering high-quality residential and
            commercial construction services across Central Texas with pride,
            precision, and purpose.
          </p>
        </div>

        {/* ✅ Stats Grid - Single Row, Full Height, No Gaps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 h-[600px]">
          {/* Column 1 - Projects */}
          <div className="flex flex-col overflow-hidden">
            <div className="bg-[#0f3a3f] text-white p-6 flex flex-col justify-center h-1/2">
              <h3 className="text-green-400 font-semibold uppercase">Projects</h3>
              <p className="text-3xl font-bold mt-2">100+</p>
              <p className="mt-2 text-gray-200 text-sm">
                Completed over 100 residential and commercial projects across Central Texas with unmatched precision and professionalism.
              </p>
            </div>
            <img
              src={projectImg}
              alt="Projects"
              className="w-full h-1/2 object-cover"
            />
          </div>

          {/* Column 2 - Commitment */}
          <div className="flex flex-col overflow-hidden">
            <img
              src={commitmentImg}
              alt="Commitment"
              className="w-full h-1/2 object-cover"
            />
            <div className="bg-green-400 text-black p-6 flex flex-col justify-center h-1/2">
              <h3 className="font-semibold uppercase">Commitment</h3>
              <p className="text-3xl font-bold mt-2">110%</p>
              <p className="mt-2 text-sm">
                We go above and beyond — with 110% dedication to your project, your goals, and your satisfaction from day one.
              </p>
            </div>
          </div>

          {/* Column 3 - Happy Clients */}
          <div className="flex flex-col overflow-hidden">
            <div className="bg-[#0f3a3f] text-white p-6 flex flex-col justify-center h-1/2">
              <h3 className="text-green-400 font-semibold uppercase">Happy Clients</h3>
              <p className="text-3xl font-bold mt-2">80+</p>
              <p className="mt-2 text-gray-200 text-sm">
                We’ve earned the trust of over 80 homeowners and businesses through honest work, clear communication, and quality builds.
              </p>
            </div>
            <img
              src={clientsImg}
              alt="Happy Clients"
              className="w-full h-1/2 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <span className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
            Impactful
          </span>
          <h2 className="text-4xl font-bold mt-4">Vision, Mission & Values</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-2xl p-8">
              <div className="text-green-500 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                We aim to create lasting spaces that strengthen communities and inspire confidence — built with care and purpose.
              </p>
            </div>

            <div className="bg-white shadow rounded-2xl p-8">
              <div className="text-green-500 text-4xl mb-4">🏁</div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                We make construction simple and dependable through clear communication, skilled craftsmanship, and client-first service.
              </p>
            </div>

            <div className="bg-white shadow rounded-2xl p-8">
              <div className="text-green-500 text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                We build with integrity, treat every project like our own, and prioritize quality over shortcuts. We’re committed to doing it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={drivesImg}
              alt="Construction worker"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Real Foundation
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              What Drives Us
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We started Brikly to bring reliability back to construction. That means honest timelines, 
              clear communication, and work that holds up — inside and out. We’re proud to partner with 
              homeowners, businesses, and developers who care about quality as much as we do.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Licensed, insured, and ISO-certified professionals",
                "Customized Build Solutions",
                "Reliable Timelines",
                "Clean & Organized Job Sites",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mr-3" />
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
