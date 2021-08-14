import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";

import { addArticle } from "../api/ArticlesAPI";

const AddArticlePage = (props) => {
  const [title, setTitle] = useState("");
  const [byline, setByline] = useState("");
  const [abstract, setAbstract] = useState("");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case "title":
        setTitle(inputValue);
        break;
      case "byline":
        setByline(inputValue);
        break;
      case "abstract":
        setAbstract(inputValue);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const articleObject = {};
    // [...e.target]
    //   .filter((item) => item.name)
    //   .forEach((item) => {
    //     articleObject[item.name] = item.value;
    //   });
    const articleObject = {
      title: title,
      byline: byline,
      abstract: abstract,
    };
    await addArticle(articleObject).then((newArticleObject) => {
      if (newArticleObject) {
        setIsSubmitSuccess(true);
      }
    });
  };

  return (
    <>
      <Form className="article-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter a title"
            value={title}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="byline">Byline</Label>
          <Input
            type="text"
            name="byline"
            id="byline"
            placeholder="Enter a byline"
            value={byline}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="abstract">Abstract</Label>
          <Input
            type="textarea"
            name="abstract"
            id="abstract"
            value={abstract}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button color="primary" disabled={!(title && byline && abstract)}>
          Submit
        </Button>
      </Form>
      <Toast className="toast-top" isOpen={isSubmitSuccess}>
        <ToastHeader>Success!</ToastHeader>
        <ToastBody>
          <span>You've added a new article.</span>
          <div className="toast-actions">
            <Button
              outline
              color="secondary"
              size="sm"
              onClick={(_) => setIsSubmitSuccess(false)}
            >
              Close
            </Button>
            <Button
              outline
              color="primary"
              size="sm"
              onClick={(_) => props.history.push("/")}
            >
              View Articles
            </Button>
          </div>
        </ToastBody>
      </Toast>
    </>
  );
};

export default AddArticlePage;
