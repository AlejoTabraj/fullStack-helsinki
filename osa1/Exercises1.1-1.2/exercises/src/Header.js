import React from 'react'

export const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.title}</h1>            
        </div>
    )
}
