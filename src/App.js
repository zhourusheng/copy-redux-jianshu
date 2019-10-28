import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
