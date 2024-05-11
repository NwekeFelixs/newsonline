import React from 'react'
import '../css/style.css'

import game from '../images/image-gaming-growth.jpg'
import retro from '../images/image-retro-pcs.jpg'
import laptop from '../images/image-top-laptops.jpg'


function FeaturesSection() {
    const features = [
        {
            id: "01",
            title: "Reviving Retro PCs",
            image: retro,
            text: "What happens when old PCs are given modern upgrades?"
        },

        {
            id: "02",
            title: "Top 10 Laptops of 2022",
            image: laptop,
            text: "Our best picks for various needs and budgets"
        },

        {
            id: "03",
            title: "The Growth of Gaming",
            image: game,
            text: "How the pandemic has sparked fresh opportunities here"
        }
    ]
  return (
    <div className='features'>
        {
            features.map( feature => (
                <div className='feature-item'>
                    <img src={feature.image} alt='featured' />
                    <div className='feature-content'>
                        <span>{feature.id}</span>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FeaturesSection