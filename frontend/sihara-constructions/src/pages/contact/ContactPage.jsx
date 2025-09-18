import { useState } from "react";
import heroImage from "../../assets/contact-hero1.jpg";

export default function ContactPage() {
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Submitted", formData);
};



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

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 md:pt-14 pb-20 px-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-green-900 font-semibold uppercase tracking-wide mb-2">
            We're Here to Help
          </h3>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Let’s Talk About <br /> Your Next Build!
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form, give us a call, or stop by our office.
            Let’s start building something great together.
          </p>
          <div className="flex items-center gap-2 text-yellow-500">
            ⭐⭐⭐⭐⭐ <span className="text-gray-700">260+ reviews (4.95 of 5)</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label className="block text-sm font-medium text-gray-700">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="mt-1 block w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+94"
          required
          className="mt-1 block w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        </div>
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">
         Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="mt-1 block w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        </div>

    <button
      type="submit"
      className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-lg transition-colors"
    >
      SUBMIT
    </button>
  </form>
      </section>
    </div>
    
  );
}
