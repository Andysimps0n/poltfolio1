'use client'
import React, {useState, useEffect, useRef} from 'react';
import ProjectExplain from './components/ProjectExplain';
import Header from './components/Header'
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

      <Header></Header>

      <div className="text1-wrapper opacity0" ref={animationRef}>
            <div className='text-title' id='title'>Norwegian National</div>
            <div className='text-title'>Opera and Ballet</div>
            <div className='text-title color-grey'>Giving waterfront space back to the public</div>
            <div className='text-normal text-margin'>2000–2008</div>
            <div className='text-normal text-margin'>Architecture, Art, Landscape Architecture, Interior Architecture</div>
      </div>

      <div className="first-picture"></div>


        <ProjectExplain ></ProjectExplain>

        <div className="second-photo-container ">
          <div id="photo2"></div>
          <div id="photo3"></div>
        </div>


        <div className="text-section-1">
          <div className="text-section-title ">Textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>


        <div className="carousel-container">
          <div className="carousel-wrapper" style={{left : `${-100 * carouselPage}%`}} >
            <div id="photo5"></div>
            <div id="photo4"></div>
            <div id="photo6"></div>

          </div>
          <div className="carousel-arrow-container">
            <div className="arrow-holder" onClick={()=>{carouselPage > 0 ? setCarouselPage(carouselPage-1) : null}}>
              <SlArrowLeft size={40}></SlArrowLeft>
            </div>
            <div className="arrow-holder" onClick={()=>{carouselPage < 2 ? setCarouselPage(carouselPage+1) : null}} >
              <SlArrowRight size={40}></SlArrowRight>
            </div>
          </div>
          <div className="carousel-nth-wrapper">
            <div className="carousel-nth">
              {
                carouselArr.map((_, i)=>(
                  i == carouselPage ? <div key={i} className="carousel-nth-element grey"></div> : <div key={i} className="carousel-nth-element"></div>
                ))
              }
            </div>
          </div>
        </div>


        <div className="FiveEm"></div>
        <div className="text-section-1">
          <div className="text-section-title">Textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>


    </div>


  );
}
