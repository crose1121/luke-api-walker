import './App.css';
import React from 'react'
import Search from './components/Search'
import Details from './components/Details'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {


  return (

      <BrowserRouter>
      <div className="App container">
        <h1>The Star Wars API</h1>
        <Search/>

        <Switch>
          <Route path="/:category/:num">
            <Details/>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
