import React from 'react';
import './App.css';
import DoneTasks from './components/DoneTasks/DoneTasks'
import PendingTasks from './components/PendingTasks/PendingTasks'
import TaskPendingImg from './homework.png'
import TaskDoneImg from './checkmark.png'
import ToDoData from './components/todoData'
import TaskOrganizer from './components/TaskOrganizer/TaskOrganizer';




function App() {
  return (
    <div className="container withMargin">
      <div className="row">
        <div className="col-6">
          <div className ="PendingTasksWrapper">
            < PendingTasks/>
            <div class="row">
              <img src={TaskPendingImg} alt="task-pending"></img>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className ="DoneTasksWrapper">
            < DoneTasks/>
            <TaskOrganizer/>
              <div class="row">
              <img src={TaskDoneImg} alt="task-pending"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
