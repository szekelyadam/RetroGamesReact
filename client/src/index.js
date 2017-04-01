import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../dist/css/style.css';

// Don't forget to add your API key
filepicker.setKey('A33UokoYfQda3Qb5xgh7qz');

// Our views are rendered inside the #content div
ReactDOM.render(
  Routes,
  document.getElementById('content'),
);
