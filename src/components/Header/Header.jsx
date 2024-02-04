import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar/>
      <h1>Hello!</h1>
      </div>
      <div className="quote"></div>
      <p className="course-name">Quote of the day: Labore dolor pariatur. Veniam omnis saepe quos neque sunt soluta</p>
      <div className="Chatbot">
        <p className="you">You:</p>
        <p className="text">Cough, shortness of breath, high temperature, chest pain, aching body, fatigue</p>
        <p className="healio">Healio:</p>
        <p className="response">Likely bacterial pneumonia. Drugs: Amoxicillin suspension (1500 mg daily for 5 days), 
        Acetaminophen (500 mg as needed). Total cost: $50.79 for 100 ml Amoxicillin, 100 tablets Acetaminophen</p>        
      </div>
      <div className="UpcomingEvents"> 
      <p className = "title1">Upcoming Events:</p>
      <ul>
        <li>National Health Day</li>
        <li>National Obesity Day</li>
        <li>National Cancer Day</li>
      </ul>
      </div>
      <div classname="InputBar">d</div>
      <div className="RapidHealthcare"> 
      <p className = "title2">Rapid Healthcare:</p>
      <ul>
        <li>Patrick Smith</li>
        <li>John Baker</li>
        <li>Maxwell Glenn</li>
      </ul>
      </div>
    </header>
  )
}

export default Header