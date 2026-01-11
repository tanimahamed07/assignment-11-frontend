import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "../../../assets/images/image-removebg-preview (2).png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-neutral-950 to-black text-gray-300 border-t border-amber-900/30 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="LoanLink Logo" 
                className="h-12 w-auto object-contain" 
              />
              <span className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent tracking-tight">
                LoanLink
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Fast, secure, and hassle-free microloans for everyone. 
              Your trusted financial growth partner in Bangladesh.
            </p>
          </div>

          {/* 2. Quick Links - Centered on desktop */}
          <div className="lg:mx-auto">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "All Loans", path: "/all-loans" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact", path: "/contact" },
                { name: "Dashboard", path: "/dashboard" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-200 hover:text-amber-400 ${
                        isActive ? "text-amber-400 font-medium" : "text-gray-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="lg:mx-auto">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
              Support
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="hover:text-amber-400 cursor-pointer">support@loanlink.com</p>
              <p>+880 1700-000000</p>
              <p className="pt-2">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* 4. Social Media */}
          <div className="lg:text-right">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs lg:justify-end">
              Follow Us
            </h3>
            <div className="flex gap-3 lg:justify-end">
              {[
                { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com/tanim.123888/" },
                { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: FaXTwitter, label: "X", href: "https://x.com" },
                { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/in/tanim-ahamed/" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-2.5 rounded-full text-gray-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} LoanLink. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
          <p className="hidden md:block">Made with ❤️ in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;