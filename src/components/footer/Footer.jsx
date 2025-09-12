import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">About Us</h5>
            <p className="small">
              At <strong>Aurora Jewels</strong>, we craft timeless jewellery
              that celebrates love, beauty, and elegance. Each piece is designed
              with passion and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled small">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/collections"
                  className="text-light text-decoration-none"
                >
                  Shop Collections
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-light text-decoration-none">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Customer Care</h5>
            <ul className="list-unstyled small">
              <li>
                <a href="/shipping" className="text-light text-decoration-none">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="/returns" className="text-light text-decoration-none">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/care" className="text-light text-decoration-none">
                  Jewellery Care Guide
                </a>
              </li>
              <li>
                <a
                  href="/size-guide"
                  className="text-light text-decoration-none"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-light text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter + Socials */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Join Our Circle</h5>
            <p className="small">
              Subscribe for new collections, exclusive offers, and style tips.
            </p>
            <form className="d-flex mb-3">
              <input
                type="email"
                placeholder="Your email"
                className="form-control me-2"
              />
              <button className="btn btn-warning" type="submit">
                Subscribe
              </button>
            </form>
            <div className="d-flex gap-3 fs-5">
              <span>
                <FaFacebook />
              </span>
              <span>
                <IoLogoInstagram />
              </span>
              <span>
                <FaPinterestP />
              </span>
              <span>
                <FaTiktok />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom border-light"></div>
      <p className="text-center small mb-0 py-3">
        © {new Date().getFullYear()} Aurora Jewels. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
