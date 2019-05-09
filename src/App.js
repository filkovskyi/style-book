import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './App.css';

function App() {
  const header = '<h1>Header</h1>';
  const button = '<button>Action</button>';
  const link = '<a href="#">Link here</a>';

  return (
    <div className="App">
      {header}
      <br/>
      <div>{ ReactHtmlParser(header) }</div>
      <br/>
      {button}
      <br/>
      <br/>
      <div>{ ReactHtmlParser(button) }</div>
      <br/>
      {link}
      <br/>
      <div>{ ReactHtmlParser(link) }</div>
    </div>
  );
}

export default App;
