import React from 'react';
import CardList from "./Components/CardList";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {menu: 0};

  }

  changeMenu = (event, menu) => {

    event.preventDefault();

    this.setState({menu: menu});

  }

  showMenu() {

    let menu = "";

    if(this.state.menu === 0) {

      menu = <div>
        <h1>Welcome to the Task Maker!</h1>
        <br />
        <button className="button" onClick={(event) => {this.changeMenu(event, 1)} }>Change Task</button>
      </div>;

    }
    
    if(this.state.menu === 1) {

      menu = <CardList changemenu={this.changeMenu} />;

    }

    return menu;

  }

  render() {
    return (
      <div>
        {this.showMenu()}
      </div>
    );
  }

}

export default App;
