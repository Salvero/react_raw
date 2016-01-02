var contacts = [
  { key: 1, name: "Mike Johnson", email: "mike@abc.com"},
  { key: 2, name: "Joe Toe", email: "joe@abc"},
  { key: 3, name: "Bob"}
]

var listElements = contacts
 .filter(function(contact) {
   return contact.email;
 })
 .map(function(contact){
   return React.createElement('li', {key: contact.key},
      React.createElement('h2', {}, contact.name),
      React.createElement('a', {href: 'mailto:'+contact.email}, contact.email)
    )
 })


var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('ul', {}, listElements)
);

// var rootElement =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Contacts'),
//     React.createElement('ul', {},
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Mike Johnson'),
//         React.createElement('a', {href: 'mailto: james@abc.com'}, 'james@abc.com')
//       ),
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Joe Toe'),
//         React.createElement('a', {href: 'mailto: joe@abc.com'}, 'joe@abc.com')
//       )
//     )
//   );

ReactDOM.render(rootElement, document.getElementById('react-app'));
