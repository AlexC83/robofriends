import React from 'react'
import './Hello.css'
import 'tachyons'

class Hello extends React.Component {
    render() {
        return (
        <div className='f1 tc'>
            <h1>Hello World!</h1>
            <p>Welcome to React</p>
            <p>{this.props.greeting}</p>
        </div>
        );
    }
}

export default Hello