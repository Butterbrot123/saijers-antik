"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/siteData";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          Saijers <span>Antikankauf</span>
        </Link>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className={[
                pathname === item.href ? "active" : "",
                item.href === "/kontakt" ? "nav-contact-link" : ""
              ]
                .filter(Boolean)
                .join(" ")}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className={`mobile-panel ${open ? "open" : ""}`} aria-label="Mobile Navigation">
        {navItems.map((item) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            className={[
              pathname === item.href ? "active" : "",
              item.href === "/kontakt" ? "nav-contact-link" : ""
            ]
              .filter(Boolean)
              .join(" ")}
            href={item.href}
            key={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
