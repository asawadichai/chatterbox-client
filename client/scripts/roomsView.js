// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {

  },

  renderRoom: function(roomname) {
    console.log('render room');
    var $room = $('<option value=' + roomname + '>' + roomname + '</option>');
    $('#rooms select').append($room);
  },

  handleChange: function(event) {
    var selectedRoom = event.currentTarget.value;
    var roomMessages = Messages._data.rooms[selectedRoom];
    MessagesView.render(roomMessages);
  },

  handleClick: function() {
    var roomname = prompt('Please enter a roomname');
    Rooms.add(roomname);
  }

};
