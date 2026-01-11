import { Link, NavLink } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // কন্টাক্ট আইকন
import logo from "../../../assets/images/image-removebg-preview (2).png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-950 text-gray-300 border-t border-amber-500/10 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Brand Section - Always Left Aligned for readability */}
          <div className="space-y-6 text-center sm:text-left">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="LoanLink Logo"
                className="h-20 w-auto object-contain mx-auto sm:mx-0 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Fast, secure, and hassle-free microloans for everyone. Your
              trusted financial growth partner in Bangladesh.
            </p>
          </div>

          {/* 2. Quick Links - Centered on tablet, Left on desktop */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px]">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm font-medium">
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
                      `transition-all duration-300 hover:text-amber-500 flex items-center justify-center sm:justify-start gap-2 ${
                        isActive ? "text-amber-500" : "text-gray-400"
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
          <div className="text-center sm:text-left">
            <h3 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px]">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center justify-center sm:justify-start gap-3 hover:text-amber-500 transition-colors">
                <FaEnvelope className="text-amber-500" />
                <span>support@loanlink.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 hover:text-amber-500 transition-colors">
                <FaPhoneAlt className="text-amber-500" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <FaMapMarkerAlt className="text-amber-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* 4. Social Media - Centered on Mobile, Right on Desktop */}
          <div className="text-center sm:text-left lg:text-right">
            <h3 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px]">
              Follow Us
            </h3>
            <div className="flex justify-center sm:justify-start lg:justify-end gap-3 mb-6">
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
                  className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-gray-400 hover:bg-amber-500 hover:text-black hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-amber-500"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 inline-block lg:ml-auto">
                <p className="text-[10px] text-amber-500 font-bold uppercase">Safe & Secure</p>
                <p className="text-[9px] text-gray-500">SSL Encrypted Transactions</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium tracking-wide text-gray-500 uppercase">
          <p>© {currentYear} <span className="text-amber-500">LoanLink</span>. All rights reserved.</p>
          
          <div className="flex gap-8">
            <span className="hover:text-amber-500 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">Terms of Service</span>
          </div>
          
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse text-sm">❤️</span> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;