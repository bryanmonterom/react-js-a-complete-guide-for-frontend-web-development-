import React from "react";
import classes from './ProductPreview.module.css'


const ProductPreview = (props) =>
 {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  const HeartBeatSection =  <div className = {classes.HeartBeatSection}> 
  <i className="fa fa-heartbeat"></i>
  <p>78</p> 
  </div>;

  const timeSection =  <div className = {classes.TimeSection}>
  <p>{currentHour} : {currentMinute}</p>
</div>;

    return(


        <div className = {classes.ProductPreview}>
        <img src={props.currentPreviewImage}/>
            {props.currentSelectedFeature === 1 ? HeartBeatSection : timeSection}
        
        </div>

     )
 }

 export default ProductPreview