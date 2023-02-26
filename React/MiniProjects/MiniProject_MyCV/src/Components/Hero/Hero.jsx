import React from 'react'
import './Hero.css'

const Hero = ({ hero }) => {
  return (
    <div className='hero'>
      <img src={hero.image} alt={hero.name} />
      <div className='card'>
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>🗺️ {hero.city}</p>
        <p>🎂 {hero.birthDate}</p>
        <p>
          📧 <a href={'mailto:' + hero.email}>
            {hero.email}
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>🌐 <a href={hero.gitHub}>
             GitHub
          </a>
        </p>
      </div>
    </div>
  )
}

export default Hero
