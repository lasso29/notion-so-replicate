import React from 'react'
import img3 from "./assets/page1.png"
import img4 from "./assets/page2.png"

const Contain = () => {
  return (
    <div>

<div className='container mt-3'>
        <div className='row'>
          <div className='col-12 mx-auto text-center justify-content-center align-items-center'>
            <h1 className='text3'>Millions run on Notion every day</h1>
            <p className='text4'>Powering the world’s best teams, from next-generation startups <br /> to established enterprises.</p>
            <a href="" className='link1'>Read customer stories...</a> <br />
            <img src={img3} alt="" className='img3' />
            <img src={img4} alt="" className='img4' />
            <p className='text5'>"We got rid of nearly a dozen different tools because of <br /> what Notion does for us."</p>
          </div>
        </div>
</div>

    </div>
  )
}

export default Contain