import React from 'react';
// import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
//This page in a summary of what the app is about and explanation of the survey
function About() {

//   function handleClick() {
//     <route>
  
// </route>
//   }
  return(
    <div>
      <h1>Welcome to Division of Labor </h1>
      <Link to="/home" >Get started</Link>
      {/* <Button onClick={handleClick}>Button Test</Button> */}
    </div>
    )
 
}

export default About;