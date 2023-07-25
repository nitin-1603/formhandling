
import React, { Component } from 'react'
import './App.css';
import Registration from './components/Registration';
import Greeting from './components/Greeting';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email : null,
      password : null,
      isRequired : false,
    }
  }

  formData=(event)=>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({name, email, password}, ()=>{
      console.log(name, email, password);
    });
  }

  render() {
    return (
      <>
      {
        this.state.isRequired ? (<Greeting/>) : (<Registration submit={this.formData}/>)
      }
      </>
    );
  }
}
export default App;

