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
      //Rooms.sort();
      RoomsView.renderRoom(roomname);
    }
  },

  // sort: function () {
  //   var sortedRoom = Array.from(Rooms._data).sort();
  //   console.log(sortedRoom);
  //   Rooms._data = new Set();
  //   //sortedRoom.forEach(element => Rooms._data.add(element));
  // }
};