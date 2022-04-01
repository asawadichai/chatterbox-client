// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

/*
I:
O:
Edge:
Constraint:
Strategy:
Psuedo:
*/

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(
    '<div class="chat">' +
      '  <div class="username">' + '<%= username %>:</div>' +
      '  <div><%= text %></div>' +
      '  <div><%= roomname %></div>' +
    '</div>'
  ),

  sanitize: function(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27',
      "/": "&#x2F",
    };
    const reg = /[&<>"'/]/ig;
    return text.replace(reg, (match)=>(map[match]));
  }

};