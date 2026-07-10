import React from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { profile } from "../assets/data";
function Contacts() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
      import.meta.env.VITE_SERVICEID,
      import.meta.env.VITE_TEMPLATEID,
    {
      name: form.name,
      email: form.email,
      message: form.message
    },
    import.meta.env.VITE_PUBLICKEY,
  )
  .then(() => {
  toast.success("Message sent successfully!");
  setForm({ name: "", email: "", message: "" });
})
.catch((err) => {
  console.log("EmailJS Error:", err);
  toast.error("Failed to send message");
});
};

  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto px-5 py-20 scroll-mt-32 text-white"
    >
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>

        <p className="text-gray-400 mt-3">
          Have an idea, project, or opportunity? Let's connect.
        </p>
      </div>

      <div
        className="grid lg:grid-cols-2 gap-10
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8 md:p-12"
      >
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Let's Work Together</h2>

          <p className="text-gray-400 mt-5 leading-8">
            I'm currently open to internships, freelance work, collaborations,
            and exciting opportunities.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-purple-400 font-semibold">Email</p>

              <p className="text-gray-300">{ profile.email}</p>
            </div>

            <div>
              <p className="text-purple-400 font-semibold">Location</p>

              <p className="text-gray-300">{profile.location}</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-xl
          bg-white/5
          border border-white/10
          px-5 py-3
          outline-none
          focus:border-purple-500
          focus:ring-2
          focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full rounded-xl
          bg-white/5
          border border-white/10
          px-5 py-3
          outline-none
          focus:border-purple-500
          focus:ring-2
          focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>

            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full rounded-xl
          bg-white/5
          border border-white/10
          px-5 py-3
          resize-none
          outline-none
          focus:border-purple-500
          focus:ring-2
          focus:ring-purple-500/30"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl
        bg-gradient-to-r
        from-purple-600
        via-fuchsia-500
        to-pink-500
        font-semibold
        transition
        hover:scale-[1.02]
        active:scale-95"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts
