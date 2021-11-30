let currentMessageId = 1
function handleMessage(socket,userIds) {
    socket.on('message',MessageText => {

        const userId = userIds[socket.id]
        const message = createMessage(userId,MessageText)
        console.log(MessageText)
        socket.broadcast.emit('message',message)
      })
}

function createMessage(userId,messageText) {

    return {
      _id: currentMessageId++,
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: userId,
        name: 'Test User',
        avatar: 'https://placeimg.com/140/140/any',
      }
    }
    }


    module.exports = {handleMessage} 