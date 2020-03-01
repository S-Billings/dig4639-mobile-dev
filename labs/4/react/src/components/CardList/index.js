import React from "react";
import Card from "../Card";
import CardInput from "../CardInput";
import data from "../../data.json";

class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {cards: data.cards};
    }

    removeTask = (event) =>{
        let datatitle = event.target.getAttribute("datatitle");

        let localCards = this.state.cards;

        let changedCards = localCards.filter((card)=>{
            return card.title !== datatitle;
        });
        
        this.setState({cards: changedCards});
    }
    addTask = (event) =>{
        event.preventDefault();
        
        let titleElement =document.getElementById("newTaskTitle");
        let contentElement = document.getElementById("newTaskContent");

        if (titleElement.value.length !== 0 && contentElement.value.length !== 0) {
            let newTask = {
                title: titleElement.value, 
                content: contentElement.value
            };
            
            titleElement.value = "";
            contentElement.value = "";

            let localCards = this.state.cards; 

            localCards.push(newTask);

            this.setState({cards: localCards});

        }
    }

    render(){
        return(
            <div>
                <CardInput addtask = {this.addTask}/>
                {
                    this.state.cards.map((card, index)=>{
                        return <Card
                        key = {index}
                        title = {card.title}
                        content = {card.content}
                        removetask ={this.removeTask}
                        />

                    })
                }
                <button className = "button" 
                onClick={(event)=>{this.props.changemenu(event,0)} }>Return</button>
            </div>
        );
    }
}

export default CardList;