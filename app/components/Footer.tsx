import { GitBranch, Camera, ShoppingBag } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ethantan0716-gif",
    icon: GitBranch,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/YOUR_HANDLE", // replace with real handle
    icon: Camera,
  },
  {
    label: "Etsy",
    href: "https://etsy.com/shop/YOUR_SHOP", // replace with real Etsy URL
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
    <footer className="bg-[#0c0e10] border-t border-[#46484a]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Brand */}
          <div>
            <span
              className="font-black text-[#81ecff] text-xl uppercase tracking-tighter block mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Ethan Tan
            </span>
            <p className="text-[#46484a] text-xs uppercase tracking-[0.2em]">
              Maker. Builder. Creator.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-8 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#747578] hover:text-[#81ecff] text-sm uppercase tracking-widest transition-colors"
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
                  className="text-[#747578] hover:text-[#81ecff] transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#46484a]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#46484a] text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Ethan Tan. Built with Next.js.
          </p>
          <p className="text-[#46484a] text-xs">Singapore 🇸🇬</p>
        </div>
      </div>
    </footer>
  );
}
