import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {
        // if(this.state.isLoggedin){
        //     return <div>True</div>
        // }
        // else
        // return <div>False</div>

        return (

            // this.state.isLoggedin ? (<div>Print</div>) : (<div>DON'T</div>)
            this.state.isLoggedin && (<div>kkkkkkkkk</div>)

        )
    }
}

export default ConditionalRendering
