import React, {Component} from "react";
import styled from 'styled-components'


class Person extends Component
{
    render(){
    const StyledDiv= styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

@media (min-width: 500px){
    width: 450px;
}`;
    return(
        <StyledDiv>
            <p onClick={this.props.delete}>My Name is {this.props.name}, i'm {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" name="name" value={this.props.name} onChange = {this.props.change}/>
            </StyledDiv>
    )
}
}
export default Person