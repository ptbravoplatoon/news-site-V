import React, { Component } from 'react';
import { addArticle } from '../api/ArticlesAPI'


class AddArticlePage extends Component {

  state = {
    title: null,
    byline: null,
    abstract: null,
    submitted: false,
    errorMsg: null,
  }

  titleHandler = (event) => {
    this.setState({ title: event.target.value })
  }

  bylineHandler = (event) => {
    this.setState({ byline: event.target.value })
  }

  abstractHandler = (event) => {
    this.setState({ abstract: event.target.value })
  }

  submitHandler = async (event) => {
    event.preventDefault()
    const articleData = {
      title: this.state.title,
      byline: this.state.byline,
      abstract: this.state.abstract,
    }
    try {
      const response = await addArticle(articleData)
      if (response.id) {
        this.setState({ submitted: true })
      } else {
        this.setState({ errorMsg: response.error.message })
      }
      
    } catch (error) {
      console.log('ERROR: ', error)
    }
  }

  render() {
    if (!this.state.submitted) {
      return (
        <div>
          { this.state.error && <p>Error! {this.state.errorMsg}</p>}
          <form  onSubmit={this.submitHandler}>
            <label>Title: <input type="text" name="title" onChange={(event) => this.titleHandler(event)} /></label><br />
            <label>Byline: <input type="text" name="byline"  onChange={(event) => this.bylineHandler(event)} /></label><br />
            <label>Abstract: <textarea name="abstract" rows={10} cols={50}  onChange={(event) => this.abstractHandler(event)} /></label><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    } else {
      return (
        <h1>Article Submitted!</h1>
      )
    }
  }
}

export default AddArticlePage