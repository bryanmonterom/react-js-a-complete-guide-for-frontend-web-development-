import React from 'react'

class Forms extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            firstName: '',
            lastNaME: '',
            isFriendly: false,
            gender:'',
            favColor:''
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler =(event) =>
    {
        const {name, value, type, checked} = event.target;

        type === "checkbox" ? this.setState({[name]:checked}) :
        this.setState({
            [name]: value
        })
    }

    render()
    {
        return(
        <div>
            <input type="text"  name="firstName" onChange={this.changeHandler} placeholder="Name"/>
            <input type="text" name="lastNaME"value={this.state.lastNaME} onChange={this.changeHandler} placeholder="LastName"/>
 <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.changeHandler}
                    />            <input type="radio" onChange={this.changeHandler} checked={this.state.gender === "male"} value="male" name="gender"/>
            <input type="radio" onChange={this.changeHandler} checked={this.state.gender === "female"} value="female" name="gender"/>
            <select name="favColor" value={this.state.gender} onChange={this.changeHandler}>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>

            </select>
        <h1>{this.state.firstName} {this.state.lastNaME}</h1>
        <h1>{this.state.isFriendly}</h1>
        <h1>{this.state.favColor}</h1>
        <h1>{this.state.gender}</h1>



        </div>)
    }
}

export default Forms;