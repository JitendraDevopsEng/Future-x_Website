import PolicyPage from "../components/PolicyPage";
export default function RefundPolicy() { return <PolicyPage title="Refund Policy" description="Refund information for Future-X and third-party affiliate transactions." path="/refund-policy" sections={[
  { title: "Future-X services", content: <p>Future-X currently does not sell paid subscriptions or digital items through this website. X-Coins are promotional points and are not purchased currency. Therefore, there is ordinarily no website payment to refund.</p> },
  { title: "Affiliate purchases", content: <p>Purchases made through an affiliate link are transactions with the named third-party seller. That seller's cancellation, return and refund policy applies. Contact the seller using the order confirmation or its support channel.</p> },
  { title: "Unauthorised or incorrect charges", content: <p>If you see a charge labelled as Future-X that you do not recognise, contact us promptly with the date, amount and non-sensitive transaction reference. Do not email full card numbers, banking passwords or OTPs.</p> },
  { title: "Policy changes", content: <p>If Future-X introduces a paid service, its price, billing terms, cancellation process and applicable refund rights will be shown before purchase and this policy will be updated.</p> },
]} />; }
