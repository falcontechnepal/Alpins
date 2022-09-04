import React from 'react'
import Slider from 'react-slick'
import { discover } from './reviewSource'
import style from '../../styles/scss/Discovercar.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'

const initial = {
    hidden: {
        opacity: 0,
        y: 200,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        }
    }
}

const item = {
    hidden: {
        y: 200,
        opacity: 0,
    },

    visible: {
        y: 0,
        opacity: 1,
    }
}

const Discovercar = () => {
    const settings = ({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        easing: 'liner',
        slidesToShow: 3,
        slidesToScroll: 1,
        // mobileFirst: true,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
  return (
    <Slider {...settings} className={style.slider}>
        {discover.map((discover, index) => (
            <motion.div variants={ initial } initial='hidden' animate='visible' key={index} className={style.key}>
                {/* <div className="row row-cols-1"> */}
                    <motion.div variants={item} className="card-group m-2">
                        <div className={`${style.myCard} card border-0`} >
                            <Image className='card-img-top' src={discover.image} alt="" height={500} width={500} />
                            <div className="card-body p-3">
                                <div className="card-title text-center h4 my-3 fw-bold">{discover.heading}</div>
                                <div className="card-text text-center mb-4">{discover.desc}</div>
                            </div>
                        </div>
                    </motion.div>
                {/* </div> */}
            </motion.div>
        ))}
    </Slider>
  )
}

export default Discovercar
