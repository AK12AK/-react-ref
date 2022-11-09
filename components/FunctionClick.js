import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Function button is clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>Function Click button</button>
        </div>
    )
}

export default FunctionClick
