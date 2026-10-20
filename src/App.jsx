import { useState } from 'react'
import {GraduationCap ,Dot, CalendarCheck, CodeXml, ChartNoAxesColumnIncreasing, ArrowRight, Users, Play}from "lucide-react";
import heropic from "./assets/hero-pic.jpeg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <section id="container">
      <div className="top">
        <div className="icons">
          <GraduationCap className="cap" size={20} color="#7448ED"/>
          <span>Learn</span>
          <Dot className="dot"  size={20} color="#7448ED"/>
          <span>Practice</span>
          <Dot className="dot"  size={20} color="#7448ED"/>
          <span>Grow</span>
        </div>
        <div className="content">
          <h1>Your Tasks,
            <span className="title">Your Progress</span>
            </h1>
            <p>Complete your daily tasks, build real projects, track<br/>
             your progress and get one step closer to get your dream<br/>
            career.</p>
            <div className="icons2">
            <div className="icon-box">
            <CalendarCheck className="check" size={30} color="#4169F5"/>
             <p className="icons-p1">Daily Tasks</p>
             <p className="icons-p2">Stay consistent <br/>
             and improve</p>
             </div>
              <div className="icon-box">
              <CodeXml className ="code"size={30} color="#B44DE8"/>
              <p className="icons-p1">Hands-on Practice</p>
             <p className="icons-p2">Build real world <br/>
             Projects</p>
             </div>
              <div className="icon-box">
              <ChartNoAxesColumnIncreasing className="bar" size={30} color="#00BFA5"/>
             <p className="icons-p1">Track Progress</p>
             <p className="icons-p2">See Your Growth<br/>
             Over time</p> 
             </div>
              <div className="icon-box">
            <Users className="community" size={30} color="#B44DE8"/>
            <p className="icons-p1">Community Support</p>
             <p className="icons-p2">Learn together,<br/>
            move forward
            </p>
            </div>
            </div>
            <div className="bottom">
              {/* <div className="watch-btn"> */}
              <button className='btn'>View Your Tasks <ArrowRight size={20} color="white"/></button>
                <div className="play-btn">
            <Play className="play" size={20} color="#3563E9"/>
            <span className="gap"> Watch How it Works</span>
             </div>
             {/* </div> */}
          </div>
        </div>
      </div>
      <div className="right-image">
        <img className="right-img" src={heropic} alt="student"/>
      </div>
     </section>
  )
}
export default App
