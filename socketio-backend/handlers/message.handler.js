let currentMessageId = 1

function createMessage(user,messageText) {

    return {
      _id: currentMessageId++,
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: user.userId,
        name: user.username,
        avatar: user.avatar,
      }
    }
    }
function handleMessage(socket,users) {
    socket.on('message',MessageText => {

        const user = users[socket.id]
        const message = createMessage(user,MessageText)
        console.log(MessageText)
        socket.broadcast.emit('message',message)
      })
}




    module.exports = {handleMessage} 