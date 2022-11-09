import React, { Component } from 'react'

export class Employeefrom extends Component {
  constructor(props) {
    super(props);
    this.handleUserName=this.handleUserName.bind(this);
    this.handlePassword=this.handlePassword.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUserName = (event) => {
    this.setState({
      username: event.target.value,

    })
  }

  handlePassword = (event) => {
    this.setState(
      {
        password: event.target.value
      }
    )
  }

    
  addingLocal = () => {
    let users=JSON.parse(localStorage.getItem('users') || "[]")
    users.printLocalpush(this.state);
    localStorage.setItem('users',JSON.stringify(users));
  }

  printLocal =()=>{
    const getStorage = JSON.parse(localStorage.getItem('users'))
    // for(let i=0;i<this.users.length;i++)
    // {
    //   let str=localStorage.getItem(this.users[i]);

    // }\
    var tempo='';
    getStorage?.forEach(element => {
      console.log(element);
     let temp=JSON.stringify(element)
     tempo=tempo+temp;
      document.getElementById("whereToPrint").innerHTML = tempo;


    });
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>USER NAME : </label>
            <input value={this.state.username} onChange={this.handleUserName} type='text'></input>
          </div>
          <div>
            <label>PASSWORD : </label>
            <input value={this.state.password} onChange={this.handlePassword}></input>
          </div>
          <button type='button' onDoubleClick={() => this.addingLocal()}>Login</button>
          <button type='button' onClick={() =>this.printLocal()}>Print Local</button>
        </form>
        <pre id="whereToPrint">kk</pre>

      </div>
    )
  }
}

export default Employeefrom
