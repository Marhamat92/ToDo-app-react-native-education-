import React,{useState} from 'react';
import {View, Text, SafeAreaView,FlatList,TextInput,TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import TaskCard from './components/TaskCard';


function App() {
const [tasks, setTasks] = useState([]);
const [taskTitle, setTaskTitle] = useState('')
const [taskCount, setTaskCount] = useState(0)
const taskName=({item})=>(<TaskCard deleteCard={deleteCard}  task={item}  />)

const addCard = () => {
  const newTask = {
    title: taskTitle,
    id: tasks.length + 1
  }
  setTasks([...tasks, newTask])
  setTaskCount(taskCount+1)
 
}

  const deleteCard = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    setTaskCount(taskCount-1)
  }

  
 


  return (
    <SafeAreaView style={tw`h-full bg-yellow-500`}>
      <View style={tw`flex-row  justify-between `}>
      <Text style={tw`text-white font-bold text-3xl ml-2 mt-2`}>Tasks</Text>
      <Text style={tw`text-white font-bold text-3xl mt-2 mr-2`}>{taskCount}</Text>
      </View>
      <FlatList 
      keyExtractor={(item)=>item.id.toString()}
      ItemSeparatorComponent={()=><View style={tw`h-1`}></View>}
      data={tasks}
      renderItem={taskName}
     
      />
     <TextInput
     style={tw`bg-white mx-3   text-black text-2xl mt-2`}
     onChangeText={(text) =>setTaskTitle(text)}
     />
     <View style={tw`mb-2`}>
     <TouchableOpacity
     style={tw`items-center justify-center h-16  py-2  mx-3 bg-green-500 rounded-b-md text-black text-2xl `}
     onPress={addCard}
     ><Text style={tw`text-white font-bold text-2xl`}>ADD TASK</Text></TouchableOpacity>
    </View>

      
     
    </SafeAreaView>
  );
}

export default App;
