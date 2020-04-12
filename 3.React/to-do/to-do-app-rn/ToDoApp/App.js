import React,{useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import TaskHandler from './components/TaskHandler/TaskHandler'

 const App = () => {
  

  const [status, setStatus]= useState(true)

  const toggler = ()=>
  {
    setStatus((prevCount)=>{return !prevCount})
  }
    return (
    <View style={styles.container}>
      <Switch value={status} onValueChange={toggler}></Switch>
      <TaskHandler/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
