import { ArrowRight, BadgeCheck, BookOpen, Gamepad2, Gift, GraduationCap, Handshake, ListChecks, LockKeyhole, ShieldCheck, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const features = [
  { icon: Gamepad2, title: "Play games", text: "Take part in eligible skill and entertainment activities available in the app." },
  { icon: GraduationCap, title: "Learn skills", text: "Complete learning modules designed to encourage useful, consistent progress." },
  { icon: ListChecks, title: "Surveys & tasks", text: "Choose eligible surveys and reward tasks with clear participation terms." },
  { icon: Handshake, title: "Affiliate offers", text: "Discover optional third-party offers. Review each provider's terms before purchase." },
  { icon: Users, title: "Referral program", text: "Invite eligible users and receive X-Coins when the published conditions are met." },
  { icon: Gift, title: "Redeem rewards", text: "Use eligible X-Coins for available rewards, subject to limits and verification." },
];

const steps = [
  ["01", "Create your account", "Register securely and review the platform rules."],
  ["02", "Choose an activity", "See requirements before starting a game, lesson, survey or offer."],
  ["03", "Complete eligibility checks", "Qualifying activity is verified before X-Coins are credited."],
  ["04", "Request an available reward", "Redemption depends on balance, eligibility and current reward availability."],
];

const previews = ["home.png", "play.png", "spin.png", "wallet.png"];

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Future-X", url: "https://future-x.co.in", logo: "https://future-x.co.in/logo512.png", email: "admin@future-x.co.in", address: { "@type": "PostalAddress", addressLocality: "Mathura", addressRegion: "Uttar Pradesh", addressCountry: "IN" } };
  return <main id="main-content" className="home-main">
    <Seo title="Future-X | Play, Learn and Earn X-Coins" description="Future-X is a reward-based engagement platform for games, learning, surveys, optional affiliate offers and eligible tasks." schema={schema} />

    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="eyebrow"><BadgeCheck size={15} /> Built for responsible rewards</span>
          <h1>Play. Learn. Engage. <span>Earn X-Coins.</span></h1>
          <p>Future-X brings games, learning, surveys, reward tasks and optional affiliate offers into one transparent platform.</p>
          <div className="hero-actions"><a className="button" href="#download">Get launch updates <ArrowRight /></a><Link className="button button-secondary" to="/about">Explore Future-X</Link></div>
          <div className="trust-row"><span><ShieldCheck /> Clear eligibility rules</span><span><LockKeyhole /> Privacy controls</span><span><BadgeCheck /> No guaranteed income claims</span></div>
        </div>
        <div className="hero-device" aria-label="Future-X app preview">
          <div className="device-frame"><img src="/screenshots/home.png" alt="Future-X application home screen" width="360" height="800" fetchPriority="high" /></div>
          <div className="device-note"><Smartphone /><div><strong>Android first</strong><span>Public launch coming soon</span></div></div>
        </div>
      </div>
    </section>

    <section className="trust-band"><div className="container trust-grid"><div><strong>6</strong><span>engagement categories</span></div><div><strong>1</strong><span>clear X-Coin system</span></div><div><strong>100%</strong><span>optional affiliate offers</span></div><div><strong>24–48h</strong><span>usual support response</span></div></div></section>

    <section className="section container" id="features"><div className="section-heading"><span className="eyebrow">One responsible ecosystem</span><h2>Useful ways to participate</h2><p>Every activity has its own availability, completion criteria and reward conditions.</p></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section section-dark" id="how-it-works"><div className="container"><div className="section-heading left"><span className="eyebrow">How it works</span><h2>Participation with clear checkpoints</h2></div><div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section container" id="app-preview"><div className="section-heading"><span className="eyebrow">App preview</span><h2>Designed for quick, informed choices</h2><p>Balances, activities and eligibility information stay easy to find.</p></div><div className="screenshots">{previews.map((name, index) => <figure key={name}><img src={`/screenshots/${name}`} alt={`Future-X app screen ${index + 1}`} width="300" height="650" loading={index === 0 ? "eager" : "lazy"} /><figcaption>{["Home", "Games", "Daily activities", "Rewards wallet"][index]}</figcaption></figure>)}</div></section>

    <section className="section affiliate-band"><div className="container split"><div><span className="eyebrow"><Handshake size={15} /> Optional affiliate campaigns</span><h2>Discover offers without pressure</h2><p>Future-X may receive a commission when an eligible purchase is made through an affiliate link. Offers are optional, third-party terms apply, and Future-X does not manufacture or directly warrant third-party products.</p><Link className="text-link" to="/affiliate-disclosure">Read the affiliate disclosure <ArrowRight /></Link></div><div className="principles"><div><BadgeCheck /><span><strong>Clearly labelled</strong>Affiliate content is identified before you engage.</span></div><div><ShieldCheck /><span><strong>Your choice</strong>No purchase is required to use core platform features.</span></div><div><BookOpen /><span><strong>Review first</strong>Check price, returns and provider terms before buying.</span></div></div></div></section>

    <section className="section container" id="roadmap"><div className="section-heading"><span className="eyebrow">Roadmap</span><h2>A measured path to public launch</h2></div><div className="roadmap"><article className="done"><span>Completed</span><h3>Platform foundation</h3><p>Brand, trust centre, core website and initial application experience.</p></article><article className="current"><span>In progress</span><h3>Android testing</h3><p>Compatibility, security, closed testing and Play Console readiness.</p></article><article><span>Planned</span><h3>Public release</h3><p>Google Play availability after testing, policy review and approval.</p></article></div></section>

    <section className="section faq-preview"><div className="container"><div className="section-heading"><span className="eyebrow">Common questions</span><h2>Know the rules before you begin</h2></div><div className="faq-grid"><article><h3>Are rewards guaranteed?</h3><p>No. X-Coins and rewards depend on activity eligibility, verification, limits and availability.</p></article><article><h3>Are affiliate offers required?</h3><p>No. Affiliate offers are optional and third-party provider terms apply.</p></article><article><h3>Is Future-X on Google Play?</h3><p>Not yet. The Android app is being prepared for testing and review.</p></article></div><Link className="button button-secondary" to="/faq">View all FAQs</Link></div></section>

    <section className="download-section" id="download"><div className="container download-inner"><div><span className="eyebrow">Android launch</span><h2>Future-X for Android is coming soon</h2><p>Version 1.0.0 is being prepared for Google Play testing. The planned minimum supported version is Android 7.0. Use only the official Play Store listing when it becomes available.</p></div><div className="download-status"><Smartphone /><div><strong>Google Play</strong><span>Closed testing preparation</span></div></div></div></section>
  </main>;
}
