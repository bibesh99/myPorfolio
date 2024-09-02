"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import { useInView } from 'react-intersection-observer';

import './page.css';
import 'swiper/css';

import Skills from '@/components/Skills/Skills';
import Interest from '@/components/interest/Interest';
import IntroductionSwiper from '@/components/IntroductionSwiper/IntroductionSwiper';
import Socials from '@/components/Socials/Socials';
import Projects from '@/components/projects/Projects';
import { HoverCard } from '@radix-ui/react-hover-card';
import { HoverCardTrigger } from '@/components/ui/hover-card';

import { PiStarThin } from 'react-icons/pi';
import { FaHeart } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { PiHandsPrayingLight } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { MdPersonPin } from "react-icons/md";


const Introduction = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [isTypewriting, setTypewriting] = useState(true);
  const [isTypewriting1, setTypewriting1] = useState(true);
  const [isTypewriting2, setTypewriting2] = useState(true);

  const [translation, setTranslation] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);


  const [showFourthSection, setShowFourthSection] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleNavVisibility = () => {
      console.log("Scroll event fired");
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
        console.log("Scrolled past threshold:", window.scrollY);
      } else {
        setIsScrolled(false);
      }
    };
    

    window.addEventListener("scroll", handleNavVisibility);

    return () => {
      window.removeEventListener("scroll", handleNavVisibility);
    };
  }, []);


  const [hereSectionRef, setHeroSectionRef] =useState<HTMLElement | null>(null);
  const [introductionSectionRef, setIntroductionSectionRef] =useState<HTMLElement | null>(null);
  const [skillsRef, setSkillsRef] =useState<HTMLElement | null>(null);
  const [interestRef, setInterestRef] =useState<HTMLElement | null>(null);
  const [projectRef,setProjectRef] = useState<HTMLElement | null>(null);
  const [socialRef,setSocialRef] = useState<HTMLElement | null>(null);

  const { ref: fourthSectionRef, inView: fourthSectionIsVisible } = useInView({
    threshold: 0.1
  });


  const { ref: refHeroSection, inView: inViewHeroSection } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setHeroSectionRef(entry.target);
      }
    },
  });

  
  const { ref: introTypewriterRef, inView: introTypeWriterIsVisible, entry } = useInView({
    threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setIntroductionSectionRef(entry.target);
      }
    },
  });




  const scrollToSection = (ref: HTMLElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };


  
  const { ref: refSkills, inView: inViewSkills } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setSkillsRef(entry.target);
      }

    },
  });

  const { ref: refInterest, inView: inViewInterest } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setInterestRef(entry.target);
      }

    },
  });

  const { ref: refProject, inView: inViewProject } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setProjectRef(entry.target);
      }

    },
  });

  
  const { ref: refSoicals, inView: inViewSoicals } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setSocialRef(entry.target);
      }
    },
  });


  useEffect(() => {
    const observerForSkillsDiv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showSkillsScection');
        } else {
          entry.target.classList.remove('showSkillsScection');
        }
      });
    });

    const hiddenDivs = document.querySelectorAll('.hideSkillsSection');
    hiddenDivs.forEach((el) => observerForSkillsDiv.observe(el));

    return () => {
      hiddenDivs.forEach((el) => observerForSkillsDiv.unobserve(el));
    };
  }, []);


  useEffect(() => {
    setIsTransitioning(true);
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      document.body.classList.remove('no-scroll');
    }, 1000);

    const typewritingTimer = setTimeout(() => {
      setTypewriting(false);
    }, 800);

    const typewritingTimer1 = setTimeout(() => {
      setTypewriting1(false);
    }, 2500);

    const typewritingTimer2 = setTimeout(() => {
      setTypewriting2(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(typewritingTimer);
      clearTimeout(typewritingTimer1);
      clearTimeout(typewritingTimer2);

      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(()=>{
    if(fourthSectionIsVisible){
      setShowFourthSection(true);
    }else{
      setShowFourthSection(false);
    }
  },[fourthSectionIsVisible])

  useEffect(() => {
    if (entry) {
      const maxTranslation = window.innerWidth * 0.6;
      const newTranslation = entry.intersectionRatio === 0 ? 0 : Math.min(entry.intersectionRatio * maxTranslation, maxTranslation);

      if (newTranslation < 200) {
        setResetAnimation(true);

      } else {
        setResetAnimation(false);
  
      }

      setTranslation(newTranslation);
    }
  }, [entry]);

  useEffect(() => {
    const handleScroll = () => {
    
      if (!introTypeWriterIsVisible && translation > 0) {
        setResetAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [introTypeWriterIsVisible, translation]);




  

  return (
<div className="w-full h-full overflow-x-hidden snap snap-y snap-mandatory overflow-auto scroll-smooth bg-neutral-900">
  
  <div ref={refHeroSection} className="snap-start h-screen">
    <motion.div
      className="relative flex flex-col h-screen bg-neutral-950 text-white"
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-cover bg-center bg-neutral-900">
        <div style={{ transform: `translateX(-${resetAnimation ? 0 : translation}px)` }} className="flex flex-col space-y-4 mt-24 p-16 text-left introTypeWriter">
          {!isTypewriting && (
            <div className="md:text-4xl font-bold text-xl">
              <Typewriter
                words={["Hi Everyone!"]}
                typeSpeed={120}
                delaySpeed={0}
              />
            </div>
          )}
          {!isTypewriting1 && (
            <div className="md:text-3xl font-semibold text-xl">
              <Typewriter
                words={["I am Bibesh Gurung, Currently A Web Developer."]}
                typeSpeed={50}
                delaySpeed={0}
              />
            </div>
          )}
          {!isTypewriting2 && (
            <div className="md:text-3xl font-semibold">
              <Typewriter
                words={["And This Is My Intro!"]}
                typeSpeed={120}
                delaySpeed={0}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  </div>

  <div ref={introTypewriterRef} className="bg-neutral-900 w-full h-screen snap-start mt-2">
    <IntroductionSwiper />
  </div>

  <div ref={refSkills} className="bg-neutral-900 w-full h-screen snap-start mt-2">
    <Skills />
  </div>

  <div ref={refInterest} className="bg-neutral-900 w-full h-screen snap-start mt-2">
    <Interest />
  </div>

  <div ref={refProject} className="bg-neutral-900 w-full h-screen snap-start mt-2">
    <Projects />
  </div>

  <div ref={refSoicals} className="bg-neutral-900 w-full h-screen snap-start mt-2">
    <Socials />
  </div>

  <div className="flex fixed bottom-0 right-0 mb-16 mr-7 rounded-lg  onScreenPageNav z-50 ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -100 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={`fixed space-y-3 text-left flex items-center justify-center flex-col bottom-0 right-0 mb-16 px-3 py-4 text-black text-lg bg-black bg-opacity-40 mr-5 rounded-lg transition-opacity duration-300 
           ${isScrolled ? "opacity-100 text-lg" : "opacity-0"}`}
        >
            <button
            className={`md:text-lg ${
              inViewHeroSection ? "scale-125 text-blue-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(hereSectionRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <PiHandsPrayingLight  size={24} />
              </HoverCardTrigger>
            </HoverCard>
          </button>

          <button
            className={`md:text-lg ${
              introTypeWriterIsVisible  ? "scale-125 text-red-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(introductionSectionRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <MdWavingHand size={24} />
              </HoverCardTrigger>
            </HoverCard>
          </button>

          <button
            className={`md:text-lg ${
              inViewSkills
                ? "scale-125 text-yellow-400 font-semibold"
                : ""
            }`}
            onClick={() => scrollToSection(skillsRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <PiStarThin size={24} />
              </HoverCardTrigger>
            </HoverCard>
          </button>

          <button
            className={`md:text-lg ${
              inViewInterest ? "scale-125 text-rose-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(interestRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <FaHeart size={24} />
              </HoverCardTrigger>
            </HoverCard>
          </button>

          <button
            className={`md:text-lg ${
              inViewProject
                ? "scale-125 text-sky-400 font-semibold"
                : ""
            }`}
            onClick={() => scrollToSection(projectRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <GrWorkshop size={24} />
              </HoverCardTrigger>
            </HoverCard>
          </button>
          <button
            className={`md:text-lg ${
              inViewSoicals ? "scale-125 text-green-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(socialRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <MdPersonPin   size={24} />
              </HoverCardTrigger>
            </HoverCard>
            </button>
        </motion.div>
      </div>
</div>

  );
};

export default Introduction;
