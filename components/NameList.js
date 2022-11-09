import React from 'react'
import Person from './Person'
import person from './Person'

function NameList() {
    // const name = ['Guru', 'Amsa', 'Abi', 'Akilesh', 'Pradeep']
    // const NameList = name.map(name => <h1>{name}</h1>)
    // return (
    //     <div>
    //         {NameList}
    //         {/* <h1>{name[0]}</h1>
    //     <h1>{name[1]}</h1>
    //     <h1>{name[2]}</h1>
    //     <h1>{name[3]}</h1>
    //     <h1>{name[4]}</h1> */}
    //     </div>
    // )
    // const persons = [
    //     {
    //         name: 'Akilesh',
    //         id: 1,
    //         gender : 'male'
    //     },
    //     {
    //         name:'guru',
    //         id: 2,
    //         gender :'male'
    //     }
    // ]
    // const personsList =persons.map(person =><Person person={person}/>   )
    // return(
    //     <div>
    //         {personsList}
    //     </div>
    // )
    const cars =[
        {
            id:1,
            model:"i10",
            cc:1000
        },
        {
            id:2,
            model:'i20',
            cc:1400 
        }
    ]
    const vehicle =cars.map(car=><Person key={car.model} car={car}></Person>)
    return(
        <div>
            {vehicle}
        </div>
    )
}

export default NameList
