import React from 'react'
import { Parallax } from 'react-parallax'
import style from '../styles/scss/Hero.module.scss'
import HeroCarousel from './HeroCarousel';
import CountUp from 'react-countup';

const Hero = () => {
    const bg ="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  return (
    <Parallax bgImage={bg} strength={-300}>
        <div className={`${style.wrapper}`}>
            <div className={`${style.heroBody} container`}>
                <div className="row">
                    <div className={`${style.leftBody} col-md-6`}>
                        {/* <h1>Amazing Mountan to explore</h1> */}
                        <h1 className={`${style.heading} h1 w-md-50`}>Amazing Mountain to explore</h1>
                        <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail.</p>
                    </div>
                    <div className={`${style.rightBody} col-md-6`}>
                        <div className={style.stat}>
                            <span className='h6'>Altitude</span>
                            <span className='h4'><CountUp end={8848} duration={2} delay={.75} /> m</span>
                        </div>
                        <div className={style.stat}>
                            <span className='h6'>Tracks</span>
                            <CountUp start={0} end={20} duration={2} delay={.75}>
                                {({countUpRef}) => (
                                    <div>
                                        <span ref={countUpRef} className='h4'></span>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className={style.stat}>
                            <span className='h6'>Tourists/year</span>
                            <span className='h4'><CountUp end={200} duration={2} delay={.75} />+</span>
                        </div>
                        <div>
                            <HeroCarousel />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={style.overlay}></div>
        </div>
    </Parallax>
  )
}
 
export default Hero
