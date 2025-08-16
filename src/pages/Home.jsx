import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaUserTie, FaUtensils,  FaCartPlus, FaHeadset} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt,FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Home.css";

const slides = [
  {
    image: "/slides/slide1.jpg",
    text: "Explore Our International Cuisines",
  },
  {
    image: "/slides/slide2.jpg",
    text: "Taste the best dishes made with love.",
  },
  {
    image: "/slides/slide3.jpg",
    text: "Enjoy luxury and flavor in every bite.",
  },
];

 function Home() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navbar */}
      <nav className=" h-22 w-full absolute top-0 left-0 z-20 flex items-center justify-between px-6 md:px-12 py-4 bg-transparent text-white">
        <a href="/" className="text-2xl font-bold flex items-center space-x-2">
          <h1>
          <span className="font-bolder text-white">OB </span>
          <span className="font-bold text-amber-400">Foodie.</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-600 text-m">
          <li><a href="/home" className="hover:text-amber-400">Home</a></li>
          <li><a href="/about" className="hover:text-amber-400">About</a></li>
          <li><a href="/services" className="hover:text-amber-400">Services</a></li>
          <li><a href="/menu" className="hover:text-amber-400">Menu</a></li>
          <li><a href="/chefs" className="hover:text-amber-400">Chefs</a></li>
          <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
        </ul>
        <button 
          onClick={() => { window.location.href = "/contact#contact-section"; }}
          className="btn hidden text-m md:block">
          Book Now
        </button>
        

        {/* Mobile Toggle */}
        <button className="btn md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={20} /> : <GiHamburgerMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
{menuOpen && (
  <div className="absolute top-12 border-y border-amber-400 left-0 z-50 w-full bg-black bg-opacity-20 py-4 text-white flex flex-col items-center space-y-4 mt-8 md:hidden">
   <a href="/" onClick={() => setMenuOpen(false)} className="font-600 text-xl hover:text-amber-400">Home</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="font-600 text-xl hover:text-amber-400">About</a>
            <a href="/services" onClick={() => setMenuOpen(false)} className="font-600 text-xl hover:text-amber-400">Services</a>
            <a href="/menu" onClick={() => setMenuOpen(false)} className="font-600 text-xl hover:text-amber-400">Menu</a>
            <a href="/chefs" onClick={() => setMenuOpen(false)} className="font-600 text-xl hover:text-amber-400">Chefs</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="font-600 text-xl hover:text-amber-400">Contact</a>
          </div>
)}


      {/* Background Image Slider */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay content */}
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 pt-40 md:pt-16">
              <div className="text-center text-white px-4 md:px-6 max-w-xl">
                <p className=" text-lg md:text-3xl font-semibold mb-4" style={{ textShadow: "0 0 5px orange" }}>
                  {slide.text}
                </p>
                <button
                onClick={() => { window.location.href = "/menu#menu-section"; }}
              
                className="btn-overlay">
            Explore now
          </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section id="about-section" className=" text-white px-6 md:px-16 py-20">
        <h2 className="mini-title text-3xl md:text-4xl font-bold text-amber-500 mb-6 flex items-center gap-1">
          <span className="border-t-2 border-amber-500 w-8"></span> About us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         
          {/* Text */}
          <div className="about-text space-y-6 text-lg leading-relaxed ">
            
            <p className="text-amber-400 font-bold pt-10">
              <span className="text-white font-bold text-2xl">W</span>e craft every dish with premium spices and flavors, prepared by our world-class chefs.
            </p>
            <p className="text-amber-400 font-bold">
              <span className="text-white font-bold text-2xl">O</span>ur restaurant is the perfect spot to share unforgettable meals with family and friends.
            </p>
            <p className="text-amber-400 font-bold">
              <span className="text-white font-bold text-2xl">E</span>ach dish is made with care, using the freshest and finest ingredients sourced globally.
               from around the world.
            </p>
            <p className="text-amber-400 font-bold">
              <span className="text-white font-bold text-2xl">W</span> e’re always here to welcome you, ensuring every visit is filled with joy and great taste.
            </p>
          </div>

           {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <img
              src="/about-imgs/about1.jpg"
              alt="food"
              className="img w-full h-[140px] object-cover rounded"
            />
            <img
              src="/about-imgs/about2.jpg"
              alt="table"
              className="img w-full h-[140px] object-cover rounded md:mt-10"
            />
            <img
              src="/about-imgs/about3.jpg"
              alt="restaurant"
              className="img w-full h-[140px] object-cover rounded"
            />
            <img
              src="/about-imgs/about4.jpg"
              alt="dish"
              className="img w-full h-[140px] object-cover rounded md:mt-10"
            />
          </div>
        </div>
      </section>



      {/*Service Section*/}
      <section id="service-section" className=" text-white px-6 md:px-16 py-10">
       <h2 className=" mini-title text-3xl md:text-4xl font-bold text-amber-500 mb-6 flex items-center gap-1 pb-10">
          <span className="border-t-2 border-amber-500 w-8"></span> Our Services
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center">
          <div className="card">
            <FaUserTie size={60}  className="items-center font-bold "/>
            <h3 >Master Chefs</h3>
            <p className="font-bold text-amber-500">We have master chefs and they have an experience with the spices.</p>
          </div>
          <div className="card">
            <FaUtensils size={60}  className="items-center font-bold "/>
            <h3 >Quality Food</h3>
            <p className="font-bold text-amber-500">Bringing You the Finest Quality Food, Crafted with Care and
              Bursting with Flavor!</p>
          </div>
          <div className="card">
            <FaCartPlus size={60} />
            <h3 > Online Order</h3>
            <p  className="font-bold text-amber-500">Order Online for Deliciously Fast and Fresh Meals Delivered
              Straight to Your Doorstep!</p>
          </div>
          <div className="card">
            <FaHeadset size={60} />
            <h3>24/7 Service</h3>
            <p  className="font-bold text-amber-500"> we open all the time for your happy and the best enjoy with us.</p>
          </div>
        </div>
      <div className=" text-center pt-14 ">
       
          <button onClick={() => { window.location.href = "/services"; }} className="btn  text-m">
  See More
</button>
     
      </div>
    </section>

            <section id="flags-section" className="w-full  py-16 px-4">
          <div className="max-w-6xl mx-auto text-center mb-6">
            <h2 className=" mini-title text-3xl md:text-4xl font-bold text-amber-400 mb-6 flex items-center gap-1 pb-10">
                  <span className="border-t-2 border-amber-400 w-8"></span> Our International Cuisines
                </h2>
          </div>

          <div className="group flex w-max gap-6 animate-slide overflow-hidden">
            {[
              "Morocco", "Italy", "Japan", "Spain", "Turkey", "France", "India",
              "Morocco", "Italy", "Japan", "Spain", "Turkey", "France", "India",
              "Morocco", "Italy", "Japan", "Spain", "Turkey", "France", "India"
            ].map((flag, i) => (
              <img
                key={flag + i}
                src={`/flags/${flag}.png`}
                alt={`${flag} cuisine`}
                className="w-30 h-14 object-cover transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>

          <style>
            {`
              @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.3333%); }
              }
              .animate-slide {
                animation: slide 20s linear infinite;
              }
              .group:hover {
                animation-play-state: paused;
              }
            `}
          </style>

          <div className="text-center pt-16 ">
           <button  onClick={() => { window.location.href = "/menu#menu-section"; }} className="btn-overlay">
            Discover Our Menu
          </button>
          </div>
        </section>

        {/* footer */}
        <footer className="bg-[#1f1d1d] text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="mini-title text-orange-500 font-semibold text-lg mb-4 relative hover:text-gray-300  transition">
              Company
              <span className="absolute left-0 bottom-0 w-16 h-[2px] bg-orange-500"></span>
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-orange-400 transition">About us</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition">Contact us</a></li>
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
                © {new Date().getFullYear()} OB Foodie Restaurant. All rights reserved.
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
            <p className="text-gray-300 hover:text-orange-400 transition">Monday - Saturday<br />09AM - 09PM</p>
            <p className="mt-3 text-gray-300 hover:text-orange-400 transition">Sunday<br />10AM - 08PM</p>
          </div>

          {/* Newsletter */}
          <div>
              <h3 className="mini-title text-orange-500 font-semibold text-lg mb-4 relative hover:text-gray-300 transition">
                News Letter
                <span className="absolute left-0 bottom-0 w-16 h-[2px] bg-orange-500"></span>
              </h3>
              <p className="text-gray-300 mb-4">Write your Email to receive all offers from us!</p>
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

export default Home;