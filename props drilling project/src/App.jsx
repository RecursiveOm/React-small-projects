import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './Card';



const App = () =>{
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 month ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Hybrid",
    tag2: "Entry Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hour",
    location: "San Francisco, USA"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
          return <Card/>
      })}
      
    </div>
  )
}

export default App