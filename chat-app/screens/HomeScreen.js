
import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState,useRef} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import io from 'socket.io-client'
import { GiftedChat } from 'react-native-gifted-chat';

export default function HomeScreen() {

    const [messageToSend,setmessageToSend] = useState('')
    const[recvMessages,setRecvMessages] = useState([])
    const socket = useRef(null)

  useEffect(() =>{
  socket.current =  io("http://192.168.1.3:3001")
  socket.current.on('message',message =>{
      setRecvMessages(prevState=> [...prevState,message])

  })


  setRecvMessages([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ])
},[])

  const sendMessage  = () => {
      socket.current.emit('message',messageToSend)
      setmessageToSend("")


  }



  return (
    //<View style={styles.container}>
    <GiftedChat
      messages={recvMessages}
     // onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
