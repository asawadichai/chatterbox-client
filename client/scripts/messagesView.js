// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on('click', MessagesView.handleClick);
  },

  render: function(messages) {
    MessagesView.$chats.empty();
    messages.forEach(element => MessagesView.renderMessage(element));
  },

  renderMessage: function(message) {
    message.text = MessageView.sanitize(message.text);
    var $messageDiv = $(MessageView.render(message));
    $('#chats').append($messageDiv);
  },


  handleClick: function(event) {
    Friends.toggleStatus(event);
  }

};