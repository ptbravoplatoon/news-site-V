import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import {addArticle} from '../api/ArticlesAPI';

const AddArticlePage = () => {
  const [articleSuccess, setArticleSucess] = useState(false);
  const [newArticle, setNewArticle] = useState(undefined);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const articleObject = {
      'title': evt.target.title.value,
      'byline': evt.target.byline.value,
      'abstract': evt.target.abstract.value
    }
    addArticle(articleObject)
    .then(article => {
      setArticleSucess(true); 
      setNewArticle(article);
    })
  }


  
  return (
    <div>
      <p className="m-4">Add an article below!</p>
          {
            !articleSuccess
            ?
          
            <Form className="m-4" onSubmit={handleFormSubmit}> 
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Byline</Form.Label>
                <Form.Control type="text" name="byline" placeholder="Byline" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Abstract</Form.Label>
                <Form.Control type="text" name="abstract" placeholder="Abstract" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            :
            <Alert variant='success'>
              Article Successfully Submitted!
            </Alert>
          }
          
    </div>
  );
};

export default AddArticlePage;