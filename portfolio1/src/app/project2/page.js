'use client'
import React, {useState, useEffect, useRef} from 'react';
import ProjectExplain from '../components/ProjectExplain';
import Header from '../components/Header'
import Head from 'next/head';



import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
export default function Home() {

  const [isReadMore, setIsReadMore] = useState(false)
  const [carouselPage, setCarouselPage] = useState(0)
  const carouselArr = new Array(3).fill(0);

  
  const animationRef = useRef(null)
  
  useEffect(()=>{


    if (animationRef.current) {

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If the element is in view, add the 'visible' class
            console.log('hihih')
            entry.target.style.opacity = 1;
        });
      }, []);
  
      observer.observe(animationRef.current)
    }
  })
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward_ios" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0&icon_names=arrow_forward_ios" />
      </Head>


      <div className="text1-wrapper ">
            <div className='text-title' id='title'>NoNNNrwegian National</div>
            <div className='text-title'>Opera and Ballet</div>
            <div className='text-title color-grey'>Giving waterfront space back to the public</div>
            <div className='text-normal text-margin'>2000–2008</div>
            <div className='text-normal text-margin'>Architecture, Art, Landscape Architecture, Interior Architecture</div>
      </div>

      <div className="first-picture-4"></div>


        <ProjectExplain ></ProjectExplain>

        <div className="second-photo-container ">
          <div id="photo7"></div>
          <div id="photo8"></div>
        </div>


        <div className="text-section-1">
          <div className="text-section-title ">Textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>


        <div className="FiveEm"></div>
        <div className="text-section-1">
          <div className="text-section-title">Textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>


        <div className="first-picture-3"></div>

        
        <div className="FiveEm"></div>
        <div className="text-section-1">
          <div className="text-section-title">Textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>
        <div className="text-section-1">
          <div className="text-section-title">Textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>


        <div className="second-photo-container ">
          <div id="photo9"></div>
          <div id="photo10"></div>
        </div>


        <div className="text-section-1">
          <div className="text-section-title ">Textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>
        <div className="text-section-1">
          <div className="text-section-title "></div>
          <div className="text-section-text">
            <div className="footer-title">Reach me</div>
            <a href="">LinkedIn</a><br></br>
            <a href="">Instargram</a><br></br>
            <a href="">rlabmscks0714@gmail.com</a><br></br>

          </div>
        </div>
        <div className="text-section-1"></div>

    </div>


  );
}
