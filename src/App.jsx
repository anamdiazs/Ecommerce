import React from 'react'
import Card from './Components/Products/Products'
import Login from './Screens/Login'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-screen">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Login}/>
        </Switch>
    </Router>

    </div>
  )
}

export default App
