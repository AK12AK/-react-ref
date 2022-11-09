import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            details: '',
            tech: ''
        }
    }
    handleusernamechange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handlepersondetails = (event) => {
        this.setState(
            {
                details: event.target.value
            }
        )
    }

    handletechchange = (event) => {
        this.setState(
            {
                tech: event.target.value
            }
        )
    }

    handlesubmit = (event) => {
        alert(`Your Username named ${this.state.username} with details of ${this.state.details} hd known ${this.state.tech} Technilogy`)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <label>User Name :</label>
                        <input value={this.state.username} onChange={this.handleusernamechange} >
                        </input>
                    </div>
                    <div>
                        <label>Person Details :</label>
                        <textarea value={this.state.details} onChange={this.handlepersondetails}></textarea>
                    </div>
                    <div>
                        <label>Tech Known :</label>
                        <select value={this.state.tech} onChange={this.handletechchange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="node">Node</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            //can also be return as like this(after destructuring)
            //   const{username,details,tech}=this.state
            //   return (
            //     <div>
            //       <form onSubmit={this.handlesubmit}>
            //           <div>
            //               <label>User Name :</label>
            //               <input value={username} onChange={this.handleusernamechange} >
            //               </input>
            //           </div>
            //           <div>
            //               <label>Person Details :</label>
            //               <textarea value={details} onChange={this.handlepersondetails}></textarea>
            //           </div>
            //           <div>
            //               <label>Tech Known :</label>
            //               <select value={tech} onChange={this.handletechchange}>
            //                   <option value="react">React</option>
            //                   <option value="angular">Angular</option>
            //                   <option value="node">Node</option>
            //               </select>
            //           </div>
            //           <button type='submit'>Submit</button>
            //       </form>
            //     </div>
        )

    }
}

export default FormHandling
