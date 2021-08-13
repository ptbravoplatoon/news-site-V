import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addArticle } from '../api/ArticlesAPI';

class AddArticlePage extends Component {
	state = {
		hasArticleBeenSubmitted: false,
		submitError: null
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		const newArticle = {};
		newArticle.title = e.target.elements[0].value;
		newArticle.byline = e.target.elements[1].value;
		newArticle.abstract = e.target.elements[2].value;
		addArticle(newArticle).then((json) => {
			if (json.error) {
				this.setState({
					submitError: json.error.message
				});
			} else {
				this.setState({
					hasArticleBeenSubmitted: true
				});
			}
		});
	};

	submittedMessage = () => {
		return <h2>Your article has been successfully submitted</h2>;
	};

	addArticleForm = () => {
		return (
			<Form onSubmit={this.handleFormSubmit}>
				<FormGroup>
					<Label for="titleInput">Title</Label>
					<Input type="text" name="title" id="titleInput" />
				</FormGroup>
				<FormGroup>
					<Label for="bylineInput">Author</Label>
					<Input type="text" name="byline" id="bylineInput" />
				</FormGroup>
				<FormGroup>
					<Label for="abstractText">Text Area</Label>
					<Input type="textarea" name="abstract" id="abstractText" />
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		);
	};

	render() {
		if (this.state.hasArticleBeenSubmitted) {
			return this.submittedMessage();
		} else {
			return this.state.submitError ? this.state.submitError : this.addArticleForm();
		}
	}
}

export default AddArticlePage;
