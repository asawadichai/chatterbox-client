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
    var roomsList = Parse.readAll();
    console.log(roomsList);
  },

  renderRoom: function(roomname) {
    var $room = $('<option value=' + roomname + '>' + roomname + '</option>');
    $('#rooms select').append($room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function() {
    Rooms.add();
  }

};
