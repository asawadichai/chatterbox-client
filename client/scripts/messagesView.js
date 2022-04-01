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
    //console.log(message);
    // if (message.text !== null && message.text !== undefined && message.text.length !== 0) {
    //   message.text = MessageView.sanitize(message.text);
    // }
    if (message.text !== null && message.text !== undefined && message.text.length !== 0) {
      var $messageDiv = $(MessageView.render(message));
      $('#chats').append($messageDiv);
    }
  },


  handleClick: function(event) {
    Friends.toggleStatus(event);
  }

};