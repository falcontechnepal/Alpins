import React from 'react'
import { info } from './foodInfoSource'
const Foodinfo = () => {
  return (
    <div className='container mt-5'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {info.map ((info, index) => (
          <div key={index} className="col" style={{ backgroundColor: 'transparent !important' }}>
              <div  className="card h-100 shadow border-0 p-4">
                <div className='text-center'>{info.icon}</div>
                <div className="h4 fw-bold text-center mt-3 mb-3">{info.head}</div>
                <p className="card-text text-center mb-3">{info.desc}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Foodinfo
