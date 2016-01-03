var contacts = [
  { key: 1, name: "Mike Johnson", email: "mike@abc.com", description: "Carpenter"},
  { key: 2, name: "Joe Toe", email: "joe@abc"},
  { key: 3, name: "Bob"}
]

var newContact = {name: "", email: "", description: ""}

ReactDOM.render(
  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('react-app')
)
