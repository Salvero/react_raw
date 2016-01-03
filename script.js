var contacts = [
  { key: 1, name: "Mike Johnson", email: "mike@bostonuniversity.edu", description: "Nurse Student"},
  { key: 2, name: "Joe Buck", email: "joe@yahoo.com", description: "Mechanic"},
  { key: 3, name: "Travis Hoss", email: "travis@synematic.com", description: "Supervisor"},
  { key: 4, name: "Bob"}
]

var newContact = {name: "", email: "", description: ""}

ReactDOM.render(
  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('react-app')
)
