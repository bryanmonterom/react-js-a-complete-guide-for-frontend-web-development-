import React  from "react";
import classes from "./ProductData.module.css";
import Red from "../../images/Red Strap.png";
import Blue from "../../images/Blue Strap.png";
import Black from "../../images/Black Strap.png";
import Purple from "../../images/Purple Strap.png";

const ProductData =  (props) => {
const colorOptions = props.data.colorOptions.map((item,pos)=>
{
    const classArray =[classes.ProductImage];
    if(pos ===props.currentPreviewImagePos)
    {
        classArray.push(classes.SelectedProductImage);
    }
   return(
    <img key={pos} onClick={() => props.onColorOptionClick(pos)} className = {classArray.join(' ')} src={item.imageUrl} alt={item.styleName}/>
   ) 
})

const featureList = props.data.featureList.map((item,pos)=>
{
  console.log(props);  
  const classArray = [classes.FeatureItem];
    if(pos===  props.currentSelectedFeature)
    {
      classArray.push(classes.SelectedFeatureItem);
    }
    return(
    <button key={pos}onClick={()=> props.onFeatureButtonClick(pos)} className={classArray.join(' ')}> <i className={item.icon} aria-hidden="true"></i>{item.feature}</button>
    );
})

return(   
    <div className = {classes.ProductData}>
                <h1 className = {classes.ProductTitle}>{props.data.title}</h1>
                <p className = {classes.Description}>{props.data.description}</p>
                <h3 className = {classes.SectionHeading}>Select Color</h3>
                <div>
                    {colorOptions}
                  {/* <img className = {classes.ProductImage} src={Red}/>
                  <img className = {classes.ProductImage} src={Blue}/>
                  <img className = {classes.ProductImage} src={Purple}/>
                  <img className = {[classes.ProductImage, classes.SelectedProductImage].join(' ')} src={Black}/> */}
                </div>

                <h3 className = {classes.SectionHeading}>Features</h3>
                <div>
                  {featureList}
                </div>
                <button className={classes.PrimaryButton}> <i className="fa fa-cart-plus" aria-hidden="true"></i> Buy Now</button>
              </div> 
)
            }
export default ProductData;