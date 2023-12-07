import Home from './Components/Home/Home-Page';

const LISTS = [
  {
    id: 1,
    value: "FREE",
    price: "$0/month",
    user: "✔ Single User",
    storage: "✔ 50GB Storage",
    public_projects: "✔ Unlimited Public Projects",
    access: "✔ Community Access",
    private_projects: "✖ Unlimited Private Projects",
    support: "✖ Dedicated Phone Support",
    domain: "✖ Free SubDomain",
    report: "✖ Monthly Status Reports"
  },
  {
    id: 2,
    value: "PLUS",
    price: "$9/month",
    user: "✔ 5 Users",
    storage: "✔ 50GB Storage",
    public_projects: "✔ Unlimited Public Projects",
    access: "✔ Community Access",
    private_projects: "✔ Unlimited Private Projects",
    support: "✔ Dedicated Phone Support",
    domain: "✔ Free SubDomain",
    report: "✖ Monthly Status Reports"
  },
  {
    id: 3,
    value: "PRO",
    price: "$49/month",
    user: "✔ Unlimited Users",
    storage: "✔ 50GB Storage",
    public_projects: "✔ Unlimited Public Projects",
    access: "✔ Community Access",
    private_projects: "✔ Unlimited Private Projects",
    support: "✔ Dedicated Phone Support",
    domain: "✔ Free SubDomain",
    report: "✔ Monthly Status Reports"
  },
]
function App() {
  return (
    <div className="App">
     <Home lists={LISTS} />
    </div>
  );
};

export default App;
