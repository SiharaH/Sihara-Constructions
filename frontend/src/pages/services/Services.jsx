import React, { useState } from 'react'
import servicesBg from '../../assets/services-bg.jpg'
import planning from '../../assets/planning.jpg'
import wood from '../../assets/wood.jpg'
import paint from '../../assets/paint.jpg'
import concrete from '../../assets/concrete.jpg'

const Services = () => {
  const [services,setServices] = useState([
    {
      id: 1,
      title: "Architectural Design & Planning",
      description:
        "We provide professional architectural design and planning services, ensuring that every project is functional, aesthetic, and tailored to client needs. Our team collaborates closely with clients to bring their vision to life.",
      features: [
        "3D modeling and visualization for a realistic preview",
        "Compliance with local building codes and safety standards",
        "Customized design solutions for residential, commercial, and industrial projects",
      ],
      image: planning,
    },
    {
      id: 2,
      title: "Carpentry & Woodwork",
      description:
        "We provide expert carpentry and woodwork solutions, from structural frameworks to custom-made furniture and finishes. Our craftsmanship ensures precision, functionality, and elegance.",
      features: [
        "Custom woodwork for cabinets, doors, and decorative elements",
        "Use of high-quality, durable timber and engineered wood",
        "Integration of modern designs with traditional craftsmanship",
      ],
      image: wood,
    },
    {
      id: 3,
      title: "Painting & Interior Finishing",
      description:
        "Our painting and finishing services transform raw structures into beautiful, livable spaces. We focus on durability, style, and detail, using high-quality materials for both interior and exterior surfaces.",
      features: [
        "Wide range of textures, patterns, and colors to choose from",
        "Use of weather-resistant and eco-friendly paints",
        "Smooth finishing that enhances aesthetics and protects surfaces",
      ],
      image: paint,
    },
    {
      id: 4,
      title: "Concrete Work & Masonry",
      description:
        "We specialize in high-quality concrete and masonry construction, including slabs, beams, columns, and brickwork that form the backbone of every structure.",
      features: [
        "High-grade concrete mixes for durability",
        "Structural reinforcement with steel bars",
        "Decorative brickwork and stone finishes",
      ],
      image: concrete,
    },
  ])
  return (
    <div className='pt-10'>
    <section
      className="relative bg-cover bg-center text-white h-[80vh] px-6 text-center flex flex-col justify-center"
        style={{
          backgroundImage: `url(${servicesBg})`,}}>
            
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          Our Construction Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          We offer expert construction solutions tailored to fit your needs.
        </p>
      </div>
    </section>
    
    <div className='py-6 px-4 max-w-6xl mx-auto space-y-12'>
      <h1 className="text-3xl font-bold text-gray-500 text-center mt-4 mb-10 drop-shadow-lg">
      OUR SERVICES
    </h1>
      {services.map((service,index)=>(
        <div key={service.id} className='flex flex-col sm:flex-row border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300' style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
        {/* left section */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <img src={service.image} alt={service.title} className="w-full h-full object-cover shadow-lg"/>
        </div>
        {/* right section */}
        <div className='w-full sm:w-1/2 flex flex-col items-start justify-center p-6 sm:p-12'>
          <h2 className='text-3xl font-bold mb-4 text-red-700'>{service.title}</h2>
          <p className='text-gray-700 mb-6'>{service.description}</p>   
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                {service.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
          <button className='bg-red-700  text-white px-6 py-2 rounded-3xl hover:bg-red-800 transition self-center'><a href="/contact" className="hover:text-yellow-400 transition">Contact Us</a></button>
        </div>
      </div>
      ))}

    </div>
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-red-700">Why Choose Us?</h2>
      <p className="my-2 max-w-2xl mx-auto text-center">
          At Sihara Constructions, With years of experience and a commitment to quality, we deliver exceptional results on every project.
        </p>
    </section>
    </div>
  )
}

export default Services
