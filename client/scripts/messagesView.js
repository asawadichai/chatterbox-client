// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on('click', MessagesView.handleClick);
  },

  render: function(messages) {
    MessagesView.$chats.empty();
    console.log('render', messages);
    messages.forEach((element) => { MessagesView.$chats.append(MessageView.render(element)); });

  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(MessageView.render(message));
  },


  handleClick: function(event) {
    Friends.toggleStatus(event);
  }

};