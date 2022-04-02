// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (roomname, callback = ()=>{}) {
    if (!Rooms._data.has(roomname)) {
      Rooms._data.add(roomname);
    }

    callback();
  },

  update: function (messages) {
    messages.forEach((message) => {
      Rooms._data.add(message.roomname);
    });
    RoomsView.render([...Rooms._data]);
  }
};