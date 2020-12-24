import React from 'react'

class ClassComponent extends React.Component<{ name: String }> {  
    state = {
        name: 'Mundo!!!!!'
    }

    render() {
      return <div>
          Olá, {this.state.name}, eu sou um component baseado em class
            <br />
            <p>name: {this.props.name}</p>
            <button onClick={() => {
             this.setState({ name: 'Jefferson Silva' })   
            }} >Click me</button>
        </div>
    } 
}

export default ClassComponent