import React, { useState } from "react";

import bgImage from "../../assets/bg-image.jpg";
import modernHome from "../../assets/modern-home.jpeg";
import officeHub from "../../assets/office-hub.jpg";
import luxuryTower from "../../assets/luxury-tower.avif";
import villaProject from "../../assets/villa-project.webp";
import retailCenter from "../../assets/retail-center.webp";
import ecoHouse from "../../assets/eco-house.jpeg";

const projectsData = [
  {
    id: 1,
    title: "Modern Home",
    image: modernHome,
    description:
      "2,800 sq. ft. 4BHK custom residential build with outdoor living space and energy-efficient upgrades. Full design-build, interior finishes, landscaping & Private Swimming Pool.",
    highlights: ["Completed in 6 months", "Rs. 135 million budget", "Energy rating: 5-star"],
    type: "Residential",
    category: "Completed",
  },
  {
    id: 2,
    title: "Office Hub",
    image: officeHub,
    description:
      "6,000 sq. ft. two-story office space with conference rooms, reception, and ADA compliance. Commercial construction, structural planning, HVAC integration. RERA registered project with A+ rating.",
    highlights: ["Completed in 9 months", "20-person capacity", "Delivered 3 weeks early"],
    type: "Commercial",
    category: "Completed",
  },
  {
    id: 3,
    title: "Luxury Tower",
    image: luxuryTower,
    description:
      "High-rise residential project with 150+ luxury apartments, rooftop amenities, and energy-efficient design. Features modern architecture and smart home integration.",
    highlights: ["Ongoing construction", "Expected completion: 2026", "Smart energy systems"],
    type: "Residential",
    category: "Upcoming",
  },
  {
    id: 4,
    title: "Villa Project",
    image: villaProject,
    description:
      "Premium villa project with private gardens, smart lighting, and sustainable water systems.",
    highlights: ["Completed in 12 months", "Luxury finishes", "Solar energy integration"],
    type: "Residential",
    category: "Completed",
  },
  {
    id: 5,
    title: "Retail Center",
    image: retailCenter,
    description:
      "45,000 sq. ft. retail shopping center with food courts, parking, and green spaces.",
    highlights: ["Ongoing project", "Expected completion: 2025", "Eco-friendly design"],
    type: "Commercial",
    category: "Upcoming",
  },
  {
    id: 6,
    title: "Eco House",
    image: ecoHouse,
    description:
      "Modern eco-friendly house featuring rainwater harvesting, green roofs, and passive cooling systems.",
    highlights: ["Completed in 8 months", "100% renewable energy", "Award-winning design"],
    type: "Residential",
    category: "Completed",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="projects-page font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white h-[100vh] px-6 text-center flex flex-col justify-center"
        style={{ backgroundImage: `url(${bgImage})`, clipPath: "ellipse(100% 85% at 50% 0%)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 text-white">
          <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-yellow-500 text-black">
            Projects
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 ">
            From Vision to Reality
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Explore a showcase of the spaces we’ve proudly built — and a preview
            of what’s coming next. <br />
            Every build tells a story of trust, quality, and purpose.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Where Ideas Become Landmarks
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Completed", "Upcoming"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg border font-medium transition ${
                filter === cat
                  ? "bg-yellow-500 border-yellow-500 text-black"
                  : "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-t-[40px] transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                <div className="mt-4">
                  <h4 className="font-semibold">Highlights</h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                       </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-sm text-gray-500">Type: {project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
