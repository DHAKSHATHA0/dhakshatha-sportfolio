import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#skills", label: "SKILLS" },
  { href: "#achievements", label: "ACHIEVEMENTS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur-md bg-background/70 border-b border-cyan/15" : ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3 font-mono">
            <span className="grid h-9 w-9 place-items-center rounded border border-cyan text-cyan text-sm font-bold">D</span>
            <span className="text-lg tracking-[0.18em] font-semibold">DHAKSHATHA<span className="text-cyan"> .</span></span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-cyan">
                {l.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-cyan" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border border-cyan/20 rounded p-4 mb-3 backdrop-blur bg-background/80">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-xs tracking-[0.18em] text-muted-foreground hover:text-cyan">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
