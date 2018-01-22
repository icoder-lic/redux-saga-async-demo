import React, { Component } from 'react';
import Counter from '../components/Counter';
//引入 调查图表组件
import Research from "../components/Reseach";

export default class App extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <Counter></Counter>
                <hr />
                <Research></Research>
            </div>
        )
    }
}