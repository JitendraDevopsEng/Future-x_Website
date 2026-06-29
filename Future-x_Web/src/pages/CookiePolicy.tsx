import PolicyPage from "../components/PolicyPage";
export default function CookiePolicy() { return <PolicyPage title="Cookie Policy" description="How the Future-X website uses cookies and similar storage." path="/cookie-policy" sections={[
  { title: "Current website use", content: <p>The Future-X website may use essential browser storage needed for security, navigation and user preferences. We do not use non-essential advertising cookies on this website without an appropriate choice mechanism.</p> },
  { title: "Analytics and embedded services", content: <p>If analytics, media or other third-party services are introduced, they may set cookies or similar identifiers. We will update this policy and provide consent controls where required.</p> },
  { title: "Your controls", content: <p>You can review, block or delete cookies through browser settings. Blocking essential storage may affect site functionality. Android app data controls are described separately in the Privacy Policy.</p> },
  { title: "Updates", content: <p>We will revise this policy if our use of cookies or similar technologies changes.</p> },
]} />; }
