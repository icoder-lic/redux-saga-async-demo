import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as researchActions from "../actions/researchActions";

class Research extends Component {
    constructor(props){
        super();
        props.researchActions.loadServerData();
    }
    //组件已经上树
    componentDidMount(){
        this.chart = echarts.init(this.refs.box);
        this.chart.title = '小调查';
        var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['A','B','C','D','E']
                },
                series: [
                    {
                        name:'title',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            
                        ]
                    }
                ]
            };
            this.chart.setOption(option)
    }
    //组件即将接受props
    componentWillReceiveProps(newProps){
        //重设一下Data属性
        this.chart.setOption({
            series : {
                data:[
                    {value:newProps.A, name:'A'},
                    {value:newProps.B, name:'B'},
                    {value:newProps.C, name:'C'},
                    {value:newProps.D, name:'D'},
                    {value:newProps.E, name:'E'}
                ]
            }
        })
    }
    render() {
        return (
            <div>
                <div ref="box" style={{"width":"500px","height":"300px","backgroundColor":"#eee"}}></div>
                <button onClick={()=>{this.props.researchActions.toupiao("A")}}>A</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.toupiao("B")}}>B</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.toupiao("C")}}>C</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.toupiao("D")}}>D</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.toupiao("E")}}>E</button>
            </div>
        )
    }
}
export default connect(
    ({researchReducer : {A,B,C,D,E}}) => ({
        A,B,C,D,E
    }),
    (dispatch) => ({
        researchActions : bindActionCreators(researchActions, dispatch)
    })
)(Research);