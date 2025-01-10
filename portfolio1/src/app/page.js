'use client'
import React, {useState} from 'react';
import ProjectExplain from './components/ProjectExplain';
import Header from './components/Header'

export default function Home() {

  const [isReadMore, setIsReadMore] = useState(false)

  return (
    <div>
      <Header></Header>

      <div className="text1-wrapper">
            <div className='text-title'>Norwegian National</div>
            <div className='text-title'>Opera and Ballet</div>
            <div className='text-title color-grey'>Giving waterfront space back to the public</div>
            <div className='text-normal text-margin'>2000–2008</div>
            <div className='text-normal text-margin'>Architecture, Art, Landscape Architecture, Interior Architecture</div>
      </div>

      <div className="first-picture"></div>


        <ProjectExplain></ProjectExplain>

        <div className="second-photo-container ">
          <div id="photo2"></div>
          <div id="photo3"></div>
        </div>


        <div className="text-section-1">
          <div className="text-section-title">textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>


        <div className="left-lean-container">
          <div id="photo5"></div>
        </div>
        <div className="right-lean-container">
          <div id="photo4"></div>
        </div>

        <div className="divider"></div>
        <div className="text-section-1">
          <div className="text-section-title">textext</div>
          <div className="text-section-text">An ancient custom now protected by Norwegian law, alle­mannsretten (Norwegian for the right to roam) ensures one's freedom to move unrestricted throughout the countryside. Applying this idea to the interior in addition to the exterior of a building­ that is, to the landscape and also to the architecture - removes the oppositional nature from these terms. As they become synonymous, interior and exterior spaces become continuous. It was in this spirit that our proposal for the Norwegian National Opera and Ballet was conceived.</div>
        </div>


    </div>


  );
}
