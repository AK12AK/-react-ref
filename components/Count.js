import React,{Component} from "react";

class Count extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        return(
            this.setState(prevstate => ({
                count:prevstate.count+1
            }))
        )
    }
    decrement(){
        return(
            this.setState({
                count:this.state.count-1
            })
        )
    }
    render(){
        return(
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={() => this.increment()}>+</button>
            <button onClick={() => this.decrement()}>-</button>
            </div>
        );
    }
}

export default Count