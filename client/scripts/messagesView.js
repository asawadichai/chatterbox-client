// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on('click', MessagesView.handleClick);
  },

  render: function(messages) {
    MessagesView.$chats.empty();
    messages.forEach((element) => { MessagesView.$chats.append(MessageView.render(element)); });
    MessagesView.friendClass();
    MessagesView.initialize();
  },

  friendClass: function() {
    Friends._data.forEach(friend => $('.username:contains("' + friend + '")').addClass('friend'));
  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(MessageView.render(message));
  },

  handleClick: function(event) {
    Friends.toggleStatus(event);
  }

};