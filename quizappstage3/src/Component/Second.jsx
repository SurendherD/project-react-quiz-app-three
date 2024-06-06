import React, { Component } from 'react';
import '../App.css';
import questions from './quizQuestion.json';
import {NavLink} from 'react-router-dom';
import Third from './Third';

export default class Second extends Component {
    constructor(props){
      super(props);
      this.state={
        questions:questions,
        currentQuestion:{},
        nextQuestion:{},
        prevQuestion:{},
        currentQuestionIndex:0,
        correct:0,
        wrong:0,
        attempt:0
      }

      this.handelOption=this.handelOption.bind(this);
    }

    componentDidMount(){
      this.display(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.prevQuestion);
    }

    display=(questions,currentQuestion,nextQuestion,prevQuestion)=>{
      let {currentQuestionIndex}=this.state
      if(this.state.questions.length!==0){
      questions=this.state.questions;
      currentQuestion=questions[currentQuestionIndex];
      nextQuestion=questions[currentQuestionIndex+1];
      prevQuestion=questions[currentQuestionIndex-1];

      this.setState({
        currentQuestion,
        nextQuestion,
        prevQuestion,
      })
    }
    }

    nextbtn=()=>{
      if(this.state.nextQuestion !== undefined){
        this.setState(prevState=>({currentQuestionIndex:prevState.currentQuestionIndex+1}),()=>{this.display(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.prevQuestion)})
      }
    }

    prevbtn=()=>{
      if(this.state.prevQuestion !== undefined){
        this.setState(prevState=>({currentQuestionIndex:prevState.currentQuestionIndex-1}),()=>{this.display(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.prevQuestion)})
      }

    }

    quitbtn(){
      if(window.confirm("Are you sure you Want to quit?")){
        window.location.reload(false)
      }  
    }

    handelOption(option){
        const{currentQuestion,currentQuestionIndex}=this.state;
        console.log(option);
        console.log(currentQuestion.answer);

        if(option === currentQuestion.answer){
            this.setState((prevState) => ({
                correct: prevState.correct + 1
            }));

            this.setState((prevState) => ({
                attempt: prevState.attempt + 1
            }));

            alert(" Correct Answer");
            if(currentQuestionIndex<14){
                this.nextbtn();
                localStorage.setItem('score',this.state.correct)
                localStorage.setItem('attempt',this.state.attempt)
            }else{
                console.log(currentQuestionIndex)
                localStorage.setItem('score',this.state.correct)
                localStorage.setItem('attempt',this.state.attempt)

            }     


        }
        else{
            this.setState((prevState) => ({
                wrong: prevState.wrong + 1
            }));

            this.setState((prevState) => ({
                attempt: prevState.attempt + 1
            }));

            alert("Wrong Answer")
            if(currentQuestionIndex<14){
                this.nextbtn();
                localStorage.setItem('wrongscore',this.state.wrong)
                localStorage.setItem('attempt',this.state.attempt)
            }else{
                localStorage.setItem('wrongscore',this.state.wrong)
                localStorage.setItem('attempt',this.state.attempt)
            }     

        }

    }


  render() {
    const {currentQuestion,currentQuestionIndex}=this.state;
    return (
        <div className='container'>
          <h2 className='q'>Question</h2>

          <div>
            <span className='questionNo'>{currentQuestionIndex+1} of 15</span>
            <h2 className='q'>{currentQuestion.question}</h2>
          </div>

          <div className='optionBox'>
            <p className='option' onClick={()=>this.handelOption(currentQuestion.optionA)}>{currentQuestion.optionA}</p>
            <p className='option' onClick={()=>this.handelOption(currentQuestion.optionB)}>{currentQuestion.optionB}</p>
          </div>

          <div className='optionBox'>
            <p className='option' onClick={()=>this.handelOption(currentQuestion.optionC)}>{currentQuestion.optionC}</p>
            <p className='option' onClick={()=>this.handelOption(currentQuestion.optionD)}>{currentQuestion.optionD}</p>
          </div>

          <div className='buttonBox'>
            <button className='btn pbtn' onClick={this.prevbtn}>Previous</button>
            <button className='btn nbtn' onClick={this.nextbtn}>Next</button>
            <button className='btn qbtn' onClick={this.quitbtn}>Quit</button>
            <NavLink to='/result' className='btn fbtn'>Finish</NavLink>
          </div>

        </div>
    )
  }
}