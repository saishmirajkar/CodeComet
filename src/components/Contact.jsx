import React, { useEffect } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >
      <div className="flex flex-col justify-center items-center w-full h-full text-white">
        {/* Heading */}
        <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
          Contact
        </p>
        {/* Description */}
        <p className="py-6 flex flex-col justify-center items-center">
         send us an email - {" "}
          <span className="font-bold">saishmirajkar0@gmail.com / kulkarnimadhushree785@gmail.com </span>
        </p>
        <p className="py-6">
         Phone Number -{" "}
          <span className="font-bold">+91 7022642345 </span>
        </p>

        {/* Form */}


        {/* Send Message Button */}

      </div>
    </div>
  );
};

export default Contact;