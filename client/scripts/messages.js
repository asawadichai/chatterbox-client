// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  _data: {
    messages: [],
    friends: {},
    rooms: {}
  },

  add: function(messages) {
    Messages._data.messages = messages;
    messages.forEach(function (message) {
      if (Messages._data.rooms[message.roomname] === undefined) {
        Messages._data.rooms[message.roomname] = [message];
      } else {
        Messages._data.rooms[message.roomname].push(message);
      }
      if (Friends._data.has(message.username)) {
        if (Messages._data.friends[message.username] = undefined) {
          Messages._data.friends[message.username] = [message];
        } else {
          Messages._data.friends[message.username].push(message);
        }
      }
    });
    Rooms.update(Object.keys(Messages._data.rooms));
    //console.log('Messages ', Messages._data);
    RoomsView.render();
    MessagesView.render(Messages._data.messages);
  },

};