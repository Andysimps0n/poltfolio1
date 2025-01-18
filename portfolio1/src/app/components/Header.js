"use client"

import React, {useState} from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

function Header() {

  const [isOnProject, setIsOnProject] = useState(false)
  const router = useRouter()

  return (
    <>
    
    <div className='header-container '>
      <div className="header-wrapper ">
        <div className='header-element' onClick={()=>{router.push('/')}}>Sam Kim</div>
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
        <Link className="no-underline" href="/project1">
          <div className="project-text" onClick={()=>{setIsOnProject(false)}}>project 1</div>
        </Link>
        <Link className="no-underline" href="/project1">
          <div className="project-text" onClick={()=>{setIsOnProject(false)}}>project 2</div>
        </Link>
      </div>
    </div>
    : null}
    </>
  )
}

export default Header
