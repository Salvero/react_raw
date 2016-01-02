var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Mike Johnson'),
        React.createElement('a', {href: 'mailto: james@abc.com'}, 'james@abc.com')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Joe Toe'),
        React.createElement('a', {href: 'mailto: joe@abc.com'}, 'joe@abc.com')
      )
    )
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));
