import React from 'react';
import Profile from './components/viewProfile';
import AddContact from './components/addContact';
import RemoveContact from './components/removeContact';
import Contacts from './components/viewContact';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <body>
        <div class="un">
          <div class="professional">
            <Contacts/>
            <AddContact/>
            <RemoveContact/>
            <Profile/>

          </div>
        </div>
      </body>
    );
  }
}

export default App;
