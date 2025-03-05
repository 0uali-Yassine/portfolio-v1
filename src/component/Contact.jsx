import { useState } from "react";
import Navbar from "../pages/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
        <form
          action="https://formcarry.com/s/oGqIkTy58O_"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ECD06F] border border-2 text-black py-2 rounded-lg hover:bg-white hover:drop-shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
