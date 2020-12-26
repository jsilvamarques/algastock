import React from 'react'

class ClassComponent extends React.Component<{ name: String }> {  

    constructor(props: any){
        super(props)
        console.log('contructor reached')
    }

    state = {
        name: 'Mundo!!!!!'
    }

    componentDidMount() {
        console.log('componentDidMount reached')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate reached')
    }

    render() {
      console.log('render reached')
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