import PolicyPage from "../components/PolicyPage";
export default function Disclaimer() { return <PolicyPage title="Disclaimer" description="Important limits and disclosures about Future-X activities, X-Coins and third-party content." path="/disclaimer" sections={[
  { title: "No income or investment promise", content: <p>Future-X is an engagement and rewards platform. We do not promise employment, income, profit, financial return or any specific reward. X-Coins are platform reward points, not money, cryptocurrency or an investment.</p> },
  { title: "Activity results", content: <p>Eligibility, completion, X-Coin credit and available rewards vary by activity, user, location, verification, limits and availability. Past participation does not guarantee future results.</p> },
  { title: "Information", content: <p>Learning and informational content is general in nature and is not professional, financial, legal, medical or investment advice.</p> },
  { title: "Third parties", content: <p>References, ads, surveys and affiliate links do not make Future-X the manufacturer or seller. Independent providers control their content, products, pricing and policies. Review their terms before engaging.</p> },
  { title: "Availability", content: <p>We work to keep information accurate and services reliable but do not guarantee uninterrupted access or that every item is complete, current or error-free.</p> },
]} />; }
