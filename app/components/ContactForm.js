"use client";
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section>
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 60 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-black text-white"
    >
      <h1 className="text-6xl font-bold mb-6 text-[#c8cefa]">Get in Touch</h1>
      <p className="text-lg mb-8">Have a project or just want to say hi? Drop a message below!</p>
      
      <form className="w-full max-w-lg space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button 
          type="submit" 
          className="w-full py-3 rounded-lg text-white transition border border-[#c8cefa] rounded-md hover:bg-[#c8cefa] hover:text-black"
        >
          Send Message
        </button>
      </form>
      
      <div className="flex space-x-6 mt-8">
        <a href="https://linkedin.com/in/shreyasrk" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/shreyasrk" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/shreyasrk" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-400 transition">
          <FaTwitter />
        </a>
        <a href="https://github.com/shreyasrk" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-gray-300 transition">
          <FaGithub />
        </a>
      </div>
    </motion.div>
    </section>
  );
};

export default ContactForm;
