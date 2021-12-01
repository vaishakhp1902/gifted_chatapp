import React,{useState} from "react";
import {View,Text,TextInput,Image,Button, Platform ,KeyboardAvoidingView} from  'react-native'

export default function JoinScreen({joinChat}) {

    const [username,setUsername] = useState('')
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>


        <Image resizeMode='contain' style={{flex:1}} source={require('../assets/chat-icon.png')} />

        <View style={{flex:1,justifyContent:'space-around',textAlign:'center'}}>

        <TextInput style={{fontSize:30}} placeholder='Enter username' onChangeText={text=>setUsername(text)} value={username}/>

        <Button title='Join Chat' onPress={()=> joinChat(username)}/>
        </View>
        {Platform.OS === 'ios' && <KeyboardAvoidingView behavior='padding' />}
        
        </View>
    )
}