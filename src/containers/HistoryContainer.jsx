import React from 'react'
import '../App.css'
import logo from '../logo.svg'

class HistoryContainer extends React.Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Show carbon footprint history
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

export default HistoryContainer