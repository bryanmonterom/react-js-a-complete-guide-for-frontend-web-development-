import React from 'react';
import './App.css';
import BlogCard from "./components/BlogCard";

class App extends React.Component {

  state =
  {
    showBlogs: true,
    blogArray : [ {
      Id:1,
     Title: "Visual Studio Advatanges",
     Descripcion: 'Lorem impsun dolor Lorem impsun dolorLorem impsun dolorLorem impsun dolorLorem impsun dolorLorem impsun dolor',
     likeCount : 0
    },
    {
      Id:2,
      Title: "Visual Studio Advatanges",
      Descripcion: 'Lorem impsun dolor Lorem impsun dolorLorem impsun dolorLorem impsun dolorLorem impsun dolorLorem impsun dolor',
     likeCount : 0

    },
    {
      Id:3,
      Title: "Visual Studio Advatanges",
      Descripcion: 'Lorem impsun dolor Lorem impsun dolorLorem impsun dolorLorem impsun dolorLorem impsun dolorLorem impsun dolor',
     likeCount : 0

   }
  ]

  }




  onLikeButtonClick = (pos) =>{
    const updatedBlogList = this.state.blogArray;
    const updatedBlogObject = updatedBlogList[pos];
    updatedBlogObject.likeCount = updatedBlogObject.likeCount+1;
    updatedBlogList[pos] = updatedBlogObject;
    this.setState({blogArray: updatedBlogList});
    console.log(this.state.blogArray)
  }





onHidebtnClick =() =>
  {
    this.setState((prevState, prevProps)=>{return {showBlogs: !prevState.showBlogs}});
  }
  
  render()  {

    const blogCard = this.state.blogArray.map((item, pos)=>
    {
     console.log(item);
     return(
      <BlogCard   onLikeButtonClick  = {() => this.onLikeButtonClick(pos)} likeCount={item.likeCount} key={item.Id} Title={item.Title+' '+item.Id}  Description={item.Descripcion}></BlogCard>
     
     )
    })


   return(<div className="App">
   <button onClick={this.onHidebtnClick} className="btn btn-success">{this.state.showBlogs ? 'Hide blocks' : 'Show blocks'}</button>
   { 
   
     this.state.showBlogs ? blogCard : null
   }
  </div>);
  }
}

export default App;