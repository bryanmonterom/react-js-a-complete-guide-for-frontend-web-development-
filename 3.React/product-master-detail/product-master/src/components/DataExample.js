import Black from "../images/Black Strap.png";
import Blue from "../images/Blue Strap.png";
import Purple from "../images/Purple Strap.png";
import Red from "../images/Red Strap.png";



const ProductData =
 {
     title: 'FitBit 2020 - The Smartest Watch',
     description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
     colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: Black
        
        },
        {
            styleName: 'Blue Strap',
            imageUrl: Blue
        
        },{
            styleName: 'Purple Strap',
            imageUrl: Purple
        
        },{
            styleName: 'Red Strap',
            imageUrl: Red
        
        }
     ],
     featureList:[
         {
            feature: 'Time',
            icon: 'fa fa-clock'
         },
         {
            feature: 'Heart Rate',
            icon: 'fa fa-heart'
         },
      ]
 }

 export default ProductData;