import React from 'react';
import './App.css';
import DoneTasks from './components/DoneTasks/DoneTasks'
import PendingTasks from './components/PendingTasks/PendingTasks'


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
         <PendingTasks/>
        </div>
        <div className="col-6">
          <DoneTasks/>
        </div>
      </div>
    </div>
  );
}

export default App;
