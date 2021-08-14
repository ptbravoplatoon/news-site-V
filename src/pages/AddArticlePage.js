import {Component} from 'react'
import {addArticle} from '../api/ArticlesAPI'

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
      <h2>Add Article Page</h2>
      {this.state.message &&
        <h3>{this.state.message}</h3>
      }
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={"title"}>title</label>
        <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
        <label htmlFor={"byline"}>byline</label>
        <input onChange={this.handleChange} type="text" name="byline" value={this.state.byline} />
        <label htmlFor={"abstract"}>abstract</label>
        <input onChange={this.handleChange} type="text" name="abstract" value={this.state.abstract} />
        <input type="submit" value="Submit"/>

      </form>

      </div>
      );
  }
}
 
export default AddArticlePage;