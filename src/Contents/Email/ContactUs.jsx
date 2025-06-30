import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoMailOpenOutline } from "react-icons/io5";
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();


export const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const  handleSubmit= (e) => {
    e.preventDefault();
     setLoading(true);
    setSuccess(null);

      setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      form.current.reset();
    }, 1500);

    emailjs
      .sendForm('service_supro_123', 'template_4u5lotc', form.current, {
        publicKey: 'iOn8wt7Nmt9HpEMOf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    

    <div data-aos="zoom-in-up"  className="max-w-md mx-auto border-2 border-[#7b927e]  rounded-lg p-10   tracking-wide text-base shadow-[6px_6px_0_0_#4f6653]">
     

      <form ref={form} onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@gmail.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-gray-500">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
        
          type="submit"
          disabled={loading}
          className="w-full relative
px-6 py-2
rounded-xl
bg-[#6f8b76]
text-gray-900
tracking-wide text-base
border-2 border-[#7b927e]
shadow-[5px_5px_0_0_#4f6653]
transition-transform duration-500
hover:translate-x-2 hover:translate-y-3
active:translate-x-0 active:translate-y-0
flex flex-row items-center gap-2 justify-center"
        >
          {loading ? "Sending..." : "Send Message"} <span><IoMailOpenOutline /></span>
        </button>

        {/* Success/Error Message */}
        {success === true && (
          <p className="mt-3 text-green-600 text-center">Message sent successfully!</p>
        )}
        {success === false && (
          <p className="mt-3 text-red-500 text-center">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};