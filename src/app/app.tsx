import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './components/ExampleComponent.scss';
import Example1Component from './components/Example1Component';
import Example2Component from './components/Example2Component';
import Example3Component from './components/Example3Component';
import Example4Component from './components/Example4Component';
import Example5Component from './components/Example5Component';
import Example6Component from './components/Example6Component';
import Example7Component from './components/Example7Component';
import TodoContainer from './containers/TodoContainer';

const App = () => {
  return (
    <div>
      <h1>Examples</h1>
      <Example1Component />
      <Example2Component title="Hooks(UseState、UseEffect、UseCallback、UseRef)" />
      <Example3Component />
      <Example7Component />
      <Example4Component title="Class Base(Props、State、ライフサイクル)" />
      <Example5Component />
      <Example6Component />
      <h2>TODO</h2>
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);