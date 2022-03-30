// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (event) {
    console.log(event);
    console.log('$select', RoomsView.$select);
    //var room = event.target.
  }

};

/*
   it('should add a room when clicking add', function() {
      sinon.spy(Rooms, 'add');
      var prompt = window.prompt;
      window.prompt = sinon.stub().returns('testroom');

      App.initialize();
      $('#rooms').find('button').trigger('click');
      expect(Rooms.add.called).to.be.true;

      window.prompt = prompt;
      Rooms.add.restore();
    });
*/