import React from 'react';
import './ExampleComponent.scss';

const Example1Component: React.FC = () => {
  return (
    <div className="example">
      <h1>FC example</h1>
        <pre>
          <code>
            {`
            import React from 'react';
            import './ExampleComponent.scss';

            const Example1Component: React.FC = () => {
              return (
                <div className="example">
                  ...
                </div>
              );
            }
            export default Example1Component;
            `}
          </code>
        </pre>
    </div>
  );
}

export default Example1Component;