import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addArticle } from '../api/ArticlesAPI';

function AddArticlePage() {
	const [ hasArticleBeenSubmitted, setHasArticleBeenSubmitted ] = useState(false);
	const [ submitError, setSubmitError ] = useState(null);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const newArticle = {};
		newArticle.title = e.target.elements[0].value;
		newArticle.byline = e.target.elements[1].value;
		newArticle.abstract = e.target.elements[2].value;
		addArticle(newArticle).then((json) => {
			if (json.error) {
				setSubmitError(json.error.message);
			} else {
				setHasArticleBeenSubmitted(true);
			}
		});
	};

	const submittedMessage = () => {
		return <h2>Your article has been successfully submitted</h2>;
	};

	const addArticleForm = () => {
		return (
			<Form onSubmit={handleFormSubmit}>
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

	if (hasArticleBeenSubmitted) {
		return submittedMessage();
	} else {
		return submitError ? submitError : addArticleForm();
	}
}

export default AddArticlePage;
