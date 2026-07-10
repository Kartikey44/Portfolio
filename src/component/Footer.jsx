import { profile, socialLinks, nav } from "../assets/data";

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <h2
              className="text-3xl font-bold
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-cyan-400
              bg-clip-text
              text-transparent"
            >
              {profile.name}
            </h2>

            <p className="mt-4 text-gray-400 leading-7">{profile.tagline}</p>
          </div>

          {/* Center */}
          <div>
            <h3 className="font-semibold text-xl mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3">
              {nav.map((item, index) => (
                <a
                  key={index}
                  href={item.id}
                  className="text-gray-400 hover:text-purple-400 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-semibold text-xl mb-5">Connect</h3>

            <p className="text-gray-400">{profile.email}</p>

            <p className="text-gray-400 mt-2">{profile.location}</p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                    hover:bg-purple-600
                    hover:scale-110
                    transition-all"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-6
          border-t border-white/10
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-3
          text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>

          <p>Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
