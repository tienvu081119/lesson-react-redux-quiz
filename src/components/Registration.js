import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { act } from 'react-dom/test-utils';
import * as action from './../actions/index';

class Registration extends React.Component {
    constructor(props)
    {
        super(props);
        this.userNameInputRef = React.createRef();
        this.emailInputRef =  React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(e)
    {   
        e.preventDefault();
        let userName = this.userNameInputRef.current.value.trim();
        let email = this.emailInputRef.current.value.trim();
        if (userName != null && email != null)
        {
            this.props.onHandleChange(userName,email);
        }
    }
    render() {                 
           
        return (
            <>
            <h1>Registration</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control type="email" placeholder="Enter User Name" ref={this.userNameInputRef} />                 
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={this.emailInputRef} onChange={this.handleChange} />                 
                </Form.Group>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
            </>
        );
    }
}

const mapStateToProps = (state) =>{   
    return {
        quizs : state.quizs
    }
}

const mapDispathToProps = (dispath, props) =>{
    return {
        onHandleChange: (userName,email) =>{
            dispath(action.resUser(userName,email))
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps) (Registration);