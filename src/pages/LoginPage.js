import  React, {useState}  from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AppNav from "../components/AppNav/AppNav";
import navItems from '../data/navItems.json';
const LoginPage = () =>{
const[navItem] = useState(navItems)
const history = useHistory();
const handleSubmit = (e)=>{
    e.preventDefault();
    /*let email = (e.target.elements.email.value);
    let pass = (e.target.elements.password.value);*/
}
    return(
        <>
        <AppNav navItems={navItem} handleNavClick={(clickedItem) => {history.push("/"+clickedItem)}} />
        <div className="form">
            <Form  onSubmit={(e)=>{handleSubmit(e)}}>
                <FormGroup>
                <Label>Email : </Label>
                    <Input type="text" name="email" placeholder="Please enter your email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password: </Label>
                    <Input type="password" name="password" placeholder="Please enter your password"/>
                </FormGroup>
                <FormGroup>
                    <Button>Login</Button>
                </FormGroup>
            </Form>
        </div>
        </>
    )
}
export default LoginPage;