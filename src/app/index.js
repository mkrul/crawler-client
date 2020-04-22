import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Main from '../components/Main'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Main></Main>
      </Switch>
    </Router>
  )
}

export default App
