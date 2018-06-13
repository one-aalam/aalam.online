import React from 'react';
import 'bulma/css/bulma.css';

export default () => (
  <section className="hero is-success is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="avatar">
          <img className="avatar-image" src="/static/avatar.png" alt="guy's avatar" />
          <div className="avatar-shadow">&nbsp;</div>
        </div>
        <h1 className="title salute">
          Hi, I&apos;m Aftab Alam
        </h1>
        <h6 className="desg">
            Javascript Craftsmanship &#124; since summer&apos;o 2010
        </h6>
        {/* <div className="hr" /> */}
        {/* <h2 className="subtitle">
          Welcome to online home of Aftab Alam, a Sr. Javascript Engineer/Architect based out of New Delhi, India
        </h2> */}
        <h3 className="desc">
            I spend my time idealizing, architecting and engineering cutting-edge digital soultions/experiences with
            best-of-breed tools/technologies, predominantly in Javascript
        </h3>
        <br />
        <a className="button is-warning is-rounded">Get in touch</a>
        {/* <ul>
          <li><a className="button">Linkedin</a></li>
        </ul> */}
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container has-text-centered">
            &nbsp; New Delhi, India
        </div>
      </nav>
    </div>
    <style jsx>{`
        .avatar {
            width: 200px;
            position: relative;
            margin: 0 auto 2rem;
        }
        .avatar-image,
        .avatar-shadow {
            display: block;
            left: 0;
            top: 0;
            width: 100%;
        }
        .avatar-image {
            border-radius: 290186px;
        }
        .avatar-shadow {
            border-radius: 290186px;
            background-image: radial-gradient(#000 0%, rgba(0, 0, 0, 0) 70%);
            position: absolute;
            top: 10%;
            height: 100%;
        }
        .salute {
            font-family: 'Quicksand', sans-serif;
            font-size: 2.25rem;
            line-height: 1.125;
            margin-bottom: 0.5rem;
        }
        .desc {
            font-family: 'Quicksand', sans-serif;
            font-size: 1.2rem;
        }
        .desg {
            color: #ffe479;
            font-size: 0.75rem;
        }
        .desg, .button {
            font-family: 'Montserrat', 'Quicksand', sans-serif;
            letter-spacing: 0.3em;
            text-transform: uppercase;
        }
        .hr {
            background-color: #ff470f;
            border: none;
            content: "";
            height: 1px;
            margin-bottom: 1.4rem;
            margin-top: 1.4rem;
            transform-origin: center center;
            width: 4rem;
        }
    `}
    </style>
  </section>
);
