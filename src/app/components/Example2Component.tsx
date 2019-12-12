import React, { useState, useEffect } from 'react';

interface Props {
  title: string
}

const Example2Component: React.FC<Props> = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div className="example">
      <h2>{props.title}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <pre>
        <code>
          {`
            import React, { useState, useEffect } from 'react';

            const Example2Component: React.FC<Props> = (props) => {
              const [count, setCount] = useState(0);

              useEffect(() => {
                console.log('useEffect');
              });

              return (
                <div className="example">
                  <h2>{props.title}</h2>
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