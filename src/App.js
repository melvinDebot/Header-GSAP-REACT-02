import React, { useEffect} from 'react';
import { TweenMax, Power3 } from "gsap";
import './App.scss';

import search from './assets/search.svg';
import leftArrow from './assets/left-arrow.svg';
import rightArrow from './assets/right-arrow-4.svg';
import shopping from './assets/shopping-cart.svg';
import paireOne from './assets/paire1.png';
import paireTwo from './assets/paire2.png';
import NikeRact from './assets/nikeReact.png'

function App() {
  




  useEffect(() => {
    TweenMax.from('.left',1,{
      delay: 0.6,
      width: 0,
      ease: Power3.easeInOut
    })
    TweenMax.from(".right", 1.6, {
      delay: 0.6,
      width: 0,
      ease: Power3.easeInOut
    })
    TweenMax.from(".logo", 1, {
      delay: 1,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    })
    TweenMax.from(".menu", 1, {
      delay: 1.2,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    })
    TweenMax.from(".categories", 1, {
      delay: 1.4,
      opacity: 0,
      x: -150,
      ease: Power3.easeInOut
    })
    TweenMax.from(".search", .8, {
      delay: 1.6,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    })
    TweenMax.from(".bag", 1, {
      delay: 1.6,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    })
    TweenMax.from(".media ul li", 1, {
      delay: 2,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    }, 0.08);
    TweenMax.from(".size", 1, {
      delay: 1.8,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    })
    TweenMax.from(".size ul li", .3, {
      delay: 2,
      opacity: 0,
      y: 20,
      ease: Power3.easeInOut
    }, 0.08);
    TweenMax.from(".dot", 1, {
      delay: 2.4,
      opacity: 0,
      x: 20,
      ease: Power3.easeInOut
    }, 0.08);
    
    TweenMax.from(".product-img", 3, {
      delay: 2,
      opacity: 0,
      y: 20,
      ease: Power3.easeInOut
    });
    TweenMax.from(".product-title", 3, {
      delay: 2.2,
      opacity: 0,
      y: 50,
      ease: Power3.easeInOut
    });
    TweenMax.from(".product-subtitle", 3, {
      delay: 2.4,
      opacity: 0,
      y: 50,
      ease: Power3.easeInOut
    });
  })


  return (
    <div className="wrapper">
      <div className="left"></div>
      <div className="right"></div>
      <div className="strips">
        <div className="left-strip"></div>
        <div className="right-strip"></div>
      </div>
      <div className="nav">
        <div className="logo">Nike <span className="reg">&reg;</span></div>
        <div className="categories">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="search">
          <img src={search} alt="search-icon" />
        </div>
        <div className="bag">
          <img src={shopping} alt="shopping" />
        </div>
        <div className="media">
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="size">
          <ul>
            <span>Size:</span>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>
        <img src={NikeRact} alt="nike air force one" className="product-img"/>
        <div className="product-text">
          <h1 className="product-title">colorblock</h1>
          <p className="product-subtitle">Full sleeve t-shirt</p>
        </div>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
