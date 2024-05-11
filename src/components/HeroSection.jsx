import React from 'react'
import '../css/style.css'
import heroImg from '../images/image-web-3-desktop.jpg';
import heroMobile from '../images/image-web-3-mobile.jpg'

function HeroSection() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div className='img-container'>
            <img className='desktop-hero' src={heroImg} alt=''/>
            <img className='mobile-hero' src={heroMobile} alt=''/>
            </div>

            <div className='hero-content'>
                <h1>
                    The Bright
                    Future Of
                    Web 3.0?
                </h1>

                <div className='contents'>
                    <p>
                     We dive into next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is really fulfilling its promise?
                    </p>

                    <button className='btn'>READ MORE</button>
                </div>
            </div>
        </div>

        <div className='hero-right'>
            <h1>New</h1>

            <div className='right-content'>
                <div className='item'>
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>
                        Will hydrogen-fueled cars ever ever catch up to EVs?
                    </p>
                </div>

                <div className='item'>
                    <h3>The Downsides AI Artistry</h3>
                    <p>
                        What are the possible adverse effects of on-demand AI image generation?
                    </p>
                </div>

                <div className='item'>
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>
                        Private funding by VC firms is down 50% YOY. We take a look at what that means.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection