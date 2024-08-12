import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
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

    emailjs
      .send(
        "service_cvwdg7b", // Your Service ID
        "template_7wxw3ow", // Your Template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "r8GgRyZzVnZS48UBs" // Your Public Key
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-center mt-16">
          <div className="border-b border-neutral-900 pb-4">
            <h1 className="text-center text-4xl mb-8">Contact Me</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-8 shadow-lg rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-neutral-600 bg-neutral-700 text-white p-4 rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-neutral-600 bg-neutral-700 text-white p-4 rounded-md"
            />
          </div>
          <div className="mt-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-neutral-600 bg-neutral-700 text-white p-4 rounded-md w-full"
            />
          </div>
          <div className="mt-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-neutral-600 bg-neutral-700 text-white p-4 rounded-md w-full"
            />
          </div>
          <div className="mt-6">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-neutral-600 bg-neutral-700 text-white p-4 rounded-md w-full h-40"
            ></textarea>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-cyan-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-cyan-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
