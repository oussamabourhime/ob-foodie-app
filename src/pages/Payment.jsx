import { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaUser,
  FaCreditCard,
} from "react-icons/fa";
import { MdDateRange, MdLock } from "react-icons/md";
import "./Payment.css";

function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isComplete = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (!isComplete) {
      alert("Please complete all fields before submitting payment.");
      return;
    }
    alert("Payment submitted!");
  };

  return (
    <div
      id="payment-section"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6"
    >
      <form
        id="form"
        style={{ backgroundImage: "url('/wood-bg.jpg')" }}
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-cover bg-center bg-no-repeat rounded-xl shadow-lg p-8 w-full max-w-md text-white border border-gray-700"
      >
        <h2 className="mini-title text-3xl font-bold text-center mb-6 text-amber-400">
          Payment Form
        </h2>

        {/* Card Number */}
        <div className="mb-4 relative">
          <FaCreditCard
            className="absolute left-3 top-3 text-amber-400"
            size={20}
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-gray-600 focus:border-amber-400 focus:ring focus:ring-amber-500 outline-none transition"
          />
        </div>

        {/* Expiry Date */}
        <div className="mb-4 relative">
          <MdDateRange
            className="absolute left-3 top-3 text-amber-400"
            size={20}
          />
          <input
            type="month"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-gray-600 focus:border-amber-400 focus:ring focus:ring-amber-500 outline-none transition"
          />
        </div>

        {/* CVV */}
        <div className="mb-4 relative">
          <MdLock className="absolute left-3 top-3 text-amber-400" size={20} />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            maxLength="4"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-gray-600 focus:border-amber-400 focus:ring focus:ring-amber-500 outline-none transition"
          />
        </div>

        {/* Name on Card */}
        <div className="mb-4 relative">
          <FaUser className="absolute left-3 top-3 text-amber-400" size={20} />
          <input
            type="text"
            name="name"
            placeholder="Name on card"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-gray-600 focus:border-amber-400 focus:ring focus:ring-amber-500 outline-none transition"
          />
        </div>

        {/* Payment Methods */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <FaCcMastercard size={40} className="text-red-500 drop-shadow" />
          <FaCcVisa size={40} className="text-blue-500 drop-shadow" />
          <FaPaypal size={40} className="text-blue-400 drop-shadow" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn w-full my-3 py-3">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;
