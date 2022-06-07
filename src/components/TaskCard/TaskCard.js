import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

function TaskCard(props) {




  return (
    <View>
        <Text>{props.task.title}</Text>
   </View>
    
  )
}

export default TaskCard