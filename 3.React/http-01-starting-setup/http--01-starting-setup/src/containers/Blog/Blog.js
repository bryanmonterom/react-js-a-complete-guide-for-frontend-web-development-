import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from '../../axios';

class Blog extends Component {
    state = {
        posts:null,
        selectedPostId: null
    }

    componentDidMount(){
        let posts = "";
        Axios.get('/posts')
        .then(response =>{
           posts = response.data.slice(0,4);
            const updatedPosts = posts.map(posts => {
                return{
                    ...posts,
                    author:'Bryan'
                }
            })
            this.setState({posts: updatedPosts})

        }).catch(error=>{
           console.log(error)
        });

    }   

    postSelectedHandler = (id)=>{
        this.setState({selectedPostId: id})
        console.log('clicked')
    }

    deletePostHandler=(id)=>{
        Axios.delete('/posts/'+id)
        .then(response=>{
            console.log(response)
        })
    }
    render () {
        let posts = <p>Something went wrong</p>
        if (this.state.posts){
            console.log('aqui')
         posts = this.state.posts.map((post, key)=>{
            return (
                <Post 
                    author={post.author} 
                    key={post.id} 
                    title={post.title}
                    clicked={()=>this.postSelectedHandler(post.id)}
                    />
        )});
    }

           
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id={this.state.selectedPostId}
                        delete={this.deletePostHandler}
                        />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;