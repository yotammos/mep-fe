import React from 'react'
import '../App.css'
import { getData } from '../api'

class DashobardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        getData('http://localhost:8081/footprint?userId=2')
        .then(data => {
            console.log(JSON.stringify(data))
            this.setState({
                footprint: data.value
            })
        }) // JSON-string from `response.json()` call
        .catch(error => {
            console.error(`error: ${error}`)
            this.setState({
                footprint: 0
            })
        })
    }

    getAverageDailyFootprint() {
        return this.state.footprint
    }

    render() {        
        return <div className="App">
            <header className="App-header">
                <h1>Your Average Daily Footprint</h1>
                <div className="circle">{this.getAverageDailyFootprint()}</div>
                <p>Estimated pounds of CO<small>2</small>/day</p>
            </header>
        </div>
    }
}

export default DashobardContainer