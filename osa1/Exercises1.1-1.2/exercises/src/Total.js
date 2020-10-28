import React from 'react'

export const Total = (props) => {
    let sum = 0
    return (
        <div>{
            props.total.map( num => {
                sum = sum + num.exercises               
            })
            } 
             <p>Total: {sum}</p>           
        </div>
    )
}
