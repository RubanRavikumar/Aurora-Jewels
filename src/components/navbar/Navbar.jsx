import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import wedingring from "../images/wedding-ring.png";
import jewelry from "../images/jewelry.png";
import necklace from "../images/necklace.png";
import earring from "../images/earring.png";
import cart from "../images/cart.png";
import bracelet from "../images/bracelet.png";
import Bangles from "../images/Bangles.png";
import User from "../images/User.png";

function Navbar() {
  return (
    <div className="shadow fixed-top bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center gap-2">
            <img src={jewelry} alt="ring" style={{ width: "50px" }} />
            <span className="fs-3 fw-5">Aurora Jewels</span>
          </div>
          <div className="d-flex gap-4 fs-5">
            <NavLink to="/" className="nav-route">
              <img src={necklace} alt="ring" style={{ width: "30px" }} />
              Necklaces
            </NavLink>
            <NavLink to="/bangles" className="nav-route">
              <img src={Bangles} alt="ring" style={{ width: "30px" }} />
              Bangles
            </NavLink>
            <NavLink to="/earrings" className="nav-route">
              <img src={earring} alt="ring" style={{ width: "30px" }} />
              Earrings
            </NavLink>
            <NavLink to="/rings" className="nav-route">
              <img src={wedingring} alt="ring" style={{ width: "30px" }} />
              Rings
            </NavLink>
            <NavLink to="/braceletes" className="nav-route">
              <img src={bracelet} alt="ring" style={{ width: "30px" }} />
              Braceletes
            </NavLink>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <NavLink to="/cart" className="nav-route fs-5">
              <img src={cart} alt="ring" style={{ width: "30px" }} />
              Cart
            </NavLink>
            <NavLink to="/profile" className="nav-route">
              <img src={User} alt="ring" style={{ width: "30px" }} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
