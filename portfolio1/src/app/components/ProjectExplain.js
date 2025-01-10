'use client'
import React, {useState} from 'react';

function ProjectExplain() {
  const [isReadMore, setIsReadMore] = useState(false)

  return (
    <div className="project-explain-container">
    <div className="gallery">Gallery</div>
    <div className="project-explain-wrapper">
      <div className="project-explain-header">Projects - Norwegian National Opera and Ballet</div>
      <div className="project-explain">The opera house is part of Oslo's revitalization strategy to redevelop the city's historically industrial waterfront into an active public space and was the first building to be completed in the Bjørvika area. It is built on piles in the Oslo fjord, abutting reclaimed land that extends Oslo's harbor, giving more of the city's waterfront space back to the public.</div>
      {isReadMore ? <div className="project-explain">be completed in the Bjørvika area. It is built on piles in the Oslo fjord, abutting reclaimed land that extends Oslo's harbor, giving more of the city's waterfront space back to the public.</div>: null}
      <div onClick={()=>{setIsReadMore(!isReadMore)}} className="read-more">{isReadMore ? "Close" : "Read more"}</div>
      <div className="feature-container">
        <div className="feature-element-wrapper">
          <div>Typologies</div>
          <div className="feature-element-text">Performance Space, Public Space, Art</div>
        </div>
        <div className="feature-element-wrapper">
          <div>Status</div>
          <div className="feature-element-text">Completed</div>
        </div>
        <div className="feature-element-wrapper">
          <div>Location</div>
          <div className="feature-element-text">Oslo, Norway</div>
        </div>
        <div className="feature-element-wrapper">
          <div>Client</div>
          <div className="feature-element-text">Statsbygg, The Governmental Building Agency</div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ProjectExplain
