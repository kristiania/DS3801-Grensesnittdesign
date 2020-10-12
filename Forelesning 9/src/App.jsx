import React, { Component } from 'react';

import Button from './Button';

class App extends Component {
  // State - variabler eller funskjoner innad i en klasse/komponent
  state = {
    name: 'Henrik',
    age: 29
  }

  handleNameChange = () => {
    const newName = 'Kristian';
    this.setState({
      name: newName
    })
  };

  render = () => (
    <div>
      <h1 className="header-title">Hello {this.state.name}!</h1>
      <Button 
        title="Endre Navn"
        onClick={this.handleNameChange}
        className='change-name-button'
      />
    </div>
  );
}

export default App;
