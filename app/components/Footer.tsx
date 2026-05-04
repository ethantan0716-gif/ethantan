import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiEtsy } from "react-icons/si";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ethantan0716-gif",
    icon: FaGithub,
    color: "#1c1917",
    hover: "#d97706",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/brickyfb",
    icon: FaInstagram,
    color: "#e1306c",
    hover: "#c2185b",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@brickyfb",
    icon: FaYoutube,
    color: "#ff0000",
    hover: "#cc0000",
  },
  {
    label: "Etsy",
    href: "https://brickyfb.etsy.com",
    icon: SiEtsy,
    color: "#f1641e",
    hover: "#d4581a",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-[#e8ddd5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Brand */}
          <div>
            <span
              className="font-extrabold text-[#d97706] text-xl block mb-1"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Ethan Tan
            </span>
            <p className="text-stone-400 text-xs">Maker. Builder. Creator.</p>
          </div>

          {/* Nav */}
          <nav className="flex gap-8 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-500 hover:text-[#d97706] text-sm transition-colors"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#e8ddd5] flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <Icon
                    size={16}
                    style={{ color: s.color }}
                    className="group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#e8ddd5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} Ethan Tan. Built with Next.js.
          </p>
          <p className="text-stone-400 text-xs">Singapore 🇸🇬</p>
        </div>
      </div>
    </footer>
  );
}
