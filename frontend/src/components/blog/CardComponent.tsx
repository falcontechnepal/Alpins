import React from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { BsCalendar } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';




const CardComponent = () => {
  return (
    <>

<div className="card mb-3 shadow-lg   bg-body rounded "  >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1659535840049-980f16d85216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start h-100 w-100" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Content Box</h5>
        <p className="card-text"> <RiAdminFill/>admin  <BsCalendar/>01/03/2022   <BsFillBookmarkFill/>Trek   </p>
        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum iure esse quia obcaecati error fugiat consequuntur, quod unde voluptates, perferendis qui eligendi </p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default CardComponent;