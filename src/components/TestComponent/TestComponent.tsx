import React, {useState } from 'react'
import './TestComponent.css'

function TestComponent(props: { name: String }) {
    
    const [age, setAge] = useState(21)

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