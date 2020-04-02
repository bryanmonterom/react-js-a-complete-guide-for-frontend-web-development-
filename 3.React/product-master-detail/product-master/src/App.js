import React from 'react';
import classes from './App.module.css';
import Black from "./images/Black Strap.png";
import Red from "./images/Red Strap.png";
import Blue from "./images/Blue Strap.png";
import Purple from "./images/Purple Strap.png";
import ProductData from './components/Product Data/ProductData'
import ProductPreview from '../src/components/Product Preview/ProductPreview'
import TopBar from './components/Top Bar/TopBar';
import { Component } from 'react/cjs/react.development';
import DataExample from './components/DataExample'


class App extends Component {

  state = 
  {
    productData : DataExample,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }

onColorOptionClick = (pos) => 
{
  this.setState({currentPreviewImagePos: pos})
}

onFeatureButtonClick = (pos) =>
{
 
  this.setState({currentSelectedFeature: pos})
}

  render(){
  return (
    <div>
     <TopBar/>
      <div className={classes.MainContainer}>
        <div className="container-fluid">
        <div className="row">
            <div className= "col-6">
              <ProductPreview 
                currentPreviewImage=
                  {
                    this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl
                  } 
                  currentSelectedFeature=
                  {
                    this.state.currentSelectedFeature
                  }

                />
            </div>
            <div className="col-6">
              <ProductData data={this.state.productData} onColorOptionClick = {this.onColorOptionClick} currentPreviewImagePos= 
                  {
                    this.state.currentPreviewImagePos
                  }
                  currentSelectedFeature = {this.state.currentSelectedFeature}
                  onFeatureButtonClick =
                  {
                     this.onFeatureButtonClick
                  }
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
