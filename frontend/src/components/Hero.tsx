import React from 'react'
import style from '../styles/scss/Hero.module.scss'

const Hero = () => {
  return (
    <div className={`${style.wrapper}`}>
        <div className={`${style.heroBody} container`}>
            <div className="row">
                <div className={`${style.leftBody} col-md-6`}>
                    {/* <h1>Amazing Mountan to explore</h1> */}
                    <h1 className={`${style.heading} h1 w-50`}>Amazing Mountain to explore</h1>
                    <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail.</p>
                </div>
                <div className={`${style.rightBody} col-md-4`}>
                <div className={style.stat}>
                    <span className='h6'>Altitude</span>
                    <span className='h4'>8848m</span>
                </div>
                <div className={style.stat}>
                    <span className='h6'>Tracks</span>
                    <span className='h4'>20</span>
                </div>
                <div className={style.stat}>
                    <span className='h6'>Tourists/year</span>
                    <span className='h4'>40000+</span>
                </div>
                </div>
            </div>
        </div>
        
        <div className={style.overlay}></div>
    </div>
  )
}
 
export default Hero
