import React from "react";
import './Header.css';

export const Header = ({navigator}) => (
   <div className="App-header">
       <button onClick={() => navigator('landingPage')}> HOME </button>
   </div>
);