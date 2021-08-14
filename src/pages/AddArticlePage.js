import {Component, useState} from 'react'
import {addArticle} from '../api/ArticlesAPI'

// Class solution:
class AddArticlePage extends Component {
  state = { 
    title: "",
    byline: "",
    abstract: "",
    message: ""
  }

  handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    if(field === "title") {
      this.setState({title: value})
    } else if (field === "byline") {
      this.setState({byline: value})
    } else {
      this.setState({abstract: value})
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const articleObject = {
      title: this.state.title,
      byline: this.state.byline,
      abstract: this.state.abstract
    }
    const response = await addArticle(articleObject)
    console.log(response)
    if(response.error) {
      this.setState({message: response.error.message})
    } else {
      this.setState({message: `${response.title} submitted`})
    }
  }

  render() { 
    return (
      <div>
        <h2>Add Article Page</h2><br></br><br></br>
        {this.state.message &&
          <h3>{this.state.message}</h3>
        }<br></br><br></br>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={"title"}>TITLE:</label><br></br>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title} /><br></br><br></br>
          <label htmlFor={"byline"}>BYLINE:</label><br></br>
          <input onChange={this.handleChange} type="text" name="byline" value={this.state.byline} /><br></br><br></br>
          <label htmlFor={"abstract"}>ABSTRACT:</label><br></br>
          <input onChange={this.handleChange} type="text" name="abstract" value={this.state.abstract} /><br></br><br></br>
          <input type="submit" value="Submit"/><br></br>
        </form>
      </div>
      );
  }
}

export default AddArticlePage; 


// Functional solution:
// function AddArticlePage() {
// 	const [ hasArticleBeenSubmitted, setHasArticleBeenSubmitted ] = useState(false);
// 	const [ submitError, setSubmitError ] = useState(null);



// }