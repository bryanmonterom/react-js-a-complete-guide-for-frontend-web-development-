import React, { Component } from 'react';
import ToDoData from '../../components/todoData'


class TaskOrganizer extends Component
{

    state=
    {
        pendingTask: [],
        doneTasks:[]
    };

    organizer = () =>
    {
        todoData.map((item,position)=> {
            return (

                item.completed === true ? this.setState(()=> {})
                f (item.completed === true)            {
            }
            );
        })
    }

     render()
     {
     console.log(this.state)
         return(
             <h1>Klk</h1>
         )
     }
}

 export default TaskOrganizer