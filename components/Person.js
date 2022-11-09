import React from 'react'

// function Person({person}) {
//   return (
//     <div>
//       <h1>i am {person.name} with id as {person.id}</h1>
      
//     </div>
//   )
// }
function Person({car}) {
  return(
    <div>
      <h1>This is {car.model} powered by {car.cc} cc engine</h1>
    </div>
  )
}

export default Person
