import React, { Component } from 'react';

class LoginPage extends Component{
  
  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Email:", event.target[0].value)
    console.log("pw", event.target[1].value)
  }
  
  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label> Email: 
            <input type="text"/>
          </label>
          <br/>
          <label>Password:
            <input type="password"/>
          </label>
          <input type="submit" value="Submit" />       
        </form>
      </div>
    )
  }
}

export default LoginPage