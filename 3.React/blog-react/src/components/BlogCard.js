import  React from "react";
const BlogCard = (props) =>
{
    
    // state = 
    // {
    //     likeCount :0
    // }

    // onLikeButtonClick= () =>
    // {
    //     this.setState((prevState, prevProp)=>{
    //         return {likeCount: prevState.likeCount+1}});
    // }

    
    
    return(
     
        <div className="card CardStyle">
            <div className="card-body">
            <h1 className="card-title">{props.Title}</h1>
                <p className="card-text">
                    {props.Description} 
                 <p className="text-info">Like Count: {props.likeCount}</p>
                </p>
            </div>
            <button onClick={props.onLikeButtonClick} className="btn btn-warning">Like!</button>
      </div>
     );
}

 export default BlogCard