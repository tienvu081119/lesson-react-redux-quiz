import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Registration from './Registration';
import ButtonNext from './ButtonNext';
import VideoForm from './VideoForm';
import Question from './Question';
import Answer from './Answer';
import { connect } from 'react-redux';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {        
        let pageId = this.props.quizs.App.id;       
        let pageForm;
        let ques;
        if(pageId == 1)
        {
            pageForm = <VideoForm />
        }
        else if(pageId == 2)
        {
            pageForm = <Answer />
            ques = <Question />
        }
        else 
        {
            pageForm = <Registration/>
        }
        return (
            <Container>
                <Row className="justify-content-md-center">
                <Col sx lg="6">{pageForm}</Col>
                <Col sx lg="5">{ques}</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sx lg="8"></Col>
                    <Col xs lg="2"><ButtonNext /></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
   return {
       quizs: state.quizs
   }
}

export default connect(mapStateToProps,null)(Main);