import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput, ScrollView } from 'react-native';
import DoneTasks from '../DoneTasks/DoneTasks'
import Pending from '../PendingTasks/PendingTasks'
let id=0


 export default class TaskHandler extends React.Component{
  
  constructor(props)
  {
    super(props)
    this.state =
    {
      todos : [],
    }

     this.addItem = this.addItem.bind(this)

  }




  addItem() {
    id++
    const text = `TODO number ${id}`
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id, description: text, done: true},
      ], 
    })
  }

//     addItem=()=>  {
//     let lastId = this.state.todos.length !== 0 ? this.state.todos[this.state.todos.length-1].id+1 :this.id=1;
//     var newItem = {id: lastId, description:this.state.text, completed: false}
//     console.log(newItem)
//     var newArray = [...this.state.todos, newItem]
//     this.setState({todos: newArray})
//     console.log(this.state.todos)

//   }


  

  removeItem= (id) =>
  {
    this.setState({todos: this.state.todos.filter(x => x.id !== id)})
  }

  statusHandler = (id) =>
  {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
          todo.done = !todo.done;
        return{
          ...todo,
        done: !todo.done,
        }
      }
      return todo
  });
    this.setState({  
      todos: updatedTodos
  });
}



toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }


  render()
  { 

    let doneTasks = this.state.todos.filter(a=> a.done =true).map((item)=> {return(<DoneTasks task={item} remove={this.removeItem} statusHandler={this.toggleTodo} />)});
    let pendingTasks = this.state.todos.filter(a=> a.done =false).map(item=> {return (<Pending task={item} remove={this.removeItem} statusHandler = {this.toggleTodo}/>)});

    return (
    <View >
    <Button title="Add New" onPress={this.addItem}/>
    <ScrollView>
        {doneTasks}
        {pendingTasks}
    </ScrollView>
    </View>
  );
}
}

