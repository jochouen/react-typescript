import React from 'react';
import ReactDOM from 'react-dom';
import './components/ExampleComponent.scss';
import Example1Component from './components/Example1Component';
import Example2Component from './components/Example2Component';
import Example3Component from './components/Example3Component';

const App = () => {
  return (
    <div>
      <h1>Examples</h1>
      <Example1Component />
      <Example2Component title="Hooks(Props、UseState、UseEffect)" />
      <Example3Component title="Class Base(Props、State、ライフサイクル)" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);