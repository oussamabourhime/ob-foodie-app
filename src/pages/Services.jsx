import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FaUserTie,
  FaUtensils,
  FaCartPlus,
  FaHeadset,
  FaTv,
  FaTruck,
  FaBirthdayCake,
  FaClock,
  FaGift,
  FaLeaf,
} from "react-icons/fa";
import "./Services.css";
import { FaMusic, FaSun } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      <section
        id="header"
        className="relative w-full h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/header-bg.jpg')" }}
      >
        {/* Optional Dark Overlay */}
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
            Our Services!
          </h2>
          <p
            className="font-bold text-lg md:text-2xl max-w-4xl"
            style={{ textShadow: "0 0 5px orange" }}
          >
            We serve tasty food with care.
          </p>
        </div>
      </section>

      <section id="service-section" className=" text-white px-6 md:px-16 py-20">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center">
          <div className="card">
            <FaUserTie size={60} className="items-center font-bold " />
            <h3>Master Chefs</h3>
            <p className="font-bold text-amber-500">
              We have master chefs and they have an experience with the spices.
            </p>
          </div>
          <div className="card">
            <FaUtensils size={60} className="items-center font-bold " />
            <h3>Quality Food</h3>
            <p className="font-bold text-amber-500">
              Bringing You the Finest Quality Food, Crafted with Care and
              Bursting with Flavor!
            </p>
          </div>
          <div className="card">
            <FaCartPlus size={60} />
            <h3> Online Order</h3>
            <p className="font-bold text-amber-500">
              Order Online for Deliciously Fast and Fresh Meals Delivered
              Straight to Your Doorstep!
            </p>
          </div>
          <div className="card">
            <FaHeadset size={60} />
            <h3>24/7 Service</h3>
            <p className="font-bold text-amber-500">
              {" "}
              we open all the time for your happy and the best enjoy with us.
            </p>
          </div>
          <div className="card">
            <FaTv size={60} />
            <h3>Big TV</h3>
            <p className="font-bold text-amber-500">
              Experience Our Services on the Big Screen of Flavor!.
            </p>
          </div>
          <div className="card">
            <FaTruck size={60} />
            <h3>Home Delivery</h3>
            <p className="font-bold text-amber-500">
              {" "}
              Enjoy our delicious meals from the comfort of your home with our
              fast and reliable home delivery service!
            </p>
          </div>
          <div className="card">
            <FaBirthdayCake size={60} />
            <h3>Birthday place</h3>
            <p className="font-bold text-amber-500">
              Celebrate Your Special Day with Us The Perfect Place for
              Unforgettable Birthday Memories!
            </p>
          </div>
          <div className="card">
            <FaMusic size={60} />
            <h3>Calm music</h3>
            <p className="font-bold text-amber-500">
              {" "}
              We have a calm music and a place without music if you don't like
              it .
            </p>
          </div>
          <div className="card">
            <FaSun size={60} />
            <h3>Outdoor Seating</h3>
            <p className="font-bold text-amber-500">
              {" "}
              Enjoy your meal in the fresh air with our cozy outdoor seating,
              perfect for a relaxing dining experience!
            </p>
          </div>
          <div className="card">
            <FaClock size={60} />
            <h3>Fast Making</h3>
            <p className="font-bold text-amber-500">
              Enjoy fast, flawless service and perfectly crafted dishes made to
              satisfy your cravings!
            </p>
          </div>
          <div className="card">
            <FaGift size={60} />
            <h3>Special Offers</h3>
            <p className="font-bold text-amber-500">
              Enjoy special offers and discounts for an unforgettable dining
              experience!
            </p>
          </div>
          <div className="card">
            <FaLeaf size={60} />
            <h3>Vegan Options</h3>
            <p className="font-bold text-amber-500">
              {" "}
              We offer a variety of delicious vegan dishes that are as flavorful
              and satisfying as they are healthy!
            </p>
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

export default Services;
