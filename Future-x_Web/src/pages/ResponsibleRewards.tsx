import PolicyPage from "../components/PolicyPage";
export default function ResponsibleRewards() { return <PolicyPage title="Responsible Rewards Policy" description="Principles for fair participation, X-Coin credit and eligible reward redemption." path="/responsible-rewards" sections={[
  { title: "Purpose of X-Coins", content: <p>X-Coins recognise eligible participation within Future-X. They are not wages, guaranteed income, legal tender, a security, cryptocurrency or a bank balance.</p> },
  { title: "Transparent criteria", content: <p>Activities should show important eligibility, completion, limit and reward information before participation. A displayed reward remains subject to successful completion and verification.</p> },
  { title: "No purchase pressure", content: <p>Affiliate offers are optional. Users should not make a purchase primarily to chase a reward and should always review the third party's full terms and suitability.</p> },
  { title: "Fair use", content: <p>Automation, duplicate accounts, false information, manipulated referrals and activity abuse undermine other users and may lead to reversal or account action.</p> },
  { title: "Redemption review", content: <p>Available reward options may have minimum balances, frequency limits, identity checks, location restrictions and supply constraints. Reviews help prevent errors and fraud.</p> },
  { title: "Healthy participation", content: <p>Take regular breaks, avoid excessive screen time and do not spend money or time you cannot afford to lose. Future-X should be used as an optional engagement platform, not as a livelihood.</p> },
]} />; }
