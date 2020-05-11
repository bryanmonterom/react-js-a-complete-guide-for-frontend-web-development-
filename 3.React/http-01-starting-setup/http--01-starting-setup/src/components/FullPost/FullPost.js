import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost:null,
        Loading:true
    }
    componentDidUpdate(prevProps){
        if(this.props.id)
        {
            if(this.props.id !== prevProps.id){
                axios.get('/posts/'+ this.props.id)
                .then(response=>{
                    this.setState({loadedPost: response.data, Loading:false})
                }).catch(
                    error=>{
                        console.log(error)
                    }
                )

            }
        }
    }
    render () {
        let post = <p style={{textAlign: "center", fontWeight:"bold"}}>Please select a Post!</p>;
        if(this.props.id)
        {
           
           if(this.state.Loading){
           post = <p style={{textAlign: "center", fontWeight:"bold"}}>Loading...!</p>;
           }
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                    <button className="Delete" onClick={()=>this.props.delete(this.props.id)}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;