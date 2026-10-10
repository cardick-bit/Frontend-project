import './App.css'
import Save from './comp/save'
import StructCard from './comp/structcard'

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    role: "Frontend Developer",
    experience: "2+ years",
    type: "Full-time",
    location: "Mountain View, CA",
    annualPay: "$120,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Backend Engineer",
    experience: "3+ years",
    type: "Full-time",
    location: "Redmond, WA",
    annualPay: "$130,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Cloud Solutions Architect",
    experience: "5+ years",
    type: "Full-time",
    location: "Seattle, WA",
    annualPay: "$150,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    role: "React Developer",
    experience: "1+ years",
    type: "Internship",
    location: "Menlo Park, CA",
    annualPay: "$60,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    role: "iOS Engineer",
    experience: "2+ years",
    type: "Full-time",
    location: "Cupertino, CA",
    annualPay: "$140,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    role: "UI/UX Designer",
    experience: "3+ years",
    type: "Full-time",
    location: "Los Gatos, CA",
    annualPay: "$125,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    role: "Software Engineer",
    experience: "2+ years",
    type: "Full-time",
    location: "Austin, TX",
    annualPay: "$135,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_Systems_logo_and_wordmark.svg",
    role: "Web Developer",
    experience: "1+ years",
    type: "Part-time",
    location: "San Jose, CA",
    annualPay: "$70,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    role: "Full Stack Engineer",
    experience: "4+ years",
    type: "Full-time",
    location: "Santa Clara, CA",
    annualPay: "$145,000"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg",
    role: "AI Engineer",
    experience: "3+ years",
    type: "Full-time",
    location: "Santa Clara, CA",
    annualPay: "$160,000"
  }
];

  return (
   
      <div className="job-list">
      {jobOpenings.map(function(elem,index){
return <StructCard
    key={index}  //gives unique number to each element in array
    brandLogo={elem.brandLogo}
    role={elem.role}
    experience={elem.experience}
    type={elem.type}
    location={elem.location}
    annualPay={elem.annualPay}
  />
      })}
      </div>
   
  )
}

export default App