import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Affiliate", "/affiliate-disclosure"],
  ["Support", "/support"],
  ["FAQ", "/faq"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="Future-X home">
          <img src="/logo192.png" alt="" width="42" height="42" />
          <span>FUTURE<span>-X</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>
          ))}
        </nav>
        <Link className="button button-small desktop-cta" to="/#download">Get the app</Link>
        <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => <NavLink key={href} to={href} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <Link className="button" to="/#download" onClick={() => setOpen(false)}>Get the app</Link>
        </nav>
      )}
    </header>
  );
}
