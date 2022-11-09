import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentMessage:'Parent file is called'
      }
    this.clickHandler=this.clickHandler.bind(this)

    }

    clickHandler(child){
        alert(`${this.state.parentMessage} ${child}`)
    }
    
    render() {
        return (
            <div>
                <Childcomponent handler={this.clickHandler}/>
            </div>
        )
    }
}

export default Parentcomponent
