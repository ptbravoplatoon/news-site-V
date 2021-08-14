import {Component} from 'react'

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
   }

   handleSubmit = (e) => {
     e.preventDefault()
     console.log(this.state.username, this.state.password)
   }


  render() { 
    return ( 
      <div>
      <h2>Login Page</h2>
      {this.state.message && <h3 style={ {color:"red"} } >{this.state.message}</h3>}

      <form onSubmit={this.handleSubmit}>
        <label htmlFor={"username"}>Username:</label>
        <input onChange={this.handleChange} name="username" type="text" value={this.state.username} />
        <label htmlFor={"password"}>Password:</label>
        <input onChange={this.handleChange} name="password" type="password" value={this.state.password} />
        <input type="submit" value="Submit" />
      </form>

      </div>
     );
  }
}
 
export default LoginPage;