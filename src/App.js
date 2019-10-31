import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DashobardContainer from './containers/DashobardContainer'
import EntryContainer from './containers/EntryContainer'
import HistoryContainer from './containers/HistoryContainer'
import ReduceContainer from './containers/ReduceContainer'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <table>
          <tbody>
            <tr>
                <th scope="col"><Link to="/">Dashboard</Link></th>
                <th scope="col"><Link to="/entry">Add Entry</Link></th>
                <th scope="col"><Link to="/history">Impact History</Link></th>
                <th scope="col"><Link to="/reduce">Reduce Impact</Link></th>
            </tr>
          </tbody>
        </table>
        <hr />

        <Route exact path="/" component={DashobardContainer} />
        <Route path="/entry" component={EntryContainer} />
        <Route path="/history" component={HistoryContainer} />
        <Route path="/reduce" component={ReduceContainer} />
      </div>
    </Router>
    )
  }
}

export default App
