import React from "react";

class viewContact extends React.Component{
    constructor(props){
        super(props);
        
        this.state = { contacts: []};
    }

    componentDidMount() {

        fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "billings"}})
        .then((res) => res.json())
        .then((data, ) => {
            console.log(data)
          this.setState({contacts: data.contacts});
        });
    
      }

      render(){
          return(
              <div>
                  <h3>List of Contacts</h3>

                  {
                      this.state.contacts.map((value, index)=> {
                          return  <p key={index}> {value.name}, {value.number} </p>;
                      })
                  }
              </div>
          );
      }
}

export default viewContact;