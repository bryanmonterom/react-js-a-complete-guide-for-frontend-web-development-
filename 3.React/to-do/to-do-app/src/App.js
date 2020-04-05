import React from 'react';
import './App.css';
import DoneTasks from './components/DoneTasks/DoneTasks'
import PendingTasks from './components/PendingTasks/PendingTasks'
import TaskPendingImg from './homework.png'
import TaskDoneImg from './checkmark.png'
import ToDoData from './components/todoData'



class App extends React.Component 
{
  constructor()
  {
    super()

    this.state =
    {
      todos : ToDoData
    }

     this.statusHandler = this.statusHandler.bind(this)
  }

  componentDidMount()
  {
    console.log('Ya se monto')
  }

  statusHandler = (id) =>{
    console.log(this.state);
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return{
          ...todo,
          completed:!todo.completed
        }
      }
      return todo
  });

    this.setState({  
      todos: updatedTodos
  });
}



render(){
  // let trueDrawer = this.state.completed.map(item =>  <DoneTasks key={item.id} task={item}/>)
  let trueDrawer =
   this.state.todos.filter(item => item.completed).map(item =><DoneTasks key={item.id} task={item} statusHandler = {this.statusHandler}/>)
  let pendingDrawer = this.state.todos.filter(item => !item.completed).map(item =>  <PendingTasks key={item.id} task={item} statusHandler = {this.statusHandler}/>)


           

  return (    <div className="container withMargin">
      <div className="row">
        <div className="col-6">
          <div className ="PendingTasksWrapper">
            {pendingDrawer}
            <div class="row">
              <img src={TaskPendingImg} alt="task-pending"></img>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className ="DoneTasksWrapper">
          {trueDrawer}
                     <div class="row">
              <img src={TaskDoneImg} alt="task-pending"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
