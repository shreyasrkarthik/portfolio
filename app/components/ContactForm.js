"use client";
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { useState } from 'react'; // Import useState for form data handling
import emailjs from 'emailjs-com';

const ContactForm = () => {
  // Define state to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    console.log(form);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs.sendForm(
      serviceId,
      templateId,
      form,
      userId
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message, please try again later.');
      }
    );
    
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-black text-white"
      >
        <h1 className="text-8xl font-bold mb-6 text-[#c8cefa]">Get in Touch</h1>
        <p className="text-lg mb-8">Have a project or just want to say hi? Drop a message below!</p>
        
        <form 
          onSubmit={handleSubmit} // Handle the form submission
          className="w-full max-w-lg space-y-4"
        >
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} // Bind input field to state
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Bind input field to state
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Bind textarea field to state
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit" 
            className="w-full py-3 rounded-lg text-white border-2 border-[#c8cefa] hover:bg-[#c8cefa] hover:text-black transition"
          >
            Send Message
          </button>
        </form>
        
        <div className="flex space-x-6 mt-8">
          <a href="https://www.linkedin.com/in/shreyas-rk/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/shreyas.rkarthik/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://x.com/shreyasrkarthik" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://github.com/shreyasrkarthik" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-gray-300 transition">
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
