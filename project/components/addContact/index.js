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

    this.input = React.createRef();
    this.input2 = React.createRef();

    this.state = {
      value: '',
      value2: ''
    }
  }


      newEntry= () => {
        let newHeaders = {...HEADERS,
          "method" : "POST",
          body: JSON.stringify({
            name: this.input.current.value,
            number:this.input2.current.value
          })}
          fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
          .then((res) => res.json())
          .then((data) => {
              this.setState({value:this.input.current.value})
              this.setState({value:this.input2.current.value})
              console.log(data)
        }
        , [])
      }

  handleSubmit = e => {
    e.preventDefault();
    this.newEntry()
  }
  

  
  render() {

    return (
      <div>
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
  
            <label htmlFor="name">Full Name</label><br/>
            <input type="text" ref={this.input} id ="name" /><br/>

            <label htmlFor="name">Number</label><br/>
            <input type="text" ref={this.input} id ="number" /><br/>

            <button type="submit">Submit</button>
         </form>
      </div>
    );
  }
}

export default addContact;