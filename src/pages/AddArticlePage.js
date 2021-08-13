import React, { Component } from 'react';
import { addArticle } from '../api/ArticlesAPI';

class AddArticlePage extends Component {
  state = {
    title: null,
    byline: null,
    abstract: null,
    articleSubmitted: false,
    errorMessage: null,
  }

  // Lifecycle Methods

  handleTitleChange = (event) =>{
    this.setState({title: event.target.value})
  }

  handleBylineChange = (event) =>{
    this.setState({byline: event.target.value})
  }

  handleAbstractChange = (event) =>{
    this.setState({abstract: event.target.value})
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const articleData = {
      title: this.state.title,
      byline: this.state.byline,
      abstract: this.state.abstract
    }
    const response = await addArticle(articleData)
    if (response.id){
      this.setState({articleSubmitted: true})
    }
    else {
      this.setState({errorMessage: response.error.message})
    }
    


  }

  render() {

    if (!this.state.articleSubmitted){
      return(
        <div>
          {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
          <form onSubmit={this.handleFormSubmit}>
            <label >
              Title: 
            <input type = "text" name="title" onChange={(event) => {this.handleTitleChange(event)} } />
            </label>
            <br/>
            <label >
              Byline: 
            <input type = "text" name="byline" onChange={(event) => {this.handleBylineChange(event)} }/>
            </label>
            <br/>
            <label >
              Abstract: 
            <textarea rows={5} name="abstract" onChange={(event) => {this.handleAbstractChange(event)} }/>
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
    else {
      return (
        <div>
        {!this.state.byline && <h1>Anonymous Article Submitted</h1>}
        {this.state.byline && <h1> Article Submitted</h1>}
        </div>
      )
    }
  }

}
export default AddArticlePage