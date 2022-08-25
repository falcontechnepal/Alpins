import styles from "../../styles/scss/Blog.module.scss";
import SideOne from "./SideOne";
import SideTwo from "./SideTwo";


const Myblog = () => {
  return (
    <>
   <div className= {`${styles.mainContainer} container fluid `}>
  {/* <div className="container ">
    <SideOne/>
  </div>
  <div className="container">
    <SideTwo/>
  </div> */}
{/* <div className="container"> */}

<div className="row gap-1">
    <div className="col-8">
    <SideOne/>
    </div>
    <div className="col-3">
    <SideTwo/>
    </div>
  </div>

  </div>
{/* </div> */}
    
    </>
  )
}

export default Myblog