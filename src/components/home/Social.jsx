import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="-blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://apple.com"
        className="home__social-icon"
        target="-blank"
      >
        <i className="uil uil-apple"></i>
      </a>
      <a
        href="https://github.com"
        className="home__social-icon"
        target="-blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.youtube.com"
        className="home__social-icon"
        target="-blank"
      >
        <i className="uil uil-youtube"></i>
      </a>
    </div>
  );
}

export default Social