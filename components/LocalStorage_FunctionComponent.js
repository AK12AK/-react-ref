import React, { useState } from 'react'



function LocalStorage_FunctionComponent() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')


    handlesave = () => {
        let user = {
            username: username,
            password: password
        }

        localStorage.setItem('users', user)
    }
    return (
        <div>
            <h1>Local Storage with functional Component</h1>
            <div>
                <label>User Name : </label>
                <input type='text' placeholder='User Name' value={username} onChange={(e) => setusername(e.target.value)}></input>
            </div>
            <div>
                <label>PassWord : </label>
                <input type='text' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)}></input>
            </div>
            <button onClick={() => handlesave()}>Save</button>
        </div>
    )
}

export default LocalStorage_FunctionComponent
