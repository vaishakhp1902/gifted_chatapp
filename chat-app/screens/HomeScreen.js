
import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState,useRef} from 'react';
import { Text, View,TextInput } from 'react-native';
import io from 'socket.io-client'
import { GiftedChat } from 'react-native-gifted-chat';

import JoinScreen from './JoinScreen';

export default function HomeScreen() {

    const[recvMessages,setRecvMessages] = useState([])
    const [hasJoined,setHasJoined] = useState(false)
    const socket = useRef(null)

  useEffect(() =>{
  socket.current =  io("http://192.168.1.3:3001")
  socket.current.on('message',message =>{


      
      setRecvMessages(prevState=> GiftedChat.append(prevState,message))

  })



},[])

  const onSend = (messages) => {
      console.log(messages)
      socket.current.emit('message',messages[0].text)
      setRecvMessages(prevState=>GiftedChat.append(prevState,messages))
      //setmessageToSend("")


  }

  const joinChat = username => {
    socket.current.emit('join',username)
    setHasJoined(true)
  }



  return (
    <View style={{flex:1}}>
    {hasJoined ?  <GiftedChat
      renderUsernameOnMessage
      messages={recvMessages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    /> : <JoinScreen joinChat={joinChat}/>}
   
  </View>
  );
}
