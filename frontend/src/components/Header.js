import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from './Search';
import { Link } from 'react-router-dom';

const Header = ({ cartitems = [] }) => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="/images/logo.png" className="img-thumbnail" alt="Logo" width="50px" height="10px" /></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="/about">About </a>
              </li>
              <li className="nav-item dropdown ms-5">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/#tiffen">Tiffen</a></li>
                  <li><a className="dropdown-item" href="/#lunch">Lunch</a></li>
                  <li><a className="dropdown-item" href="/#dinner">Dinner</a></li>
                </ul>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item ms-5">
                <Link to={"/cart"} id='cart'><a className="nav-link" href="/cart">Cart: <span>{cartitems.length}</span></a></Link>
              </li>
              <li className="nav-item ms-5">
                <h3 className="h3 justify-content-start text-dark">Priya Restaurant</h3>
              </li>
              <li className="nav-item">
                <h6 className="h6 mt-3 ms-2 text-secondary">--- Best SouthIndia Food</h6>
              </li>
            </ul>
            
            <Search />
          </div>
        </div>
      </nav>
      <br /> <br />
    </div>
  );
};

export default Header;