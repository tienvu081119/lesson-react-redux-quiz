import React from 'react';
import {Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as action from './../actions/index';

class ButtonNext extends React.Component
{   
    constructor(props)
    {
        super(props);        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {        
        let id = this.props.quizs.App.id;     
        id = id +1;
        this.props.onHandleChange(id);        
    }
    
    render()
    {        
        const value = this.props.quizs.App.disabledBtn;
        return(
            <>
             <Button variant="success" disabled={value} onClick={this.handleClick} >Next</Button>{' '}
            </>
        )
    }
}

const mapDispathToProps = (dispath, props) =>
{
    return{
        onHandleChange: (number) =>{
            dispath(action.nextBtn(number))
        }
    }
}

const mapStateToProps = (state) =>{
    return {
        quizs: state.quizs
    }
}

export default connect(mapStateToProps,mapDispathToProps) (ButtonNext);