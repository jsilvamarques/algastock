import React, {useEffect, useState } from 'react'
import './TestComponent.css'

function TestComponent(props: { name: String }) {
    
    const [age, setAge] = useState(21)

    useEffect(() => {
        console.log('Component was created')
    }, [])

    useEffect(() => {
        console.log('Age has been update to: ', age)
    }, [age])


    return <div className="TestComponent" >
        Olá, { props.name }, { age }
        <button onClick= {() => {
                setAge(age + 1)
                console.log(age)
            }}>
            +
        </button>
    </div>
}

export default TestComponent