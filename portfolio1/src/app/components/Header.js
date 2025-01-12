"use client"

import React, {useState} from 'react'

function Header() {

  const [isOnProject, setIsOnProject] = useState(false)
  
  return (
    <>
    
    <div className='header-container '>
      <div className="header-wrapper ">
        <div className='header-element'>Sam Kim</div>
        <div onClick={()=>{setIsOnProject(!isOnProject); console.log('clicked')}} className='header-element relative'>
          {isOnProject ? "Close" : "Project"}
        </div>
      </div>

    </div>


    {isOnProject ? 
    <div className="project-menu-wrapper ">
      <div className="project-menu-header">
        <div className="header-wrapper ">
          <div className='header-element' style={{opacity : 0}}>Sam Kim</div>
          <div onClick={()=>{setIsOnProject(!isOnProject)}} className='header-element hover paddingBox1'>
            {isOnProject ? "Close" : "Project"}
          </div>
        </div>
      </div>

      <div className="project-menu">
        <div className="project-text">project1</div>
        <div className="project-text">project1</div>
      </div>
    </div>
    : null}
    </>
  )
}

export default Header
