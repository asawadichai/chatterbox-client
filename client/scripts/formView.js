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
    // Stop the browser from submitting the form
    event.preventDefault();
    var textInput = FormView.$message[0].value;
    var username = App.username;
    var roomname = FormView.$message[0].
    //console.log('input text', FormView.$message[0].value);
    //console.log(FormView.$form);
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    Parse.create({'roomname': 'reddit', 'text': textInput, 'username': username});
    //MessagesView.renderMessage({'roomname': 'reddit', 'text': textInput, 'username': 'Andrew'});
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};