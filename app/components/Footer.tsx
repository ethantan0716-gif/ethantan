import { GitBranch, Camera, ShoppingBag } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ethantan0716-gif",
    icon: GitBranch,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/YOUR_HANDLE",
    icon: Camera,
  },
  {
    label: "Etsy",
    href: "https://etsy.com/shop/YOUR_SHOP",
    icon: ShoppingBag,
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Brand */}
          <div>
            <span
              className="font-black text-[#0ea5e9] text-xl uppercase tracking-tighter block mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Ethan Tan
            </span>
            <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">
              Maker. Builder. Creator.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-8 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-[#0ea5e9] text-sm transition-colors"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
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
                  className="text-slate-400 hover:text-[#0ea5e9] transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Ethan Tan. Built with Next.js.
          </p>
          <p className="text-slate-400 text-xs">Singapore 🇸🇬</p>
        </div>
      </div>
    </footer>
  );
}
