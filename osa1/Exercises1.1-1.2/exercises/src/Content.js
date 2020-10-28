import React from 'react'

export const Content = (props) => {
    console.log(props)
    return (
        <div>
            {
                props.parts.map( (part, i) =>                    
                        <>
                            <p>
                               Part {i + 1}: {part.name}
                            </p>
                            
                            <p>
                               Exercises: {part.exercises}
                            </p>
                        </>
                                       
                )
            }            
        </div>
    )
}
