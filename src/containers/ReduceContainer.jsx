import React from 'react'
import '../App.css'
import logo from '../logo.svg'

class ReduceContainer extends React.Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Ways to reduce carbon footprint
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    }
}

export default ReduceContainer