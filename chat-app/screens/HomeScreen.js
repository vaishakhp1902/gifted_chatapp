
import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState,useRef} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import io from 'socket.io-client'

export default function HomeScreen() {

    const [messageToSend,setmessageToSend] = useState('')
    const[recvMessages,setRecvMessages] = useState([])
    const socket = useRef(null)

  useEffect(() =>{
  socket.current =  io("http://192.168.1.3:3001")
  socket.current.on('message',message =>{
      setRecvMessages(prevState=> [...prevState,message])

  })
},[])

  const sendMessage  = () => {
      socket.current.emit('message',messageToSend)
      setmessageToSend("")


  }


  const textOfRecvMessages = recvMessages.map(msg=> <Text key={msg}>{msg}</Text>)
  return (
    <View style={styles.container}>
      {textOfRecvMessages}
      <TextInput value={messageToSend} onChangeText={
          (text) =>setmessageToSend(text)
      } placeholder='enter chat message'  onSubmitEditing={sendMessage}></TextInput>
      <StatusBar style="auto" />
    </View>
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
