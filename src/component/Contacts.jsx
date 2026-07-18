import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { profile } from "../assets/data";

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
    <section id="contact" className="section container py-20 px-20 scroll-mt-32">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="heading">Get In Touch</h2>

        <p className="paragraph mt-3">
          Have an idea, project, or opportunity? Let's connect.
        </p>
      </div>

      {/* Contact Card */}
      <div className="card grid lg:grid-cols-2 gap-10 rounded-3xl p-8 md:p-12">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h3>

          <p className="paragraph mt-5 leading-8">
            I'm currently open to internships, freelance work, collaborations,
            and exciting opportunities.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-purple-500 dark:text-purple-400 font-semibold">
                Email
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                {profile.email}
              </p>
            </div>

            <div>
              <p className="text-purple-500 dark:text-purple-400 font-semibold">
                Location
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                {profile.location}
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder:text-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder:text-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
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
              placeholder="Write your message..."
              className="w-full rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder:text-gray-500 resize-none outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
            />
          </div>

          <button type="submit" className="btn-primary w-full py-4">
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
