// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function(rooms) {
    //console.log('RoomsView.render: ', rooms);
    RoomsView.$select.empty();
    rooms.forEach((room) => { RoomsView.renderRoom(room); });
  },

  renderRoom: function(roomname) {
    console.log('renderROOM', Messages._data.rooms[roomname]);
    var $room = $(`<option value="${roomname}"</option>`);
    // if (roomname === RoomsView.selectedRoom) {
    //   $room = $(`<option value="${roomname}" selected>${roomname}</option>`);
    // }
    $('#rooms select').append($room);
  },

  handleChange: function(event) {
    RoomsView.selectedRoom = event.currentTarget.value;
    var roomMessages = Messages._data.rooms[RoomsView.selectedRoom];
    console.log('room messages', roomMessages);
    MessagesView.render(roomMessages);
  },

  handleClick: function() {
    var roomname = prompt('Please enter a roomname');
    Rooms.add(roomname);
    Messages._data.rooms[roomname] = [];
  }

};
