import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { profile, socialLinks } from "../assets/data";

function Contacts() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_PUBLICKEY,
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      className="section py-20 px-5 md:px-8 scroll-mt-32 overflow-hidden"
    >
      <div className="container relative">
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 font-semibold uppercase tracking-widest">
            Contact
          </span>

          <h2 className="heading mt-3">Let's Build Something Amazing</h2>

          <p className="paragraph mt-4 max-w-2xl mx-auto">
            Whether you have an internship opportunity, freelance project,
            startup idea, or simply want to connect, my inbox is always open.
          </p>
        </motion.div>

        {/* Contact Card */}
        <div className="card relative overflow-hidden rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 p-6 sm:p-8 lg:p-12 grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Let's Work Together
            </h3>

            <p className="paragraph mt-6 leading-8">
              I'm currently open to internships, freelance work, collaborations,
              hackathons, and exciting software development opportunities. Feel
              free to reach out anytime.
            </p>

            <div className="mt-10 space-y-5">
              {/* Email */}
              <div className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-purple-500 text-xl" />
                </div>

                <div>
                  <p className="text-purple-500 font-semibold">Email</p>

                  <p className="mt-1 text-gray-700 dark:text-gray-300 break-all">
                    {profile.email}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <FaLocationDot className="text-purple-500 text-xl" />
                </div>

                <div>
                  <p className="text-purple-500 font-semibold">Location</p>

                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    whileHover={{ y: -6, rotate: 8, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass h-12 w-12 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="glass w-full rounded-xl border border-white/10 px-5 py-3 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="glass w-full rounded-xl border border-white/10 px-5 py-3 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="glass w-full rounded-xl border border-white/10 px-5 py-3 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 resize-none outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="btn-primary w-full py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;