import React from 'react';
const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "billings",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
  }

class addContact extends React.Component {

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.numberInput = React.createRef();

    this.state = {
      value: " ",
      value2: " "
    }
  }


      newEntry = () => {
        let newHeaders = {...HEADERS,
          "method" : "POST",
          body: JSON.stringify({
            name: this.nameInput.current.value,
            number: this.numberInput.current.value
          })}
          fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
          .then((res) => res.json())
          .then((data) => {
              this.setState({value:this.nameInput.current.value})
              this.setState({value:this.numberInput.current.value})
        }, [])
      }

  handleSubmit = b => {
    b.preventDefault();
    this.newEntry();
  }
  

  
  render() {

    return (
      <div>
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
  
            <label htmlFor="name">Full Name</label><br/>
            <input type="text" ref={this.nameInput} id ="name" /><br/>

            <label htmlFor="name">Number</label><br/>
            <input type="text" ref={this.numberInput} id ="number" /><br/>

            <button type="submit">Submit</button>
         </form>
      </div>
    );
  }
}

export default addContact;