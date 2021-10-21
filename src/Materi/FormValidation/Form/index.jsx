import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Card, Container, Row, Col, Form, Button } from "react-bootstrap";
// import * as Validator from 'validatorjs';

const ShowErrors = ({errors}) => {
    return(
        <ul className="mt-3 mx-5 text-danger">
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class FormValidation extends React.Component{
    state = {
        email: '',
        password: '',
        errors: []
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        let message = [];
        if(email.length === 0){
            message = [...message, 'Email tidak boleh kosong'];
        }
        if(password.length === 0){
            message = [...message, 'Password tidak boleh kosong'];
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
            message = [...message, 'Email tidak valid'];
        }
        if(password.length < 8){
            message = [...message, 'Password harus 8 karakter'];
        }
        if(message.length > 0){
            this.setState({
                errors: message
            });
        }else{
            alert(`
            email: ${this.state.email}
            password: ${this.state.password}
            `);
            this.setState({
            email: '',
            password: '',
            errors: []
            })
        }

        // let data = { email, password };
          
        // let rules = {
        //     email: 'required|email',
        //     password: 'min:8|required'
        // };
          
        // let validation = new Validator(data, rules);
        // validation.passes(); 
        

        // alert(`
        // email: ${this.state.email}
        // password: ${this.state.password}
        // `);
        // this.setState({
        //     email: '',
        //     password: ''
        // })
        // this.setState({
        //     errors: [
        //         ...validation.errors.get('email'),
        //         ...validation.errors.get('password')
        //     ]
        // })
    }
    render(){
        return(
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <Card className="mt-5">
                            <Card.Header className="fw-bold text-center fs-4">Register</Card.Header>
                            {
                                this.state.errors && <ShowErrors errors={this.state.errors} />
                            }
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            name="email" 
                                            type="email" 
                                            placeholder="Enter email" 
                                            onChange={ e => this.setState({email: e.target.value})} 
                                            value={this.state.email}
                                        />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            name="password" 
                                            type="password" 
                                            placeholder="Password" 
                                            onChange={ e => this.setState({password: e.target.value})} 
                                            value={this.state.password}
                                        />
                                    </Form.Group>
                                    
                                    <center>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </center>
                                </Form>         
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}