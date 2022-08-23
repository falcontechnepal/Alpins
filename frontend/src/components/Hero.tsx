import React from 'react'
import style from '../styles/scss/Hero.module.scss'

const Hero = () => {
  return (
    <div className={`${style.wrapper}`}>
        <div className="container">
            <div className={`${style.leftBody}`}>
                <h1>Amazing Mountan to explore</h1>
                <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
