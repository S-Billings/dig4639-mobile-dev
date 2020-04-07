import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import questions from "./components/questions/questions.json";

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2

class QuizQuestion extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.question}</Text>
        {this.props.answers.map((v,i)=>
        <Button title={v.text} 
          onPress={()=> this.props.nextQuestion(v.correct)} 
          key={i}></Button>)}
      </View>
    )
  }
}

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      titleText: "Answer these questions because I made them",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0,
      questionIndices: [0,1,2,3,4]
    }
    this.timeLimit = TIME_LIMIT;
  }
  nextQuestion(correct){
    console.log("QUESTION ANSWERED")

    if(correct){
      this.setState({score: this.state.score + 1})
    }
    if(this.state.questionIndices.length === 0){
        console.log("ANSWERS RECORDED")
        this.setState({currentState: FINAL_STATE})
    } else{
      clearInterval(this.timer)
      console.log(this.state.currentQuestion)
      const index = Math.floor(Math.random() * this.state.questionIndices.length)
      const questionNumber = this.state.questionIndices[index]
      const newArray = this.state.questionIndices.filter(
          (v, i) => index != i)
      this.setState({
        titleText: "You answered X",
        currentState: QUESTION_STATE,
        currentQuestion: questionNumber,
        questionIndices: newArray
      })
    }
  }
  countdown() {
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit) {
      this.setState({
        titleText: 'Starting the Quiz',
        counter: this.state.counter + 1
      })
    } else {
      this.setState({
        titleText: "Beginning Quiz!",
        currentState: QUESTION_STATE,
        counter: 0
      })
    if(this.state.currentState == TITLE_STATE) {
				this.timer = setInterval(() => this.countdown(), 1000)
				clearInterval(this.timer)
			} else {
				this.setState({titleText: "You answered!"})
			}
		}
}
  start(){
    //prop name: value
    console.log("Booting up")
    const array = questions.map((v,i) => {
      return i
    })
    const index = Math.floor(Math.random() * array.length)
    const questionNumber = array[index]
    const newArray = array.filter(
      (v, i) => index != i)
    this.setState({
      titleText: "Booting up the Quiz", 
      counter: 0, 
      currentState: QUESTION_STATE, 
      currentQuestion: questionNumber, 
      questionIndices: newArray 
    })
    this.timer = setInterval(()=> this.countdown(), 1000)

  }
  
  render(){
    return(
      <View style ={styles.container}>
        <Text style={styles.timer}>{this.timeLimit - this.state.counter}</Text>
        {((this.state.currentState === TITLE_STATE) 
        ? 
        <>
          <Text style = {styles.text}>{this.state.titleText}</Text>
          <Button 
          title= "Click here to begin" 
          color ="#8EA8C3"
          padding = '5'
          onPress ={() => this.start()}/>
        </>
        :
          (this.state.currentState === QUESTION_STATE) 
            ? <QuizQuestion 
            answers= {questions[this.state.currentQuestion].answerOptions}  
            question={questions[this.state.currentQuestion].question}
            //if the user answers correctly, proceed to the next question
            nextQuestion= {(correct)=> this.nextQuestion(correct)
            }/>
            : 
            <Button 
            title= "Click here to restart" 
            color ="#8EA8C3"
            onPress ={() => this.start()}/>
        )}
        <Text style={styles.score}>
          Score: {this.state.score}
        </Text>
      </View>
    )
  }
}


function App() {
  //no objects in react
  return (
    <View style={styles.container}>
      <LandingPage></LandingPage>
      
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC7178',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 50
  },
  score:{
    fontSize:25,
    padding: 5,
    margin: 10,
    color:'white',
   


  },
  text:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: 10, 
    padding: 5,
    fontStyle: 'helvetica'
  }
});
