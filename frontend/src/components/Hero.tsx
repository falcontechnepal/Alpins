import React from 'react'
import style from '../styles/scss/Hero.module.scss'

const Hero = () => {
  return (
    <div className={`${style.wrapper}`}>
        <div className={`${style.heroBody} container`}>
            <div className={`${style.leftBody}`}>
                <h1>Amazing Mountan to explore</h1>
                <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail.</p>
            </div>
            <div className={`${style.rightBody}`}>
              <div className={style.stat}>
                <span>Altitude</span>
                <span>8848m</span>
              </div>
              <div className={style.stat}>
                <span>Tracks</span>
                <span>20</span>
              </div>
              <div className={style.stat}>
                <span>Tourists/year</span>
                <span>40000+</span>
              </div>
            </div>
        </div>
        
        <div className={style.overlay}></div>
    </div>
  )
}
 
export default Hero
