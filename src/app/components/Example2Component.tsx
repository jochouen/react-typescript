import React, { useState } from 'react';
import './ExampleComponent.scss';

const Example2Component: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="example">
      <h1>Hooks useState example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <pre>
        <code>
          {`
            import React, { useState } from 'react';
            import './ExampleComponent.scss';

            const Example2Component: React.FC = () => {
              const [count, setCount] = useState(0);
              return (
                <div className="example">
                  <p>You clicked {count} times</p>
                  <button onClick={() => setCount(count + 1)}>
                    Click me
                  </button>
                </div>
              );
            }

            export default Example2Component;
          `}
        </code>
      </pre>
    </div>
  );
}

export default Example2Component;