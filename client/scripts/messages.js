// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  _data: [],

  addAll: function(messages) {
    if (Messages._data.length === 0) {
      Messages._data = messages;
      Rooms.update(Messages._data);
    } else {
      Messages.update(messages);
    }
  },
  update: function(messages) {
    console.log('before _data', Messages._data);
    var chatIDs = [];
    var newMessages = [];
    Messages._data.forEach(message => { chatIDs.push(message.message_id);});
    messages.forEach((message) => {
      if (!chatIDs.includes(message.message_id)) {
        Messages._data.push(message);
        newMessages.push(message);
      }
    });
    if (chatIDs.length > 0) {
      Rooms.update(newMessages);
    }
    console.log('new mess', newMessages);
    console.log('after _data', Messages._data);
  }

};