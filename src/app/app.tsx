import React from 'react';
import ReactDOM from 'react-dom';
import './components/ExampleComponent.scss';
import Example1Component from './components/Example1Component';
import Example2Component from './components/Example2Component';
import Example3Component from './components/Example3Component';
import Example4Component from './components/Example4Component';
import Example5Component from './components/Example5Component';

const App = () => {
  return (
    <div>
      <h1>Examples</h1>
      <Example1Component />
      <Example2Component title="Hooks(UseState、UseEffect、UseCallback)" />
      <Example3Component />
      <Example4Component title="Class Base(Props、State、ライフサイクル)" />
      <Example5Component />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);