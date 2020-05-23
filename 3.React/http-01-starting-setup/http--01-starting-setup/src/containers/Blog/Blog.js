import React, { Component } from 'react';
import{Route, NavLink, Switch}from 'react-router-dom'
import Posts from '../../components/Post/Post'
import './Blog.css';
import Axios from '../../axios';
import NewPost from '../../containers/Blog/NewPost/NewPost'
import FullPost from '../../containers/Blog/FullPost/FullPost'

class Blog extends Component {
    state = {
        posts:null,
        selectedPostId: null,
        error:false
    }

    




    deletePostHandler=(id)=>{
        Axios.delete('/posts/'+id)
        .then(response=>{
            console.log(response)
        })
    }
    render () {
        return (
            <div className="Posts">
            <header>
                <nav>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/new-post">New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
            {/* <Route path="/" exact render={()=><h1>Klks</h1>}/> */}
            <Switch>
               <Route path="/" exact component={Posts}/>
               <Route path="/new-post" component={NewPost}/>
               <Route path="/:id" component={FullPost}/>
</Switch>

                {/* <section>
                    <FullPost 
                        id={this.state.selectedPostId}
                        delete={this.deletePostHandler}
                        />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;