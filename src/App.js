import React,{useState} from 'react';
import {View, Text, SafeAreaView,FlatList} from 'react-native';
import tw from 'twrnc';
import TaskCard from './components/TaskCard';


function App() {
const [tasks, setTasks] = useState([])
const taskName=(item)=>{<TaskCard task={item} />}


  return (
    <SafeAreaView style={tw`h-full bg-purple-500`}>
      <View style={tw`flex-row  justify-between `}>
      <Text style={tw`text-white font-bold text-3xl ml-2 mt-2`}>Tasks</Text>
      <Text style={tw`text-white font-bold text-3xl mt-2 mr-2`}>O</Text>
      </View>

      <FlatList 
      data={tasks}
      renderItem={taskName}
      />
      
     
    </SafeAreaView>
  );
}

export default App;
