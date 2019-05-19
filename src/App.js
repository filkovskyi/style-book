import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const header = '<h1>Header</h1>';
const button = '<button>Action</button>';
const link = '<a href="#">Link here</a>';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/header",
    sidebar: () => <div>header</div>,
    main: () => (
      <div>
        <pre>{header}</pre>
        <br/>
        <div>{ ReactHtmlParser(header) }</div>
      </div>
    )
  },
  {
    path: "/button",
    sidebar: () => <div>button!</div>,
    main: () => (
      <div>
        <pre>{button}</pre>
        <br/>
        <div>{ ReactHtmlParser(button) }</div>
      </div>
    )
  },
  {
    path: "/link",
    sidebar: () => <div>link!</div>,
    main: () => (
      <div>
        <pre>{link}</pre>
        <br/>
        <div>{ ReactHtmlParser(link) }</div>
      </div>
    )
  }
];

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/header">header</Link>
            </li>
            <li>
              <Link to="/button">button</Link>
            </li>
            <li>
              <Link to="/link">link</Link>
            </li>
          </ul>

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
