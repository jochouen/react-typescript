import React from 'react';

const Example1Component: React.FC = () => {
  return (
    <div className="example">
      <h2>FC</h2>
        <pre>
          <code>
            {`
            import React from 'react';

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