import React from 'react';

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark" >
            <div className="container">
                <a className="navbar-brand" href="#/">Traveyuk</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Contact Us</a>
                        </li>
                    </ul>
                    <div className="nav-button">
                        <a href="/" className="btn text-white">Sign In</a>
                        <button type="button" className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar