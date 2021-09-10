import React, { Component } from 'react';
import './App.css';
import { GUContextProvider } from './gitHContext';
import Routes from './routes';

export default class APP extends Component {
  render(){
    return (
      <GUContextProvider>
        <Routes/>
      </GUContextProvider>
    )
  }
}