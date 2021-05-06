import React from 'react'
import Login from './Screens/Login'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App w-full h-screen">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/" component={Login}/>
        </Switch>
    </Router>

    </div>
  )
}

export default App
