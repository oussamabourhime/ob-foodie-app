import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Menu.css";

const cuisineFlags = {
  moroccan: "/flags/Morocco.png",
  italian: "/flags/Italy.png",
  japanese: "/flags/Japan.png",
  spanish: "/flags/Spain.png",
  turkish: "/flags/Turkey.png",
  french: "/flags/France.png",
  indian: "/flags/India.png",
};
const menuData = {
  moroccan: [
    {
      name: "Tagine",
      price: 120,
      image: "/moroccan/tagine.jpg",
      description:
        "A slow-cooked savory stew made with meat, vegetables, and spices.",
    },
    {
      name: "Couscous",
      price: 90,
      image: "/moroccan/couscous.jpg",
      description: "Steamed balls of semolina served with vegetables and meat.",
    },
    {
      name: "Harira Soup",
      price: 60,
      image: "/moroccan/harira.jpg",
      description:
        "Traditional Moroccan soup made with tomatoes, lentils, and chickpeas.",
    },
    {
      name: "Kefta",
      price: 120,
      image: "/moroccan/kefta.jpg",
      description:
        "A slow-cooked savory stew made with meat, vegetables, and spices.",
    },
    {
      name: "Mechoui",
      price: 90,
      image: "/moroccan/mechoui.jpg",
      description: "Steamed balls of semolina served with vegetables and meat.",
    },
    {
      name: "Pastilla",
      price: 120,
      image: "/moroccan/pastilla.jpg",
      description:
        "A slow-cooked savory stew made with meat, vegetables, and spices.",
    },
    {
      name: "Zaalouk",
      price: 90,
      image: "/moroccan/zaalouk.jpg",
      description: "Steamed balls of semolina served with vegetables and meat.",
    },
    {
      name: "Briouat",
      price: 60,
      image: "/moroccan/briouat.jpg",
      description:
        "Traditional Moroccan soup made with tomatoes, lentils, and chickpeas.",
    },
    {
      name: "Baghrir",
      price: 60,
      image: "/moroccan/baghrir.jpg",
      description:
        "Traditional Moroccan soup made with tomatoes, lentils, and chickpeas.",
    },
  ],
  italian: [
    {
      name: "Pizza",
      price: 120,
      image: "/italian/pizza.jpg",
      description:
        "Classic Italian dish with tomato sauce, cheese, and various toppings.",
    },
    {
      name: "Pasta",
      price: 100,
      image: "/italian/pasta.jpg",
      description: "Delicious noodles served with rich sauces and ingredients.",
    },
    {
      name: "Lasagna",
      price: 130,
      image: "/italian/lasagna.jpg",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
    },
    {
      name: "Risotto",
      price: 110,
      image: "/italian/risotto.jpg",
      description:
        "Creamy rice dish cooked with broth, cheese, and other ingredients.",
    },
    {
      name: "Gnocchi",
      price: 90,
      image: "/italian/gnocchi.jpg",
      description: "Soft potato dumplings served with sauce or melted butter.",
    },
    {
      name: "Bruschetta",
      price: 70,
      image: "/italian/bruschetta.jpg",
      description: "Grilled bread topped with garlic, tomatoes, and olive oil.",
    },
    {
      name: "Carbonara",
      price: 115,
      image: "/italian/carbonara.jpg",
      description: "Pasta with eggs, cheese, pancetta, and pepper.",
    },
    {
      name: "Tiramisu",
      price: 75,
      image: "/italian/tiramisu.jpg",
      description: "Coffee-flavored Italian dessert with mascarpone and cocoa.",
    },
    {
      name: "Caprese Salad",
      price: 80,
      image: "/italian/capresesalad.jpg",
      description: "Fresh tomatoes, mozzarella, basil, and olive oil.",
    },
  ],

  japanese: [
    {
      name: "Sushi",
      price: 120,
      image: "./japanese/sushi.jpg",
      description: "Vinegared rice with raw fish, vegetables, and seaweed.",
    },
    {
      name: "Ramen",
      price: 100,
      image: "./japanese/ramen.jpg",
      description: "Japanese noodle soup with meat, egg, and vegetables.",
    },
    {
      name: "Tempura",
      price: 90,
      image: "./japanese/tempura.jpg",
      description: "Seafood or vegetables deep-fried in a light batter.",
    },
    {
      name: "Okonomiyaki",
      price: 95,
      image: "./japanese/okonomiyaki.jpg",
      description: "Savory pancake with cabbage and various toppings.",
    },
    {
      name: "Takoyaki",
      price: 85,
      image: "./japanese/takoyaki.jpg",
      description:
        "Octopus-filled batter balls topped with sauce and bonito flakes.",
    },
    {
      name: "Tonkatsu",
      price: 110,
      image: "./japanese/tonkatsu.jpg",
      description:
        "Breaded deep-fried pork cutlet served with shredded cabbage.",
    },
    {
      name: "Udon",
      price: 90,
      image: "./japanese/udon.jpg",
      description: "Thick wheat noodles served in a mild broth.",
    },
    {
      name: "Onigiri",
      price: 65,
      image: "./japanese/onigiri.jpg",
      description: "Rice balls filled with salmon, tuna, or pickled plum.",
    },
    {
      name: "Sashimi",
      price: 55,
      image: "./japanese/sashimi.jpg",
      description:
        "Sweet glutinous rice cake filled with red bean or ice cream.",
    },
  ],

  spanish: [
    {
      name: "Paella",
      price: 150,
      image: "./spanish/paella.jpg",
      description: "Rice dish with seafood, meat, and vegetables.",
    },
    {
      name: "Tapas",
      price: 80,
      image: "./spanish/tapas.jpg",
      description: "Small savory dishes served with drinks.",
    },
    {
      name: "Gazpacho",
      price: 60,
      image: "./spanish/gazpacho.jpg",
      description: "Cold tomato-based vegetable soup.",
    },
    {
      name: "Tortilla Española",
      price: 85,
      image: "./spanish/tortilla_espanola.jpg",
      description: "Spanish omelette with potatoes and onions.",
    },
    {
      name: "Churros",
      price: 50,
      image: "./spanish/churros.jpg",
      description: "Fried-dough pastry served with chocolate.",
    },
    {
      name: "Gazpacho",
      price: 70,
      image: "./spanish/gazpacho.jpg",
      description: "Creamy croquettes filled with ham or chicken.",
    },
    {
      name: "Calamares",
      price: 65,
      image: "./spanish/calamares.jpg",
      description: "Fried green peppers with sea salt.",
    },
    {
      name: "Empanada",
      price: 75,
      image: "./spanish/empanada.jpg",
      description: "Pastry filled with meat, fish, or vegetables.",
    },
    {
      name: "Jamon",
      price: 70,
      image: "./spanish/jamon.jpg",
      description: "Custard dessert similar to crème brûlée.",
    },
  ],

  turkish: [
    {
      name: "Döner",
      price: 120,
      image: "./turkish/doner.jpg",
      description: "Spit-roasted meat in a wrap or sandwich.",
    },
    {
      name: "Lahmacun",
      price: 90,
      image: "./turkish/lahmacun.jpg",
      description: "Thin flatbread with minced meat and spices.",
    },
    {
      name: "Kebab",
      price: 150,
      image: "./turkish/kebab.jpg",
      description: "Grilled skewered meat with spices.",
    },
    {
      name: "Börek",
      price: 70,
      image: "./turkish/borek.jpg",
      description: "Eggs with tomatoes, peppers, and spices.",
    },
    {
      name: "Meze",
      price: 60,
      image: "./turkish/meze.jpg",
      description: "Sweet layered pastry with nuts and syrup.",
    },
    {
      name: "Pide",
      price: 100,
      image: "./turkish/pide.jpg",
      description: "Boat-shaped flatbread with various fillings.",
    },
    {
      name: "Kumpir",
      price: 110,
      image: "./turkish/kumpir.jpg",
      description: "Grilled meatballs with spices.",
    },
    {
      name: "Simit",
      price: 40,
      image: "./turkish/simit.jpg",
      description: "Sesame-crusted circular bread.",
    },
    {
      name: "Manti",
      price: 85,
      image: "./turkish/manti.jpg",
      description: "Spicy raw bulgur patties served with lettuce.",
    },
  ],
  french: [
    {
      name: "Coq au Vin",
      price: 180,
      image: "./french/coq-au-vin.jpg",
      description: "Chicken braised with wine, mushrooms, and onions.",
    },
    {
      name: "Ratatouille",
      price: 140,
      image: "./french/ratatouille.jpg",
      description: "Stewed vegetables with olive oil, herbs, and tomato sauce.",
    },
    {
      name: "Crème Brûlée",
      price: 90,
      image: "./french/creme-brulee.jpg",
      description: "Creamy custard topped with caramelized sugar.",
    },
    {
      name: "Bouillabaisse",
      price: 200,
      image: "./french/bouillabaisse.jpg",
      description: "Traditional Provençal fish stew with saffron broth.",
    },
    {
      name: "Quiche Lorraine",
      price: 120,
      image: "./french/quiche-lorraine.jpg",
      description: "Savory pie with eggs, cream, bacon, and cheese.",
    },
    {
      name: "Beef Bourguignon",
      price: 190,
      image: "./french/beef-bourguignon.jpg",
      description: "Beef stewed in red wine with mushrooms and onions.",
    },
    {
      name: "Soupe à l'oignon",
      price: 110,
      image: "/french/onion-soup.jpg",
      description: "French onion soup topped with bread and melted cheese.",
    },
    {
      name: "Macarons",
      price: 80,
      image: "./french/macarons.jpg",
      description:
        "Colorful almond meringue cookies filled with ganache or buttercream.",
    },
    {
      name: "Madeleines",
      price: 70,
      image: "./french/madeleines.jpg",
      description: "Small buttery sponge cakes with a shell shape.",
    },
  ],
  indian: [
    {
      name: "Butter Chicken",
      price: 160,
      image: "./indian/butter-chicken.jpg",
      description: "Creamy tomato-based curry with tender chicken.",
    },
    {
      name: "Paneer Tikka",
      price: 120,
      image: "./indian/paneer-tikka.jpg",
      description: "Grilled cubes of paneer marinated in spices.",
    },
    {
      name: "Biryani",
      price: 150,
      image: "./indian/biryani.jpg",
      description:
        "Fragrant rice dish cooked with spices, meat, or vegetables.",
    },
    {
      name: "Samosa",
      price: 60,
      image: "./indian/samosa.jpg",
      description: "Deep-fried pastry filled with spiced potatoes and peas.",
    },
    {
      name: "Chole Bhature",
      price: 110,
      image: "./indian/chole-bhature.jpg",
      description: "Spicy chickpea curry served with fried bread.",
    },
    {
      name: "Tandoori Chicken",
      price: 140,
      image: "./indian/tandoori-chicken.jpg",
      description:
        "Chicken marinated in yogurt and spices, roasted in a tandoor.",
    },
    {
      name: "Dal Makhani",
      price: 100,
      image: "./indian/dal-makhani.jpg",
      description: "Slow-cooked black lentils with butter and cream.",
    },
    {
      name: "Gulab Jamun",
      price: 70,
      image: "./indian/gulab-jamun.jpg",
      description: "Sweet milk-solid dumplings soaked in rose syrup.",
    },
    {
      name: "Naan",
      price: 50,
      image: "./indian/naan.jpg",
      description: "Soft leavened flatbread baked in a tandoor.",
    },
  ],
};

const cuisines = Object.keys(menuData);

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState("moroccan");
  const [selectedItem, setSelectedItem] = useState(null);

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
              window.location.href = "/contact";
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
            Our Delecious Menu!
          </h2>
          <p
            className="font-bold text-lg md:text-2xl max-w-4xl"
            style={{ textShadow: "0 0 5px orange" }}
          >
            Discover a World of Flavors! Browse our menu to experience the
            unique cuisines!
          </p>
        </div>
      </section>

      <section id="menu-section" className="min-h-screen pt-12 text-amber-400 ">
        <h1 className="mini-title text-4xl font-bold text-center mb-14 ">
          Our Delicious Menu
        </h1>

        {/* Cuisine Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              style={{ boxShadow: "0 0 10px orange" }}
              className={`flex items-center gap-2 capitalize px-6 py-2 rounded-full border transition font-semibold hover:bg-amber-400 hover:text-neutral-900 ${
                selectedCuisine === cuisine
                  ? "bg-amber-400 border border-amber-400 text-neutral-900"
                  : "bg-transparent border-amber-400 text-amber-400"
              }`}
            >
              <img
                src={cuisineFlags[cuisine]}
                alt={`${cuisine} flag`}
                className="w-auto h-6 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110"
              />
              {cuisine}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCuisine}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-5 pb-10"
          >
            {menuData[selectedCuisine].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-900  rounded-xl shadow-md overflow-hidden "
                style={{ boxShadow: "0 0 10px orange" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover "
                />
                <div className="p-4">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white font-bold">{item.price} MAD</p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => {
                        window.location.href = "/contact#contact-form";
                      }}
                      className=" flex-1 bg-amber-400 border-amber-400 font-semibold text-neutral-900 py-2 rounded hover:bg-amber-500 hover:border hover:border-amber-500 transition"
                      style={{ boxShadow: "0 0 10px orange" }}
                    >
                      Order Now
                    </button>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="flex-1 border border-amber-500 bg-transparent font-semibold text-amber-400 py-2 rounded hover:bg-amber-500 hover:border hover:text-neutral-900 transition"
                      style={{ boxShadow: "0 0 10px orange" }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Item Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-5 z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border border-amber-400"
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-60 object-cover rounded mb-4"
                />
                <h2 className="text-black text-2xl font-bold mb-2">
                  {selectedItem.name}
                </h2>
                <p className="text-gray-600 mb-2">{selectedItem.description}</p>
                <p className="text-black font-bold mb-4">
                  {selectedItem.price} MAD
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      window.location.href = "/contact#contact-form";
                    }}
                    className=" flex-1 bg-amber-400 border-amber-400 font-semibold text-neutral-900 py-2 rounded hover:bg-amber-500 hover:border hover:border-amber-500 transition"
                    style={{ boxShadow: "0 0 10px orange" }}
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 border border-amber-500 text-black bg-transparent font-semibold  py-2 rounded hover:bg-amber-500 hover:border hover:text-neutral-900 transition"
                    style={{ boxShadow: "0 0 10px orange" }}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
};

export default Menu;
