// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (roomname) {
    if (!Rooms._data.has(roomname)) {
      Rooms._data.add(roomname);
      RoomsView.renderRoom(roomname);
    }
  },

  update: function (rooms) {
    Rooms._data.clear();
    rooms.sort();
    rooms.forEach((room) => {
      Rooms._data.add(room);
      RoomsView.renderRoom(room);
    });
  }
};