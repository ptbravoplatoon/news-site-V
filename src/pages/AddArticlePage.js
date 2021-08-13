import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AddArticlePage = () => {
  const handleSubmit = (e) => {};
  return (
    <Form className="article-form" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Enter a title"
        />
      </FormGroup>
      <FormGroup>
        <Label for="byline">Byline</Label>
        <Input
          type="text"
          name="byline"
          id="byline"
          placeholder="Enter a byline"
        />
      </FormGroup>
      <FormGroup>
        <Label for="abstract">Abstract</Label>
        <Input type="textarea" name="abstract" id="abstract" />
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
};

export default AddArticlePage;
