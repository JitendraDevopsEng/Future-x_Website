import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Support = lazy(() => import("./pages/Support"));
const Faq = lazy(() => import("./pages/Faq"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const DeleteAccount = lazy(() => import("./pages/DeleteAccount"));
const AffiliateDisclosure = lazy(() => import("./pages/AffiliateDisclosure"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const CommunityGuidelines = lazy(() => import("./pages/CommunityGuidelines"));
const ResponsibleRewards = lazy(() => import("./pages/ResponsibleRewards"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

function NotFound() { return <main id="main-content" className="page-main"><div className="page-hero"><div className="container narrow"><span className="eyebrow">404</span><h1>Page not found</h1><p>The page may have moved. Use the navigation to continue.</p></div></div></main>; }

export default function App() {
  return <Suspense fallback={<div className="route-loading" role="status">Loading Future-X…</div>}><Routes><Route element={<SiteLayout />}><Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="contact" element={<Contact />} /><Route path="support" element={<Support />} /><Route path="faq" element={<Faq />} /><Route path="privacy-policy" element={<Privacy />} /><Route path="terms-and-conditions" element={<Terms />} /><Route path="delete-account" element={<DeleteAccount />} /><Route path="affiliate-disclosure" element={<AffiliateDisclosure />} /><Route path="refund-policy" element={<RefundPolicy />} /><Route path="disclaimer" element={<Disclaimer />} /><Route path="community-guidelines" element={<CommunityGuidelines />} /><Route path="responsible-rewards" element={<ResponsibleRewards />} /><Route path="cookie-policy" element={<CookiePolicy />} /><Route path="*" element={<NotFound />} /></Route></Routes></Suspense>;
}
