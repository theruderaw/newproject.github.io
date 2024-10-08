import React from 'react';
import './styles/Navbar.css'; // Import custom styles

function Navbar() {
  return (
    <div style={{top:"0px"}}>
        <nav className="navbar navbar-expand-lg navbar-custom navbar-fixed-top" style={{height:"50px",width:"100vw"}}>
            <a className="navbar-brand" href="/">CyberPUNK!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
