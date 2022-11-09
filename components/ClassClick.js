import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler() {
        console.log("Class btn is clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Class button </button>
            </div>
        )
    }
}

export default ClassClick
