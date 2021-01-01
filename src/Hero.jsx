import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__image"></div>
        <div className="hero__text container--pall">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <a href="#" className="button hero__cta">
            Request Invite
          </a>
        </div>
      </div>
    </section>
  );
}
