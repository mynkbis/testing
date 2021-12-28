        import  {React , useState} from 'react';
        import { Keyboard, Platform, StyleSheet, Text, View } from 'react-native';
        import { KeyboardAvoidingView, TextInput } from 'react-native';
        import { TouchableOpacity } from 'react-native';
        import Detail from './components/Task';

        export default function App() {

          const [task, setTask]=useState();
          const [taskItems, setTaskItems]=useState([]);

          const addHanderTask=()=>{
            Keyboard.dismiss();
setTaskItems([...taskItems, task])
setTask(null);

          }
const taskcompleted=(index)=>{

  let copyValue=[...taskItems];
  copyValue.splice(index,1);  // going to remove that item from array
  setTaskItems(copyValue);
}
        return (
        <>
        <View style={styles.container}>
        <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}> Today's Task</Text>
        <View style={styles.items}> 
{
        taskItems.map((item,index)=>{
          return(
<TouchableOpacity key={index} onPress={()=>taskcompleted()}>

<Detail text={item}/> 
</TouchableOpacity>        
        )})
}        
        </View>
        </View>

        {/*write task from here*/}
        <KeyboardAvoidingView behavior={Platform.OS==='ios'? "padding":"height"}
        style={styles.writeTaskWrapper}> 

        <TextInput style={styles.input} placeholder={'Write your text' } value={task} onChangeText={text=>{setTask(text)}} ></TextInput>

        {/* will pop u keyboard for typing */}
        <TouchableOpacity onPress={()=>addHanderTask()}>
        <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
       </KeyboardAvoidingView>
        </View>
        </>
       );
        }

        const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        padding:10,
        marginBottom:20,
        // alignItems: 'center',

        },
        wrapper:{
        paddingTop:50,
        paddingHorizontal:20,
        marginBottom:20,
        },
        items:{ },
        sectionTitle:{
        fontSize:24,
        fontWeight:'bold',
        padding:10,

        },

        writeTaskWrapper:{
          margin:10,  
          position:'absolute',
          bottom:50,
          width:"100%",
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center'
        },
input:{
  paddingVertical:10,
  paddingHorizontal:15,
  width:250,
  backgroundColor: 'white',
  borderRadius:40,
  borderColor: 'black',
  borderWidth:1, 


},
addWrapper:{
  width:60,
  height:60,
  backgroundColor: "#fff",
  borderRadius:70,
  borderColor:'black',
  borderWidth:1,
  justifyContent:'center',
  alignItems:'center'

},
addText :{}


        });
