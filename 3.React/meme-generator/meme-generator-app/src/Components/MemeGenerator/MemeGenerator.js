import React,{Component} from "react";
import classes from "./resources/MemeGenerator.module.css";

class MemeGenerator extends Component
{
    constructor()
    {
        super()
        this.state=
         {
             topText:'',
             bottomText:'',
             randomImage:'http://i.imgflip.com/1bij.jpg',
             allMemesImg:[],
             isLoading:false
         }

    }
    componentDidMount()
    {
        this.getAllMemesImg();
    }

    changeHandler= (event) =>
    {
        const {value,name} = event.target;
        this.setState({[name]: value})
        console.log(this.state)
    }
    getNewImage=() => 
    {
        const actualArray = this.state.allMemesImg;
        const randomElement = actualArray[Math.floor(Math.random() * actualArray.length)];
        this.setState({randomImage: randomElement.url})
    }

    getAllMemesImg= () =>
     {
        this.setState({isLoading:true})
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data=>
        {
            const {memes}= data.data
            this.setState(
            {
                isLoading:false,
                allMemesImg:memes
            })
        })
     }
    render()
    {
      return(
            <div className="MainDiv">
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col">
                    <input type="text" className="form-control"name="topText" value={this.state.topText} onChange={this.changeHandler} placeholder="Top text"/>
                    </div>
                    <div className="col">
                    <input type="text" name="bottomText" className="form-control" value={this.state.bottomText} onChange={this.changeHandler} placeholder="Bottom Text"/>
                    </div>
                    <div className="col">
                    <button type="button" className="btn btn-lg btn-info" onClick={this.getNewImage}>Generate Meme</button>
                    </div>
                    </div>
                    <div className="row">
                        <div class="col-12">
                        <div className={classes.meme} >
                        <img  src={this.state.randomImage} alt="random meme"/>
                        <h2 className={classes.top}>{this.state.topText}</h2>
                        <h2 className={classes.bottom}>{this.state.bottomText}</h2>
                        </div>
                        </div>
                        
                    </div>

                </form>

            </div>
            </div>
            )
    }
}

export default MemeGenerator

