import {profile,socialLinks} from './../assets/data'
function Footer() {
    return (
        <footer className="w-full  bg-linear-to-tl from-[#3a3a3a] to-[#0a01a0a]  ">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 bg-linear-to-tl text-4xl bg-clip-text font-bold from-[#ea3232] to-[#790b0b] mb-2 text-transparent">
                {profile.name}
                </div>
                <p className='mb-6'>{profile.role} || Full Stack Engineer</p>
                <div className="flex justify-between text-sm font-normal gap-10 ">
                   {socialLinks.map((item, index) => {
                       const Icon = item.icon;
                       return (
                         <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                           <Icon className='text-white rounded-2xl hover:scale-110 bg-[#0a0a0a] p-4 transition' size={50} />
                         </a>
                       );
                   })}
                </div>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://">Kartikey Saraswat</a> ©2026. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;