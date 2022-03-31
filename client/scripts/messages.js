// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

/*
I:
O:
Edge:
Constraint:
Strategy:
Psuedo:
*/

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  add: function(message) {
    Messages._data = Messages._data.concat(message);
    console.log('messages datastructure', Messages._data);
  }

};

/*
 it('should try to send a message upon clicking submit', function() {
      sinon.spy(Parse, 'create');

      App.initialize();
      $('#message').val('Why so many Mel Brooks quotes?');
      $('form .submit').trigger('submit');
      expect(Parse.create.called).to.be.true;

      Parse.create.restore();
    });
*/
