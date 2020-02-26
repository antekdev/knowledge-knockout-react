import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Entry from 'entrypoint';

require('dotenv').config()
ReactDOM.render(<Entry/>, document.getElementById('root'));
