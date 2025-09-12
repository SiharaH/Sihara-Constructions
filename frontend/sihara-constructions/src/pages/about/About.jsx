import React from "react";

// ✅ Import images from src/assets
import projectImg from "../../assets/projects-building.jpg";
import clientsImg from "../../assets/happy-clients.jpg";
import commitmentImg from "../../assets/commitment-house.jpg";

const About = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[#0f3a3f] text-white text-center py-32">
        <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm uppercase tracking-wide">
          About
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          Building With Purpose, <br /> Backed by Trust
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          At Sihara Constructions, we don’t just build spaces — we build lasting relationships.
        </p>
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

        {/* Stats Grid with Images */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Projects */}
          <div className="overflow-hidden rounded-xl">
            <div className="bg-[#0f3a3f] text-white p-8">
              <h3 className="text-green-400 font-semibold uppercase">Projects</h3>
              <p className="text-4xl font-bold mt-2">100+</p>
              <p className="mt-4 text-gray-200">
                Completed over 100 residential and commercial projects across
                Central Texas with unmatched precision and professionalism.
              </p>
            </div>
            <img
              src={projectImg}
              alt="Projects"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Happy Clients */}
          <div className="overflow-hidden rounded-xl">
            <div className="bg-[#0f3a3f] text-white p-8">
              <h3 className="text-green-400 font-semibold uppercase">
                Happy Clients
              </h3>
              <p className="text-4xl font-bold mt-2">80+</p>
              <p className="mt-4 text-gray-200">
                We’ve earned the trust of over 80 homeowners and businesses
                through honest work, clear communication, and quality builds.
              </p>
            </div>
            <img
              src={clientsImg}
              alt="Happy Clients"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Commitment */}
          <div className="overflow-hidden rounded-xl md:col-span-2 grid md:grid-cols-2">
            <div className="bg-green-400 text-black p-8 flex flex-col justify-center">
              <h3 className="font-semibold uppercase">Commitment</h3>
              <p className="text-4xl font-bold mt-2">110%</p>
              <p className="mt-4">
                We go above and beyond — with 110% dedication to your project,
                your goals, and your satisfaction from day one.
              </p>
            </div>
            <img
              src={commitmentImg}
              alt="Commitment"
              className="w-full h-72 md:h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
