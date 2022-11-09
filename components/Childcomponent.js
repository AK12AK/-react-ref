import React from 'react'

function Childcomponent(props) {
  return (
    <div>
      <button onClick={() => props.handler('by child file')}>Click to call parent file's method</button>
    </div>
  )
}

export default Childcomponent
