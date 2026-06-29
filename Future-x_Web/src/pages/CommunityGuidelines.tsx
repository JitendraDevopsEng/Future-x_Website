import PolicyPage from "../components/PolicyPage";
export default function CommunityGuidelines() { return <PolicyPage title="Community Guidelines" description="Standards that help keep Future-X fair, respectful and secure." path="/community-guidelines" sections={[
  { title: "Be respectful", content: <p>Do not harass, threaten, impersonate, discriminate against or exploit another person. Do not share private information without permission.</p> },
  { title: "Participate honestly", content: <p>Use one genuine account, provide accurate eligibility information and complete activities yourself. Bots, scripts, emulators, collusion and manipulation are prohibited.</p> },
  { title: "Keep content lawful", content: <p>Do not upload or share illegal, hateful, sexually exploitative, violent, deceptive or infringing content. Never use Future-X to promote scams or unsafe products.</p> },
  { title: "Protect the platform", content: <p>Do not probe security, distribute malware, overload services, bypass controls or attempt unauthorised access. Report suspected vulnerabilities privately to support.</p> },
  { title: "Enforcement", content: <p>We may remove content, reverse ineligible X-Coins, limit features or suspend accounts. Serious matters may be reported to relevant authorities. Users may contact support to request review.</p> },
  { title: "Report concerns", content: <p>Send the account, activity, date and supporting evidence to <a href="mailto:admin@future-x.co.in?subject=Safety%20Report">admin@future-x.co.in</a>. Do not publicly share sensitive evidence.</p> },
]} />; }
