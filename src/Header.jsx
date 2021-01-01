import React, { useState } from 'react';
import Logo from './images/logo.svg';

export default function Header() {
  // useState arbeiter hier als Teilzeit-Angestellter
  const [hamburger, setHamburger] = useState('');

  const hamburgerEffect = () => {
    setHamburger(() => {
      const header = document.querySelector('.header');
      const body = document.querySelector('body');
      const overlay = document.querySelector('.overlay');
      const fadeElements = document.querySelectorAll('.has-fade');

      if (header.classList.contains('open')) {
        // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach(function (element) {
          element.classList.remove('fade-in');
          element.classList.add('fade-out');
        });
      } else {
        // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach(function (element) {
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
        });
      }
    });
  };

  return (
    <header className="header">
      <div className="overlay has-fade"></div>

      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src={Logo} alt="easybank" />
        </a>

        <a
          onClick={hamburgerEffect}
          value={hamburger}
          id="btnHamburger"
          href="#"
          className="header__toggle hide-for-desktop"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="header__links hide-for-mobile">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <a href="#" className="button hide-for-mobile">
          Request Invite
        </a>
      </nav>

      <div className="header__menu has-fade">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div>
    </header>
  );
}
