// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  $message: $('input#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var textInput = FormView.$message[0].value;
    var username = App.username;
    var roomname = RoomsView.selectedRoom;
    Parse.create({'roomname': roomname, 'text': textInput, 'username': username});
    MessagesView.renderMessage({'roomname': roomname, 'text': textInput, 'username': username});
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};