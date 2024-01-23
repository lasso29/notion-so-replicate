import React from 'react'
import img1 from "./assets/notion-labs-inc-logo-vector.png"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">

<div className="container-fluid">
  <a className="navbar-brand" href="#">
    <img src={img1} alt="" className='img1' />
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Product
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Wikis</a></li>
          <li><a className="dropdown-item" href="#">Projects</a></li>
          <li><a className="dropdown-item" href="#">Docs</a></li>
          <li><a className="dropdown-item" href="#">Notion AI</a></li>
        </ul>
      </li>
    </ul>

    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Download
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">iOS & Android</a></li>
          <li><a className="dropdown-item" href="#">Mac & Windows</a></li>
          <li><a className="dropdown-item" href="#">Web Clipper</a></li>
        </ul>
      </li>
    </ul>

    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Solutions
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Enterprise</a></li>
          <li><a className="dropdown-item" href="#">Small business</a></li>
          <li><a className="dropdown-item" href="#">Personal</a></li>
        </ul>
      </li>
    </ul>

    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Resources
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Blog</a></li>
          <li><a className="dropdown-item" href="#">Guides & tutorial</a></li>
          <li><a className="dropdown-item" href="#">Webinars</a></li>
          <li><a className="dropdown-item" href="#">Help center</a></li>
          <li><a className="dropdown-item" href="#">API docs</a></li>
          <li><a className="dropdown-item" href="#">Community</a></li>
          <li><a className="dropdown-item" href="#">Hire a consultant</a></li>
        </ul>
      </li>
    </ul>

    <ul className="navbar-nav">
      <li className="nav-item cursor-pointer">Pricing</li>
    </ul>
  </div>

  <div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Request a Demo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log in</a>
        </li>
      </ul>
      <button className='btn btn-dark'>Get Notion free</button>
    </div>
  </div>
</div>
</nav>
    </div>
  )
}

export default Navbar