import React, { useState } from "react";
import Button from "../Components/Button";
import { toast } from "react-toastify";
import { BiCheckCircle } from "react-icons/bi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Message:", formData);

    toast.success("Message sent successfully!",{
      progressClassName: "!bg-[#875df8]",
      icon: <BiCheckCircle className="text-[#875df8] w-5 h-5" />
    });

    // ✅ reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Top Image Section */}
      <div className="relative w-full mt-16 h-70">
        <img
          src="https://i.ibb.co.com/MyXzDXTS/arlington-research-n-FLm-PAf9d-Vc-unsplash.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
          <p className="max-w-lg mx-3 text-white/80 text-2xl font-medium text-center">
            We’d love to hear from you! Whether you have questions, feedback, or
            want to discuss a project, our team is here to help.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="font-semibold text-xl mb-2">Address</h2>
          <p>123 Main St, Dhaka, Bangladesh</p>
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-2">Email</h2>
          <p>info@example.com</p>
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-2">Phone</h2>
          <p>+880 123 456 789</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-lg shadow-md mb-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded border"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded border"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-3 rounded border"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="p-3 rounded border"
            required
          ></textarea>

          <Button className="w-full z-10" type="submit">
            Send Message
          </Button>
        </form>
      </div>

      {/* Map Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902580624899!2d90.40758581498121!3d23.81033298455006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85774aa7ab3%3A0x3cf1dc7b9f3d2b5b!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693432970000!5m2!1sen!2sus"
          width="100%"
          height="300"
          className="border-0 rounded"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
