import {Component} from 'react'

// Class solution:
class LoginPage extends Component {
  state = { 
    username: '',
    password: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({message: ''})
    const field = e.target.name
    const value = e.target.value

    if (field === "username") {
      if(value.length < 5) {
      this.setState({message: "usernames must be at least 5 characters"})
      }
      this.setState({username: value})
    } else {
      this.setState({password: value})
    }

    if (field === "password") {
      if(value.length < 8) {
      this.setState({message: "passwords must be at least 8 characters"})
      }
      this.setState({password: value})
    } else {
      this.setState({username: value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username, this.state.password)
  }


  render() { 
    return ( 
      <div>
      <h2>Login Page</h2><br></br><br></br>
      {this.state.message && <h3 style={ {color:"red"} } >{this.state.message}</h3>}<br></br><br></br>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor={"username"}>Username:</label><br></br>
        <input onChange={this.handleChange} name="username" type="text" value={this.state.username} /><br></br><br></br>
        <label htmlFor={"password"}>Password:</label><br></br>
        <input onChange={this.handleChange} name="password" type="password" value={this.state.password} /><br></br><br></br>
        <input type="submit" value="Submit" />
      </form>

      </div>
    );
  }
}

export default LoginPage; 