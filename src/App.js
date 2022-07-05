
import './App.css';
import Newsitems from './Newsitems';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class  extends Component {
  country="us"
  pageSize=6;
  apiKey='7eea8bb58dda43b78f524d7a9eb29836'
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
      
        <Routes>
        <Route  exact path="/" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="general"/>} />
        <Route  exact path="/business" element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="business"/>} />
        <Route  exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="entertainment"/>} />
        
        <Route  exact path="/health" element={<News key="health" pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="health"/>} />
        <Route  exact path="/science" element={<News key="science" pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="science"/>} />
        <Route  exact path="/sports" element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="sports"/>} />
        <Route  exact path="/technology" element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="technology"/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

