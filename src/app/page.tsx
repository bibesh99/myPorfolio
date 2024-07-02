"use client";

import React, { useState, useEffect } from "react";
import Welcome from "../components/animation/opening/Welcome";
import { useRouter } from "next/navigation";

import "./page.css";
export default function Home() {
  const router = useRouter();

  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    borderRadius: "100%",
    color: "white",
    height: "23.4rem",
    width: "23.4rem",
    backgroundColor: "black",
    border: "none",
    transition: "all 0.3s ease",
  });

  const [welcomeText, setWelcomeText] = useState({
    height: "100vh",
    transform: "translateY(0)",
    opacity: 1,
    transition: "all 0.5s ease",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonEnabled(true);
    }, 3000); // Enable the button after 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const expandButton = () => {
    if (!buttonEnabled) return; // Prevent button click if not enabled

    setButtonStyle({
      borderRadius: "0",
      height: "100vh",
      width: "100%",
      backgroundColor: "black",
      color: "white",
      border: "none",
      transition: "all 0.3s ease",
    });

    setTimeout(() => {
      setWelcomeText({
        height: "100vh",
        transform: "translateY(-100%)",
        opacity: 0,
        transition: "all 0.5s ease",
      });
    }, 300);

    setTimeout(() => {
      router.push("/introduction");
    }, 800);
  };

  return (
    <main className="flex flex-col">
      <div className="h-screen flex justify-center items-center bg-neutral-950">
        <div className="h-screen w-screen flex items-center justify-center">
          <button
            style={buttonStyle}
            onClick={expandButton}
            className={`flex justify-center items-center welcome_circle md:size-96 rounded-full ${buttonEnabled ? '' : 'disabled'}`}
            disabled={!buttonEnabled} // Disabling the button until it's enabled
          >
            <div
              className="flex justify-center items-center md:text-xl"
              style={welcomeText}
            >
              <Welcome />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}