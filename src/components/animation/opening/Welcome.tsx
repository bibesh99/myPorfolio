"use client"
import React, { useEffect, useState } from "react";
import "./Welcome.css";


const Welcome= () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);


  useEffect(() => {
    const welcomeCircle = document.querySelector(".welcome_circle");

    const handleAnimationEnd = () => {
      setTypingStarted(true);
    };

    welcomeCircle?.addEventListener("animationend", handleAnimationEnd);

    return () => {
      welcomeCircle?.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className={`welcomeText ${typingStarted ? "typing-started" : ""}`}>
        <p className="">Welcome To My Portfolio !</p>
      </div>
    </div>
  );
};

export default Welcome;
