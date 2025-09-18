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
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let’s Talk About <br /> Your Next Build!
          </h2>
          <br />
          <p className="text-gray-600 mb-6">
            Fill out the form, give us a call, or stop by our office.
            <br />
            Let’s start building something great together.
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
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="mt-1 block w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
  <section className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-12">
          <p className="text-green-900 font-semibold tracking-wide uppercase">
            We Are Here
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Find us on Google</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {/* Card 1 - Address */}
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-4">
              {/* simple map-pin svg */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6z" fill="#DDF7E9"/>
                <circle cx="12" cy="8" r="2" fill="#0B342C"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-green-900">Address</h3>
            <p className="text-gray-600">Chicago Heights, TX 60411</p>
          </div>

          {/* Card 2 - Email */}
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-4">
              {/* mail svg */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" fill="#DDF7E9"/>
                <path d="M4 7l8 6 8-6" stroke="#0B342C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-green-900">Send Email</h3>
            <p className="text-gray-600">info@sihara.com</p>
          </div>

          {/* Card 3 - Phone */}
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-4">
              {/* phone svg */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6.6 10.8a15.07 15.07 0 006.6 6.6l1.8-1.8a1 1 0 01.9-.27c1 .25 2.1.38 3.2.38a1 1 0 011 1V20a1 1 0 01-1 1C9.506 21 3 14.494 3 6a1 1 0 011-1h2.2a1 1 0 011 1c0 1.1.13 2.2.38 3.2a1 1 0 01-.27.9L6.6 10.8z" fill="#DDF7E9"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-green-900">Call us</h3>
            <p className="text-gray-600">+088 (246) 642-27-10</p>
          </div>

          {/* Card 4 - Social */}
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-4">
              {/* paper-plane svg */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12l18-9-7 18-3-7-8-2z" fill="#DDF7E9"/>
                <path d="M14 11l6-7M14 11l-7 6" stroke="#0B342C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-green-900">Follow us</h3>
            <div className="flex items-center justify-center gap-6 mt-4">
              {/* Facebook (Circle Background) */}
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
                <circle cx="256" cy="256" r="256" fill="#0B342C" />
                <path
                  d="M293.33 176h48v-56h-48c-35.29 0-64 28.71-64 64v40h-48v56h48v128h56V280h56l8-56h-64v-32c0-8.82 7.18-16 16-16z"
                  fill="white"
                />
              </svg>
            </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-green-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-green-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M23.498 6.186a2.966 2.966 0 0 0-2.087-2.099C19.145 3.6 12 3.6 12 3.6s-7.145 0-9.411.487a2.966 2.966 0 0 0-2.087 2.1C0 8.455 0 12 0 12s0 3.545.502 5.814a2.966 2.966 0 0 0 2.087 2.099C4.855 20.4 12 20.4 12 20.4s7.145 0 9.411-.487a2.966 2.966 0 0 0 2.087-2.1C24 15.545 24 12 24 12s0-3.545-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 flex items-center justify-center transition hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6"
              >
                <rect width="512" height="512" rx="15%" fill="#0B342C" />
                <path
                  d="M366.68 160H408l-96.07 110.52L414 352h-80l-62.35-84.63L206 352h-80l100.07-113.39L188 160h80l53.56 74.89L366.68 160z"
                  fill="white"
                />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}
