import React from 'react';

export default function Articles() {
  return (
    <section className="articles">
      <div className="article__content container container--pall">
        <h2>Latest Articles</h2>
        <div className="article__grid">
          <a href="#" className="article__item">
            <div className="article__image article__image1"></div>
            <div className="article__text">
              <div className="article__author">By Claire Robinson</div>
              <div className="article__title">
                Receive money in any currency with no fees
              </div>
              <div className="article__description">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </div>
            </div>
          </a>
          <a href="#" className="article__item">
            <div className="article__image article__image2"></div>
            <div className="article__text">
              <div className="article__author">By Wilson Hutton</div>
              <div className="article__title">
                Treat yourself without worrying about money
              </div>
              <div className="article__description">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </div>
            </div>
          </a>
          <a href="#" className="article__item">
            <div className="article__image article__image3"></div>
            <div className="article__text">
              <div className="article__author">By Wilson Hutton</div>
              <div className="article__title">
                Take your Easybank card wherever you go
              </div>
              <div className="article__description">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </div>
            </div>
          </a>
          <a href="#" className="article__item">
            <div className="article__image article__image4"></div>
            <div className="article__text">
              <div className="article__author">By Claire Robinson</div>
              <div className="article__title">
                Our invite-only Beta accounts are now live!
              </div>
              <div className="article__description">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
