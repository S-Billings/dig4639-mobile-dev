import React from "react";

class CardInput extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.addlist}>
                <lable>Title: </lable>
                <input type= "text" name = "listTitle" id="newListTitle"/>
                <label>Content: </label>
                <input type = "text" name = "listContent" id="newListContent"/>
                <hr/>
                <button type = "submit">+ Add a Task</button>
                <button type = "reset">Reset Fields</button>
            </form>
        );
    }
}

export default CardInput;