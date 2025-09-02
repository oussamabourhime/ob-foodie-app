import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Chefs.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Chefs() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      <section
        id="header"
        className="relative w-full h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/header-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

        {/* Navbar */}
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

          {/* Desktop Nav */}
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
              <a href="/chefs" className=" text-amber-400 hover:text-amber-300">
                Chefs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-amber-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Book Now */}
          <button
            onClick={() => {
              window.location.href = "/contact#contact-section";
            }}
            className="btn hidden text-m md:block"
          >
            Book Now
          </button>

          {/* Mobile Toggle */}
          <button
            className="btn md:hidden z-30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 z-50 w-full h-[40vh] bg-black bg-opacity-100 pt-8 text-white flex flex-col items-center space-y-4  mt-8 md:hidden">
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
              className="font-600 text-xl  text-amber-400 hover:text-amber-300"
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
            Our Chefs!
          </h2>
          <p
            className="font-bold text-lg md:text-2xl max-w-4xl"
            style={{ textShadow: "0 0 5px orange" }}
          >
            Meet the culinary masters behind our exquisite dishes!
          </p>
        </div>
      </section>

      {/* chefs Section */}
      <section id="chefs-section" className=" text-white px-6 md:px-16 py-20">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="chef-card">
            <img
              src="/chefs/chef1.jpg"
              alt="food"
              className="img w-full h-auto object-cover rounded"
            />
            <h3 className="mini-title"> Chef Ahmed</h3>
            <p className="font-bold text-amber-500">
              {" "}
              <span className="text-white">Specialty :</span> Moroccan Cuisine
            </p>
            <ul className="flex justify-center space-x-4 py-3">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaFacebook size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>
          <div className="chef-card">
            <img
              src="/chefs/chef2.jpg"
              alt="food"
              className="img w-full h-auto object-cover rounded"
            />
            <h3 className="mini-title"> Chef Nami</h3>
            <p className="font-bold text-amber-500">
              {" "}
              <span className="text-white">Specialty :</span> Japanese Cuisine
            </p>
            <ul className="flex justify-center space-x-4 py-3">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaFacebook size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>
          <div className="chef-card">
            <img
              src="/chefs/chef3.jpg"
              alt="food"
              className="img w-full h-auto object-cover rounded"
            />
            <h3 className="mini-title"> Chef Omar</h3>
            <p className="font-bold text-amber-500">
              {" "}
              <span className="text-white">Specialty :</span> Spanish Cuisine
            </p>
            <ul className="flex justify-center space-x-4 py-3">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaFacebook size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>
          <div className="chef-card">
            <img
              src="/chefs/chef4.jpg"
              alt="food"
              className="img w-full h-auto object-cover rounded"
            />
            <h3 className="mini-title"> Chef Emily</h3>
            <p className="font-bold text-amber-500">
              {" "}
              <span className="text-white">Specialty :</span> Italian Cuisine
            </p>
            <ul className="flex justify-center space-x-4 py-3">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaFacebook size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>
          <div className="chef-card">
            <img
              src="/chefs/chef5.jpg"
              alt="food"
              className="img w-full h-auto object-cover rounded"
            />
            <h3 className="mini-title"> Chef Karim</h3>
            <p className="font-bold text-amber-500">
              {" "}
              <span className="text-white">Specialty :</span> Turkish Cuisine
            </p>
            <ul className="flex justify-center space-x-4 py-3">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black  transition duration-300"
                >
                  <FaFacebook size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>
          <div className="chef-card">
            <img
              src="/chefs/chef6.jpg"
              alt="food"
              className="img w-full h-auto object-cover rounded"
            />
            <h3 className="mini-title"> Chef Amanda</h3>
            <p className="font-bold text-amber-500">
              {" "}
              <span className="text-white">Specialty :</span> French Cuisine
            </p>
            <ul className="flex justify-center space-x-4 py-3">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaFacebook size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>
          <div className="chef-card">
            <img
              src="/chefs/chef7.jpg"
              alt="food"
              className="img w-full h-auto object-cover rounded"
            />
            <h3 className="mini-title"> Chef Rodi</h3>
            <p className="font-bold text-amber-500">
              {" "}
              <span className="text-white">Specialty :</span> Indian Cuisine
            </p>
            <ul className="flex justify-center space-x-4 py-3">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaFacebook size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-500 text-white hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={22} />
                </a>
              </li>
            </ul>
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

export default Chefs;
