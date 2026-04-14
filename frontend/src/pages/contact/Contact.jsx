import { useState } from "react";
// import heroImage from "../assets/contact-hero4.jpg";

export default function Contact() {
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
        // style={{
        //   backgroundImage: `url(${heroImage} || 'https://source.unsplash.com/1600x900/?construction')`,
        // }}
      >

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Get in Touch with Us
          </h1>
          <p className="mt-2 text-lg">
            Start planning your next project with us today 
          </p>
        </div>
      </section>
      <br />


      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 md:pt-14 pb-20 px-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-red-900 font-bold uppercase tracking-wide mb-2">
            We're Here to Help
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let’s Talk About <br /> Your Next Build!
          </h2>
          <br />
          <p className="text-gray-600 mb-6">
            Connect with our team to discuss your next project. 
            <br />
            Together, we’ll turn your vision into reality.
          </p>
          <div className="flex items-center gap-2 text-yellow-500">
            ⭐⭐⭐⭐⭐ <span className="text-gray-700">260+ reviews (4.95 of 5)</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-10 space-y-6"
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label className="block text-sm font-medium text-gray-900">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-900">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label className="block text-sm font-medium text-gray-900">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-900">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+94"
          required
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
        </div>
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-900">
         Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
        ></textarea>
        </div>

    <button
      type="submit"
      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors"
    >
      SUBMIT
    </button>
  </form>
  </section>
  <br />
  <section className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-12">
          <p className="text-red-900 font-bold tracking-wide uppercase">
            We Are Here
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-yello">Find us on Google</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 centered">

          {/* Card 1 - Email */}
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-red-900 flex items-center justify-center mb-4">
              {/* mail svg */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" fill="#EAB308"/>
                <path d="M4 7l8 6 8-6" stroke="#7F1D1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-small mb-2 text-red-900">Send Email</h3>
            <p className="text-gray-600">siharaconstructions@gmail.com</p>
          </div>

          {/* Card 2 - Phone */}
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-red-900 flex items-center justify-center mb-4">
              {/* phone svg */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6.6 10.8a15.07 15.07 0 006.6 6.6l1.8-1.8a1 1 0 01.9-.27c1 .25 2.1.38 3.2.38a1 1 0 011 1V20a1 1 0 01-1 1C9.506 21 3 14.494 3 6a1 1 0 011-1h2.2a1 1 0 011 1c0 1.1.13 2.2.38 3.2a1 1 0 01-.27.9L6.6 10.8z" fill="#EAB308"/>
              </svg>
            </div>
            <h3 className="font-semibold text-small mb-2 text-red-900">Call us</h3>
            <p className="text-gray-600">+94 74 116 0804 </p>
          </div>

    {/* Card 3 - Facebook */}
    <div className="bg-white rounded-2xl shadow p-8 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-red-900 flex items-center justify-center mb-4">
        {/* Facebook Circle Icon */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 flex items-center justify-center transition hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 h-6"
          >
            <circle cx="256" cy="256" r="256" fill="#EAB308" />
            <path
              d="M293.33 176h48v-56h-48c-35.29 0-64 28.71-64 64v40h-48v56h48v128h56V280h56l8-56h-64v-32c0-8.82 7.18-16 16-16z"
              fill="#7F1D1D"
            />
          </svg>
        </a>
      </div>
      <h3 className="font-semibold text-small mb-2 text-red-900">Follow us</h3>
      <p className="text-gray-600">Facebook</p>
    </div>
  </div>

          
      
        
      </section>
    </div>
    
  );
}