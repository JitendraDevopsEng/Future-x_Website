import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const groups = [
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Support", "/support"], ["FAQ", "/faq"]] },
  { title: "Trust", links: [["Privacy policy", "/privacy-policy"], ["Terms", "/terms-and-conditions"], ["Delete account", "/delete-account"], ["Community guidelines", "/community-guidelines"]] },
  { title: "Policies", links: [["Affiliate disclosure", "/affiliate-disclosure"], ["Responsible rewards", "/responsible-rewards"], ["Refund policy", "/refund-policy"], ["Disclaimer", "/disclaimer"], ["Cookie policy", "/cookie-policy"]] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-intro">
          <Link className="brand" to="/"><img src="/logo192.png" alt="" width="44" height="44" /><span>FUTURE<span>-X</span></span></Link>
          <p>A reward-based engagement platform for games, learning, surveys, optional affiliate offers and eligible activities.</p>
          <a className="contact-link" href="mailto:admin@future-x.co.in"><Mail size={17} /> admin@future-x.co.in</a>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
        {groups.map(group => <div key={group.title} className="footer-group"><h2>{group.title}</h2>{group.links.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</div>)}
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Future-X. All rights reserved.</span><span>Made in India · future-x.co.in</span></div>
    </footer>
  );
}
