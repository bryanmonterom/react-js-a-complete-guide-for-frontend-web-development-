import React,{Component} from 'react'
import Axios from '../../axios';
import Post from '../../containers/Blog/Post/Post' 
import {Link} from 'react-router-dom'

class Posts extends Component{

    state = {
        posts:[],
        selectedPostId: null,
        error:false
    }

    postSelectedHandler = (id)=>{
        this.setState({selectedPostId: id})
        console.log('clicked')
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

render(){
    let posts = <p>Something went wrong</p>

    if (this.state.posts){
    console.log('aqui')
    posts = this.state.posts.map((post, key)=>{
    return (
        <Link to={"/"+post.id} key={post.id}>
            <Post 
                author={post.author} 
                title={post.title}
                clicked={()=>this.postSelectedHandler(post.id)}
            />
        </Link>
    )});
    }
    return(
      
        <section className="Posts">
                    {posts}
             </section>  
    );
}
}

export default Posts