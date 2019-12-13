import React, { useContext } from 'react';

const ThemeContext = React.createContext({
  color: 'light'
});
const Example3Component: React.FC = () => {

  return (
    <div className="example">
      <h2>FC(ContextApi、UseContext)</h2>
      <ThemeContext.Provider value={{'color': 'red'}}>
          <Toolbar />
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
                  <h2>FC(ContextApi、UseContext)</h2>
                  <ThemeContext.Provider value={{'color': 'red'}}>
                      <Toolbar />
                    </ThemeContext.Provider>
                </div>
              );
            }

            const Toolbar = ()=> {
              return (
                <>
                  <ThemedButton />
                </>
              )
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

const Toolbar = ()=> {
  return (
    <>
      <ThemedButton />
    </>
  )
}

const ThemedButton = ()=> {
  const theme = useContext(ThemeContext);
  return (
    <div>color: {theme.color}</div>
  )
}

export default Example3Component;