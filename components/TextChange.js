import React, { Component } from "react";

class TextChange extends Component {
    constructor() {
        super()
        this.state = {
            message: 'From this'
        }
    }
    changeto = () => {
        return (
            this.setState(
                {
                    message: 'To this'
                }
            )
        );
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeto()}>Action</button>
            </div>

        );
    }
}

export default TextChange