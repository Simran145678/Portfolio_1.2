import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "./Header";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tdik6ha", // Replace with your EmailJS Service ID
        "template_mvvvgca", // Replace with your EmailJS Template ID
        formData,
        "2b6GQtlS_KxDnP_Id" // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Message failed to send.");
      });
  };

  return (
    <>
      <Header />
      <div className=" w-full h-screen ">
        <div className="bubble-img-1 "></div>
        <div className="bubble-img-2 absolute"></div>

        <form
          onSubmit={handleSubmit}
          className="contact-form flex flex-col justify-center items-center -mt-16 w-full"
        >
          <div className="w-1/3">
            <label className=" font-nonito text-gray-800 pb-2 w-full">
              Name:
              <input
                className="border-1 border-gray-300 font-nonito text-gray-800 block px-2 pt-2 w-full focus:outline-none focus:border-2 focus:border-yellow-500"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="font-nonito text-gray-800 pb-2 w-full">
              Email:
              <input
                className="border-1 border-gray-300 font-nonito text-gray-800 block px-2 pt-2 w-full focus:outline-none focus:border-2 focus:border-yellow-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="font-nonito text-gray-800 pb-2 w-full">
              Subject:
              <input
                className="border-1 border-gray-300 font-nonito text-gray-800 block px-2 pt-2 w-full focus:outline-none focus:border-2 focus:border-yellow-500"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>
            <label className="font-nonito text-gray-800 pb-2 w-full">
              Message:
              <textarea
                className="border-1 border-gray-300 font-nonito text-gray-800 h-48 block px-2 py-1 w-full focus:outline-none focus:border-2 focus:border-yellow-500 "
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow px-8 py-2 my-4 border-1 border-yellow-500"
            >
              <div className="absolute inset-0 w-3 bg-yellow-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-gray-800 group-hover:text-gray-900">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
