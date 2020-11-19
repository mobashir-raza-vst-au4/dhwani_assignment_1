import './App.css';
import Input from './Components/Input';
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    input1: "",
    input2: "",
    input3: "",
    input4: ""
  }

  handleInput1 = (e) => {
    var value = e.target.value;
    if(value.length === 16) {
      var number = value.match(/.{1,4}/g);
      this.setState({
        input1: number[0],
        input2: number[1],
        input3: number[3],
        input4: number[3]
      })
      this.forthCard.focus();
    }else if(value.length <= 4) {
      this.setState({
        input1: value
      })
      if(value.length === 4) {
        this.secondCard.focus();
      }
    }else{
      return false
    }
    
  }

  handleInput2 = (e) => {
    let value = e.target.value;
    if(value.length > 4){
      return false;
    }
    this.setState({
      input2: value
    })
    if(value.length === 4) {
      this.thirdCard.focus();
    }
    if(value.length < 1){
      this.firstCard.focus();
    }
  }

  handleInput3 = (e) => {
    let value = e.target.value;
    if(value.length > 4){
      return false;
    }
    this.setState({
      input3: value
    })
    if(value.length === 4) {
      this.forthCard.focus();
    }
    if(value.length < 1){
      this.secondCard.focus();
    }
  }

  handleInput4 = (e) => {
    let value = e.target.value;
    if(value.length > 4) {
      return false
    }
    this.setState({
      input4: value
    })
    if(value.length < 1){
      this.thirdCard.focus();
    }
  }

  render() {
    return (
      <div className="parent_input">
        <span>Card Number*</span>
        <Input reference={(number) => {this.firstCard=number}} id="txt1" value={this.state.input1} onChange={(e) => {this.handleInput1(e)}} />
        <Input reference={(number) => {this.secondCard=number}} id="txt2" value={this.state.input2} onChange={(e) => {this.handleInput2(e)}} />
        <Input reference={(number) => {this.thirdCard=number}} id="txt3" value={this.state.input3} onChange={(e) => {this.handleInput3(e)}} />
        <Input reference={(number) => {this.forthCard=number}} id="txt4" value={this.state.input4} onChange={(e) => {this.handleInput4(e)}}/>
      </div>
    )
  }
}