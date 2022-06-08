import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import tw from 'twrnc';
import Feather from 'react-native-vector-icons/Feather';

function TaskCard(props) {

 

  return (
    <View style={tw`bg-white mx-2 py-2 rounded-md flex-row`}>
        <Text style={tw`text-black ml-3 font-bold text-lg flex-1 w-64`}>{props.task.title}</Text>
        <Feather onPress={()=>props.deleteCard(props.task.id)}  name={'delete'} solid style={tw`text-red-500 text-2xl mr-2`} />
   </View>
    
  )
}

export default TaskCard