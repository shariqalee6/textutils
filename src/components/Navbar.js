import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//add color pallets in navbar of bootstrap 5?
function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div className="color-pallets">
              <ul className="colorpicker" id="skin-changer">
                <li className="colorpick-btn" style={{ backgroundColor: '#5DB2FF' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#2dc3e8' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#03B3B2' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#53a93f' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#FF8F32' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#cc324b' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#AC193D' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#8C0095' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#0072C6' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#585858' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#474544' }}></li>
                <li className="colorpick-btn" style={{ backgroundColor: '#001940' }}></li>
              </ul>
            </div>
          </div> */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggle} />
            <label className="form-check-label" style={props.themeStyle} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          {/* 
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Text Utils"
}
export default Navbar