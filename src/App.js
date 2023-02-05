import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
//wont be able to add router because they are looking for fundings
export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<News key="general" category = "general" pageSize={6} />}>  </Route>
        <Route exact path="/entertainment" element={<News key="entertainment" category = "entertainment" pageSize={6} />}>  </Route>
        <Route exact path="/sports"element={<News key="sports" category = "sports" pageSize={6} /> }></Route>
        <Route exact path="/technology"element={<News key="technology" category = "technology" pageSize={6} />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}