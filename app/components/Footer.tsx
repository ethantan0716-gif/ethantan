import { GitBranch, Camera, ShoppingBag } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/ethantan0716-gif", icon: GitBranch },
  { label: "Instagram", href: "https://instagram.com/YOUR_HANDLE", icon: Camera },
  { label: "Etsy", href: "https://brickyfb.etsy.com", icon: ShoppingBag },
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
          <div className="flex items-center gap-4">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-[#d97706] transition-colors"
                >
                  <Icon size={18} />
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
