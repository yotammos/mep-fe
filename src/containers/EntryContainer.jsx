import React from 'react'
import '../App.css'
import logo from '../logo.svg'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const primaryHeatingSources = [
    'Natural Gas', 'Electricity', 'Fuel Oil', 'Propane'
]

class EntryContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            primaryHeatingSource: primaryHeatingSources[0],
            monthlyBill: 0
        }

        this.handlePrimaryHeatingSourceChange = this.handlePrimaryHeatingSourceChange.bind(this)
        this.handleMonthlyBillChange = this.handleMonthlyBillChange.bind(this)
        this.handleMonthlyBillSubmit = this.handleMonthlyBillSubmit.bind(this)
    }

    handleMonthlyBillSubmit(event) {
        event.preventDefault()
        console.log(event.target.value)
        console.log(this.state.monthlyBill)
    }

    handleMonthlyBillChange(event) {
        console.log(event.target.value)
        this.setState({
            monthlyBill: event.target.value
        })
    }

    handlePrimaryHeatingSourceChange(event) {
        console.log(event.value)
        this.setState({
            primaryHeatingSource: event.value
        })
    }

    dropdown() {
        const defaultOption = this.state.primaryHeatingSource
        return <Dropdown options={primaryHeatingSources} onChange={this.handlePrimaryHeatingSourceChange} value={defaultOption} placeholder="Select an option" />
    }

    // updateHeatingBill()

    render() {
        return <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    Add Entry
                </h2>
                <h3>Home Energy</h3>
                <div>
                    Heating bill:
                    <br /><br />
                    Primary Heating Source: {this.dropdown()}
                    <form onSubmit={this.handleMonthlyBillSubmit}>
                        <label>
                        Monthly Bill:
                        <input type="text" onChange={this.handleMonthlyBillChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
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

export default EntryContainer