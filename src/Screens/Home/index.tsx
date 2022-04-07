import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";
export default function Index() {
  return (
    <div className="mainContainer">
      <div className="firstHalf">
     
          <p className="greeting">WELCOME TO MY WORLD</p>
          <p className="helloSection">
            Hello, I am <span className="nameSpan">Alok Gahlot</span>
          </p>
          <p className="autoTypingSection">
            <Typewriter
              words={["React Native Developer", "At Appinventiv"]}
              loop={Infinity}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
       
        </div>

       <img  alt="image" src={require('./laptop.jpg')} className='image' />

    </div>
  );
}
