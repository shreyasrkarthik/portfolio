"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      alert("Signal received. I will get back to you.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      alert("Transmission failed. Try again later.");
    }
  };

  return (
    <section className="glass p-6 sm:p-8">
      <h2 className="mb-4 text-2xl font-bold text-violet-200">contact.channel</h2>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input name="user_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-300/70" required />
        <input name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-300/70" required />
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" rows={5} className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none focus:border-cyan-300/70" required />
        <button type="submit" className="rounded-lg border border-violet-300/60 px-4 py-2.5 font-semibold text-violet-100 transition hover:border-cyan-300/70 hover:text-cyan-200">
          Send
        </button>
      </form>

      <div className="mt-5 flex items-center gap-4 text-xl text-slate-300">
        <a href="https://www.linkedin.com/in/shreyas-rk/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/shreyas.rkarthik/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://x.com/shreyasrkarthik" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://github.com/shreyasrkarthik" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </section>
  );
}
