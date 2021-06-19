import React from 'react';
import './App.css';
import {LandingPage} from "./pages/index";
import { Switch,Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Route path="/"><LandingPage /></Route>
    </Switch>
  );
}

export default App;
