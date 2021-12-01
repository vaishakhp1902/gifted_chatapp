import React from "react";
import {View,Text,TextInput,Image,Button, Platform ,KeyboardAvoidingView} from  'react-native'

export default function JoinScreen() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>


        <Image resizeMode='contain' style={{flex:1}} source={require('../assets/chat-icon.png')} />

        <View style={{flex:1,justifyContent:'space-around',textAlign:'center'}}>

        <TextInput style={{fontSize:30}} placeholder='Enter username' />
        
        <Button title='Join Chat'/>
        </View>
        {Platform.OS === 'ios' && <KeyboardAvoidingView behavior='padding' />}
        
        </View>
    )
}