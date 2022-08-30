import React from 'react'
import { Background, Parallax } from 'react-parallax'
// import style from '../../styles/scss/Abouthero.module.scss'

const Abouthero = ({ title }) => {
    const img = 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  return (
    <Parallax bgImage={img} strength={-300}>
        {/* <Background className={`${style.bgImg}`}>
            <img src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="bgimg" />
        </Background> */}
        <div style={{ margin: '150px 0'}}>
            <div className="txt container">
                <h1 className="h1">{title}</h1>
            </div>
        </div>
    </Parallax>
  )
}

export default Abouthero
