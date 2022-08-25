import styles from "../../styles/scss/Blog.module.scss";
import SideOne from "./SideOne";
import SideTwo from "./SideTwo";


const Myblog = () => {
  return (
    <>
   <div className= {`${styles.mainContainer} container`}>
    {/* <div className="container ">
      <SideOne/>
    </div>
    <div className="container">
      <SideTwo/>
    </div> */}
  {/* <div className="container"> */}

  <div className="row gap-3">
      <div className="col-md-8">
        <SideOne/>
      </div>
      <div className="col">
        <SideTwo/>
      </div>
    </div>

    </div>
  {/* </div> */}
      
      </>
    )
  }

export default Myblog