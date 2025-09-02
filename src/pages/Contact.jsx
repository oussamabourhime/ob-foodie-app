import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookNow = () => {
    const isComplete = Object.values(formData).every((v) => v.trim() !== "");
    if (!isComplete) {
      alert("Please complete all fields before booking.");
      return;
    }
    window.location.href = "/payment";
  };

  return (
    <div className="w-full overflow-hidden">
      <section
        id="header"
        className="relative w-full h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/header-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

        <nav className="absolute top-0 left-0 z-20 w-full flex items-center justify-between px-6 md:px-12 py-4 bg-transparent text-white">
          <a
            href="/"
            className="text-2xl font-bold flex items-center space-x-2"
          >
            <h1>
              <span className="font-bolder text-white">OB </span>
              <span className="font-bold text-amber-400">Foodie.</span>
            </h1>
          </a>

          <ul className="hidden md:flex gap-6 font-600 text-m">
            <li>
              <a href="/" className="hover:text-amber-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-amber-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-amber-400">
                Services
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-amber-400">
                Menu
              </a>
            </li>
            <li>
              <a href="/chefs" className="hover:text-amber-400">
                Chefs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-amber-400">
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={() => {
              window.location.href = "/contact#contact-section";
            }}
            className="btn hidden text-m md:block"
          >
            Book Now
          </button>

          <button
            className="btn md:hidden z-30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute top-16 left-0 z-50 w-full h-[40vh] bg-black bg-opacity-100 pt-8 text-white flex flex-col items-center space-y-4 mt-8 md:hidden">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-600 text-xl hover:text-amber-400"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-600 text-xl hover:text-amber-400"
            >
              About
            </a>
            <a
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="font-600 text-xl hover:text-amber-400"
            >
              Services
            </a>
            <a
              href="/menu"
              onClick={() => setMenuOpen(false)}
              className="font-600 text-xl hover:text-amber-400"
            >
              Menu
            </a>
            <a
              href="/chefs"
              onClick={() => setMenuOpen(false)}
              className="font-600 text-xl hover:text-amber-400"
            >
              Chefs
            </a>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-600 text-xl hover:text-amber-400"
            >
              Contact
            </a>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white z-10 px-4 md:pt-10">
          <h2 className="mini-title text-amber-400 text-xl md:text-3xl font-bold mb-4">
            Contact Us!
          </h2>
          <p
            className="font-bold text-lg md:text-2xl max-w-4xl"
            style={{ textShadow: "0 0 5px orange" }}
          >
            Place your order now with ease!
          </p>
        </div>
      </section>

      <section id="contact-section" className="text-white px-6 md:px-16 py-20">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center pb-20">
          <div className="flex flex-col items-center justify-center">
            <FaMapMarkerAlt size={40} className="text-amber-400 pb-2" />
            <a
              href="#"
              className="hover:text-amber-400 flex flex-col text-center"
            >
              <h3 className="mini-title font-bold">Adresse</h3>
              <p>Beni Mellal Morocco</p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaPhoneAlt size={40} className="text-amber-400 pb-2" />
            <a
              href="#"
              className="hover:text-amber-400 flex flex-col text-center"
            >
              <h3 className="mini-title font-bold">Phone</h3>
              <p>
                <span>+212 6 00 11 22 33</span>
              </p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaEnvelope size={40} className="text-amber-400 pb-2" />
            <a
              href="#"
              className="hover:text-amber-400 flex flex-col text-center"
            >
              <h3 className="mini-title font-bold">E-mail</h3>
              <p>
                <span>obfoodie@example.com</span>
              </p>
            </a>
          </div>
        </div>

        <div
          id="contact-form"
          className="bg-[url('/wood-bg.jpg')] bg-cover bg-center px-10 py-10 md:p-10 md:mx-20 flex flex-col md:flex-row gap-10 shadow-lg"
          style={{ boxShadow: "0 0 20px orange" }}
        >
          {/* Map */}
          <div className="w-full min-h-[100%] md:w-1/2 border-2 border-amber-400">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=Beni%20Mellal&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 space-y-4 text-white bg-black bg-opacity-70 p-4 border-2 border-amber-400">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full p-2 rounded border focus:outline-none text-black"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 rounded border focus:outline-none text-black"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              name="date"
              type="date"
              className="w-full p-2 rounded border focus:outline-none text-black"
              value={formData.date}
              onChange={handleChange}
            />
            <input
              name="time"
              type="time"
              className="w-full p-2 rounded border focus:outline-none text-black"
              value={formData.time}
              onChange={handleChange}
            />
            <select
              name="guests"
              className="w-full p-2 rounded border focus:outline-none text-black"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="">Select Guests</option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
            <textarea
              name="details"
              placeholder="Please provide details of your order"
              className="w-full p-2 rounded border focus:outline-none text-black"
              rows={2}
              value={formData.details}
              onChange={handleChange}
            />
            <button onClick={handleBookNow} className="btn w-full text-black">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f1d1d] text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="mini-title text-orange-500 font-semibold text-lg mb-4 relative hover:text-gray-300  transition">
              Company
              <span className="absolute left-0 bottom-0 w-16 h-[2px] bg-orange-500"></span>
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-orange-400 transition">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-400 transition">
                  Contact us
                </a>
              </li>
              {/* Terms and Copyright */}
              <p className="text-gray-400 text-xs mt-3">
                <a
                  href="/terms"
                  className="underline hover:text-orange-400 transition"
                >
                  Terms & Conditions
                </a>
              </p>
              <p className="text-gray-400 text-xs mt-1">
                © {new Date().getFullYear()} OB Foodie Restaurant. All rights
                reserved.
              </p>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mini-title text-orange-500 font-semibold text-lg mb-4 relative hover:text-gray-300  transition">
              Contact
              <span className="absolute left-0 bottom-0 w-16 h-[2px] bg-orange-500"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <a
                  href="https://www.google.com/maps?q=Beni+Mellal+Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  Beni Mellal, Morocco
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+212600112233"
                  className="hover:text-orange-400 transition"
                >
                  +212 6 00 11 22 33
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:bourhimeoussama@hotmail.com"
                  className="hover:text-orange-400 transition"
                >
                  E mail
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://twitter.com/oussamabourhime"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-orange-500 rounded-full hover:bg-orange-500 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/oussamabourhime"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-orange-500 rounded-full hover:bg-orange-500 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/oussamabourhime"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-orange-500 rounded-full hover:bg-orange-500 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Opening */}
          <div>
            <h3 className="mini-title text-orange-500 font-semibold text-lg mb-4 relative hover:text-gray-300  transition">
              Opening
              <span className="absolute left-0 bottom-0 w-16 h-[2px] bg-orange-500"></span>
            </h3>
            <p className="text-gray-300 hover:text-orange-400 transition">
              Monday - Saturday
              <br />
              09AM - 09PM
            </p>
            <p className="mt-3 text-gray-300 hover:text-orange-400 transition">
              Sunday
              <br />
              10AM - 08PM
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mini-title text-orange-500 font-semibold text-lg mb-4 relative hover:text-gray-300 transition">
              News Letter
              <span className="absolute left-0 bottom-0 w-16 h-[2px] bg-orange-500"></span>
            </h3>
            <p className="text-gray-300 mb-4">
              Write your Email to receive all offers from us!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Write your Email"
                className="px-4 py-2 rounded-l-md bg-orange-100 text-black focus:outline-none w-full"
              />
              <button className="px-5 bg-orange-500 text-black font-bold rounded-r-md hover:bg-amber-800 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
