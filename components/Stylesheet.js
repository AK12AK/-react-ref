import React, { Component } from 'react'
import './mystyle.css'
import style from './Cssmodule.module.css'
class Stylesheet extends Component {
    render() {
        return (
            <div>
                <h1 className={style.mod_css}>HELLO</h1>
            </div>
        )
    }
}

export default Stylesheet
