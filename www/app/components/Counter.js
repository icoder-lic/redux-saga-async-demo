import React, { Component } from 'react';
import {connect} from "react-redux";
import * as counterActions from "../actions/counterActions";
import {bindActionCreators} from "redux";

class Counter extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <h1>{this.props.a}</h1>
                
                <button onClick={()=>{this.props.counterActions.add(1)}}>+1</button>
                {" "}
                <button onClick={()=>{this.props.counterActions.minus()}}>-1</button>
                {" "}
                <button onClick={()=>{this.props.counterActions.addServer()}}>+服务器</button>
            </div>
        )
    }
}
export default connect(
    ({counterReducer : {a}}) =>({
        a
    }),
    (dispatch) => ({
        counterActions : bindActionCreators(counterActions,dispatch)
    })
)(Counter);