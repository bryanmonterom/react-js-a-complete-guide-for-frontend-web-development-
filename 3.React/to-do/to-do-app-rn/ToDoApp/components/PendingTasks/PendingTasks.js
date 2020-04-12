import React from 'react';
import { Text, View, Button, Switch } from 'react-native';


const PendingTaks = (props) =>
{
    console.log(props)

    return(

        <View>

            <Switch
                value={props.task.done}
            onValueChange={props.statusHandler(props.task.id)} 
                />
            <Text> {props.task.description}</Text>
            <Button title="Remove" onPress= {()=>props.remove(props.task.id)} />
            </View>

    )
}

export default PendingTaks;

