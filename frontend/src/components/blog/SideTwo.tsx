import React from 'react'

const SideTwo = () => {
  return (
   <>

  {/* <div className="col"> */}
  {/* <div className="row">
    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-success" type="submit">Search</button>
  </div>
  <div className="row">
       2
    </div>
    <div className="row">
      3
    </div>
    <div className="row">
      4
    </div> */}

    <div className='mt-5'>
      <h6 className="h4 mb-3">Search</h6>
      <div className="search d-flex mb-5">
        <input type="text" className="form-control rounded-0" />
        <button className="btn btn-success px-4 rounded-0" type='submit'>Search</button>
      </div>
      <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">1</li>
        <li className="list-group-item">2</li>
        <li className="list-group-item">3</li>
        <li className="list-group-item">4</li>
        <li className="list-group-item">5</li>
      </ul>
      </div>
    </div>
   </>
  )
}

export default SideTwo;