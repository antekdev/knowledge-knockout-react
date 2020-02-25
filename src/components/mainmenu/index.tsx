import React from 'react';
import './index.css';
import {
  Link
} from "react-router-dom";

function Menu() {
  return (
    <div className="App">
      <h1>Welcome to Knowledge Knockout!</h1>
      <div className='column-aligning-parent'>
        <button>
          <Link to="/lobby">Create game</Link>
        </button>
        <button>Join game</button>
      </div> 
    </div>
  );
}

export default Menu;
