import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function init() {
  render(<App />, document.getElementById('root'));
}

init();
