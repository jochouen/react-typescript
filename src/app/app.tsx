import React from 'react';
import ReactDOM from 'react-dom';
import Example1Component from './components/Example1Component';
import Example2Component from './components/Example2Component';

const App = () => {
  return (
    <div>
      <Example1Component />
      <Example2Component />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);