// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    //take messages and put into chat
  },

  renderMessage: function(message) {
    var $messageDiv = $(MessageView.render(message));
    $('#chats').append($messageDiv);
  },

  handleClick: function(event) {
    Friends.toggleStatus(event);
  }

};