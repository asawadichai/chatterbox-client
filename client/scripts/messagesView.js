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
    //console.log('render fetch', Messages.fetch());
    // TODO: Render _all_ the messages.
    // empty the chats
    // this.$chats.empty();
    // get the messages
    // append the messages
    // messages.forEach(function(message) {
    //  messageDiv
    //})
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