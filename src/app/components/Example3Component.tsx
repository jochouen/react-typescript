import React, { useContext } from 'react';

const ThemeContext = React.createContext({
  color: 'light'
});
const Example3Component: React.FC = () => {

  return (
    <div className="example">
      <h2>FC(context)</h2>
      <ThemeContext.Provider value={{'color': 'red'}}>
          <ThemedButton />
        </ThemeContext.Provider>
      <pre>
        <code>
          {`
            import React, { useContext } from 'react';

            const ThemeContext = React.createContext({
              color: 'light'
            });
            const Example3Component: React.FC = () => {

              return (
                <div className="example">
                  <h2>FC(context)</h2>
                  <ThemeContext.Provider value={{'color': 'red'}}>
                      <ThemedButton />
                    </ThemeContext.Provider>
                </div>
              );
            }

            const ThemedButton = ()=> {
              const theme = useContext(ThemeContext);
              return (
                <div>color: {theme.color}</div>
              )
            }

            export default Example3Component;
          `}
        </code>
      </pre>
    </div>
  );
}

const ThemedButton = ()=> {
  const theme = useContext(ThemeContext);
  return (
    <div>color: {theme.color}</div>
  )
}

export default Example3Component;