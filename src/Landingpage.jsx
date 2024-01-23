import React from 'react'
import "./landing.css"
import img1 from "./assets/notion-labs-inc-logo-vector.png"
import img2 from "./assets/hero_xmas-rev.jpg"

const Landingpage = () => {
  return (

    <div className=''>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-12 mx-auto text-center justify-content-center align-items-center'>
            <h1 className='text1'>New year, new plans.</h1>
            <p className='text2'>Your workspace to write, organize, and collaborate. With AI by your side.</p>
            <button className='btn btn-dark'>Get Notion Free...</button> <br />
            <img src={img2} alt="" className='img2' />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Landingpage