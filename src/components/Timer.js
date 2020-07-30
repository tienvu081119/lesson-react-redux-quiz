import React from 'react';
import { connect } from "react-redux";
import * as action from "./../actions/index";

class Timer extends React.Component {
    constructor(){
        super();
        this.tick = this.tick.bind(this);      
    }
    
    componentDidMount() {
        this.intervalI = setInterval(() =>
        this.tick(),
        10
        );
    }     

    componentWillUnmount() {
        clearInterval(this.interval);
    }
      

    render(){
        return(
            <>
                Process: <span>{ parseFloat(this.props.quizs.User.seconds).toFixed(2) }</span>
            </>
        )
    }
    
    tick()
    {            
        this.props.onTick();

        if(this.props.quizs.User.seconds <=0)
        {
            this.props.onStop();
            clearInterval(this.interval);
        }
    }

   
}

const mapStateToProps = (state) =>{   
    return {
        quizs : state.quizs
    }
}

const mapDispathToProps = (dispath, props) => {
    return {
      onTick: () => {
        dispath(action.tick());
      },

      onStop: () => {
        dispath(action.stop());
      }
    };
  };
  

export default connect(mapStateToProps,mapDispathToProps) (Timer);
