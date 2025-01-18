import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className="home-outer-most-container ">


      <div className="home-title-container"><span className="grey-text">Projects</span> Our projects are samples of possible solutions and futures. They present an opening for rethinking, redesigning and redoing.</div>
      <div className="home-project-grid">


        <Link className='no-underline' href='/project1'>
          <div className="grid-wrapper">
            <div className="grid-picture-wrapper">
              <div className="grid-picture" id='grid-picture1'></div>
            </div>
            <div className="grid-picture-header"><span className="grid-head">The App Router</span> The App Router uses a hybrid approach for routing and navigation.  </div>
          </div>
        </Link>

        <Link className='no-underline' href='/project2'>
          <div className="grid-wrapper">
            <div className="grid-picture-wrapper">
              <div className="grid-picture" id='grid-picture2'></div>
            </div>
            <div className="grid-picture-header"><span className="grid-head">The App Router</span> The App Router uses a hybrid approach for routing and navigation.  </div>
          </div>
        </Link>


        <div className="grid-wrapper"></div>
        <div className="grid-wrapper"></div>
        <div className="grid-wrapper"></div>
        <div className="grid-wrapper"></div>


      </div>


    </div>
  )
}

export default page
