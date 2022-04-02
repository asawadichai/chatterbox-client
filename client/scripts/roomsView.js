// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function(rooms) {
    RoomsView.$select.empty();
    rooms.forEach((room) => { RoomsView.renderRoom(room); });
  },

  renderRoom: function(roomname) {
    var $room = $(`<option value="${roomname}">${roomname}</option>`);
    $('#rooms select').append($room);
  },

  handleChange: function(event) {
    RoomsView.selectedRoom = event.currentTarget.value;
    var roomMessages = Messages._data.filter(message => message.roomname === RoomsView.selectedRoom);
    MessagesView.render(roomMessages);
  },

  handleClick: function() {
    var roomname = prompt('Please enter a roomname');
    Rooms.add(roomname, RoomsView.renderRoom(roomname));
  }

};
