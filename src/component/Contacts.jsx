import React from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
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
    <div id="contact" className='max-w-xl   px-5 mx-auto scroll-mt-32'>
      <div className='grid w-full grid-cols-1 gap-10'>
      <div className='flex flex-col text-center  gap-1 max-w-120 mx-auto'>
        <h1 className='text-4xl text-white font-bold'>
          Get In Touch
        </h1>
        <span className='text-sm text-gray-500'>Feel free to reach out if you want to collaborate or just say hi</span>
      </div>
        <form onSubmit={ handleSubmit} className='w-full mx-auto flex flex-col gap-6' >
        <div className='flex flex-col gap-2'>
          <label className='text-white text-sm font-bold'>Name</label>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name'
              className='border rounded-lg py-2  border-white/20 px-8' />
        </div> 
        <div className='flex flex-col gap-2'>
          <label className="text-white text-sm font-bold"> Email</label>
            <input
              className='border rounded-lg py-2  border-white/20 px-8'
              name='email'
              value={form.email}
              type="email"
              onChange={handleChange}
              placeholder='your@email.com' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-white text-sm font-bold'>Message</label>
            <textarea
              name='message'
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message'
              className='border rounded-lg py-2 border-white/20 px-8'
              />
          </div>
          <button type='submit' className='text-center cursor-pointer bg-pink-600/60 px-8 py-3 rounded-lg shadow-xl text-white mb-10'>
        Send Message
        </button>
        </form>
        
      </div>
      </div>
  )
}

export default Contacts
