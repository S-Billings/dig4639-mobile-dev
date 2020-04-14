import React from "react";
const HEADERS={
    "Method":"GET",
    "headers":{
        "API":"billings",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class removeContact extends React.Component{
    constructor(props){
        super(props);

        this.input = React.createRef();

        this.state = this.state={
            value: '',
        }
    }

    delete = () =>{
        let newHeader ={
            ...HEADERS,
            "method":"POST",
            body: JSON.stringify({
                position:this.input.current.value,
            })
        }

        fetch("http://plato.mrl.ai:8080/contacts/remove", newHeader).then((res)=> res.json()).then((data)=>{
            this.setState({value: this.input.current.value})
        }
        ,[])
    }

    handleSubmit = e => {
        e.preventDefault();
        this.delete()
    }

    render(){
        return(
            <div>
                <h3>Delete Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter name</label>
                    <br/>
                    <input type = "text" ref={this.input} id= "position"/>
                    <br/>
                    <button type= "submit">Submit- Remove Contact</button>
                    </form>
            </div>
        );
    }
}
export default removeContact;