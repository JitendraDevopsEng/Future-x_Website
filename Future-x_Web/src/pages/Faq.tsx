import Seo from "../components/Seo";

const faqs = [
  ["Account", "How do I create or secure my account?", "Follow the registration and verification steps in the app. Use accurate information, keep OTPs private and do not maintain duplicate accounts."],
  ["X-Coins", "Are X-Coins money or cryptocurrency?", "No. X-Coins are platform reward points. They are not legal tender, a bank deposit, an investment or a cryptocurrency."],
  ["Rewards", "Are X-Coins or rewards guaranteed?", "No. Credit and redemption depend on eligibility, verification, limits, availability and the rules shown for each activity."],
  ["Redemption", "How do I redeem an available reward?", "Use the in-app redemption flow after meeting the displayed balance and eligibility conditions. Requests may be reviewed for fraud prevention."],
  ["Affiliate", "What is an affiliate offer?", "It is an optional third-party product or service campaign. Future-X may receive a commission from eligible purchases at no extra charge set by us."],
  ["Affiliate", "Must I purchase an affiliate product?", "No. Affiliate offers are optional. Review the seller's price, terms, return policy and suitability before purchasing."],
  ["Games", "Do games always award X-Coins?", "No. Only eligible games or events display a reward, and their rules may include completion, limits or verification requirements."],
  ["Learning", "How do learning activities work?", "Available modules may award X-Coins after required lessons, checks or other published completion conditions are met."],
  ["Surveys", "Why can a survey end before completion?", "Third-party survey providers may screen participants for research criteria. Qualification and reward conditions vary by survey."],
  ["Payments", "Does Future-X charge users to earn rewards?", "Core participation rules are shown in the app. Never send money to an individual claiming they can unlock or guarantee X-Coins."],
  ["Referral", "When is a referral eligible?", "Referral credit is issued only when the referred user and required actions satisfy the current referral terms."],
  ["Security", "What should I do about suspicious activity?", "Stop interacting, preserve evidence and contact admin@future-x.co.in. Never share passwords or one-time codes."],
  ["Privacy", "What data does Future-X use?", "See the Privacy Policy for categories, purposes, service providers, retention and your choices."],
  ["Delete account", "Can I delete my account and data?", "Yes. Use the in-app deletion option when available or follow the request process on our Delete Account page."],
  ["Google Play", "Is the Android app available on Google Play?", "The app is currently being prepared for testing and review. This website will be updated when an official listing is available."],
  ["Eligibility", "Who may use Future-X?", "Users must meet the age, location and other eligibility rules in the Terms and in each activity. Availability may vary."],
];

export default function Faq() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([, q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }; return <main id="main-content" className="page-main"><Seo title="Future-X Frequently Asked Questions" description="Answers about Future-X accounts, X-Coins, rewards, affiliate offers, games, surveys, privacy and Android availability." path="/faq" schema={schema} /><header className="page-hero compact"><div className="container narrow"><span className="eyebrow">Help centre</span><h1>Frequently asked questions</h1><p>Clear answers about participation, eligibility, privacy and rewards.</p></div></header><section className="section container narrow faq-list">{faqs.map(([category, question, answer]) => <details key={question}><summary><span>{category}</span>{question}</summary><p>{answer}</p></details>)}</section></main>; }
