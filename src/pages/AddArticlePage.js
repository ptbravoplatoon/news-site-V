import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { addArticle } from "../api/ArticlesAPI";
import AppNav from "../components/AppNav/AppNav";
import navItems from "../data/navItems.json";
const AddArticlePage = ()=>{
const[navItem] = useState(navItems);
const history = useHistory();
const handleFormSubmit = (e)=>{
    e.preventDefault();
    let formTitle = e.target.elements.title.value;
    let formByLine = e.target.elements.byline.value;
    let formAbstract = e.target.elements.abstract.value;
    let articleObject = {title:formTitle,byline:formByLine,abstract:formAbstract};
    addArticle(articleObject);
    return history.push("/");
}
    return (
        <>
        <AppNav navItems={navItem} handleNavClick={(clickedItem) => {history.push("/"+clickedItem)}} />
        <div className="form">
            <Form onSubmit={(e)=>{handleFormSubmit(e)}}>
                <FormGroup>
                    <Label>Title: </Label>
                    <Input type="text" name="title" placeholder="Please enter title"/>
                </FormGroup>
                <FormGroup>
                    <Label>
                    ByLine:
                    </Label>
                    <Input type="text" name="byline" placeholder="Please enter byline"/>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Abstract:
                    </Label>
                    <Input type="textarea" name="abstract" placeholder="Please enter abstract "/>

                </FormGroup>
                <Button>Add New Article</Button>
            </Form>
            </div>
        </>
    )
}
export default AddArticlePage;