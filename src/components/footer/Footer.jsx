import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Njihia</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Reviews
            </a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.telegram.com/"
            className="footer__social-link"
            target="-blank"
          >
            <i className="bx bxl-telegram"></i>
          </a>
          <a
            href="https://twiiter.com"
            className="footer__social-link"
            target="-blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          {/* <a
            href="https://git.com"
            className="home__social-icon"
            target="-blank"
          >
            <i className="bx bxl-git"></i>
          </a> */}
          <a
            href="https://www.messenger.com"
            className="footer__social-link"
            target="-blank"
          >
            <i className="bx bxl-messenger"></i>
          </a>
        </div>

        <span className="footer__copyright">&#169; Mesh Njihia All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer