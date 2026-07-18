import { profile, socialLinks, nav } from "../assets/data";

function Footer() {
  return (
    <footer className="section relative mt-24 overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="container relative px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <h2
              className="
              text-3xl
              font-bold
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-cyan-400
              bg-clip-text
              text-transparent"
            >
              {profile.name}
            </h2>

            <p className="paragraph mt-4 leading-7">{profile.tagline}</p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {nav.map((item, index) => (
                <a
                  key={index}
                  href={item.id}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
              Connect
            </h3>

            <p className="paragraph">{profile.email}</p>

            <p className="paragraph mt-2">{profile.location}</p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass group w-12 h-12 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 hover:scale-110 transition-all duration-300"
                  >
                    <Icon
                      size={20}
                      className="text-gray-700 dark:text-white group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
          mt-12
          pt-6
          border-t
          border-gray-200
          dark:border-gray-800
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-3
          text-sm
          text-gray-600
          dark:text-gray-400"
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
