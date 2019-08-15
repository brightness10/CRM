import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './data.json'
import axios from 'axios'
import Topnav from './components/Topnav'
import ClientsTable from './components/clients/ClientsTable'
import Actions from './components/actions/Actions'
import Analytics from './components/analytics/Analytics'
import './App.scss'

export const ClientsContext = React.createContext()
export const OwnersContext = React.createContext()
export const EmailTypesContext = React.createContext()

function App() {

  const owners = ['Emily Durham', 'Janice Alvarado', 'Leila Howe', 'Hull Conrad', 'Shepherd Stone', 'Martin Massey', 'Barton Ramirez']
  const emailTypes = ['A', 'B', 'C', 'D']

  return (
    <div className="App">
      <Router>
        <Route path='/' render={() => <Topnav />} />
        <OwnersContext.Provider value={owners}>
          <Route exact path='/clients' render={() => <ClientsTable />} />
          <EmailTypesContext.Provider value={emailTypes}>
            <Route exact path='/actions' render={() => <Actions />} />
          </EmailTypesContext.Provider>
        </OwnersContext.Provider>
        <Route exact path='/analytics' render={() => <Analytics />} />
      </Router>
    </div>
  );
}

export default App;
