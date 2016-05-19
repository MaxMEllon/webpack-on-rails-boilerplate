'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import debug from './utils/debug';

window.onload = function() {
  ReactDOM.render(<Hello />, document.getElementById('main'));
}

// vim: ft=javascript.jsx

