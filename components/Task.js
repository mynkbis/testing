import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Detail=(props)=>{
return(
    <View style={styles.items}>
      <View style={styles.itemsLeft}>
<TouchableOpacity style={styles.square}></TouchableOpacity>
    
        <Text style={styles.itemstyle}>{props.text}</Text>
    </View>

    <View style={styles.RightItem}></View>
    </View>
)
}

const styles=StyleSheet.create({
    items:{
        backgroundColor: '#fff',
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        marginBottom:20,
    },
itemsLeft:{
    flexDirection:"row",
    alignItems:"center",
    flexWrap: "wrap",

},
square:{
width:20,
height:24,
backgroundColor:'#55bcf6',
opacity:0.4,
},


itemstyle:{

    maxWidth:'80%'

},
RightItem:{
    width:12,
    height:12,
    borderColor: 'black',
    borderWidth:2,
    borderRadius:5,

}

})

export default Detail;