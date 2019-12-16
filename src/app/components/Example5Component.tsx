import React from 'react';
const ThemeContext = React.createContext({
  color: 'light'
});

class Example5Component extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render () {
    return (
      <div className="example">
        <h2>Class Base(context)</h2>
        <ThemeContext.Provider value={{'color': 'red'}}>
          <ThemedButton />
        </ThemeContext.Provider>
        <pre>
          <code>
            {`
              import React from 'react';
              const ThemeContext = React.createContext({
                color: 'light'
              });

              class Example5Component extends React.Component {
                constructor(props) {
                  super(props);
                }

                render () {
                  return (
                    <div className="example">
                      <h2>Class Base(context)</h2>
                      <ThemeContext.Provider value={{'color': 'red'}}>
                        <ThemedButton />
                      </ThemeContext.Provider>
                    </div>
                  )
                }
              }


              class ThemedButton extends React.Component {
                render() {
                  return (
                    <ThemeContext.Consumer>
                    {context => (
                      <div>{context.color}</div>
                    )}
                    </ThemeContext.Consumer>
                  )
                }
              }

              export default Example5Component;
            `}
          </code>
        </pre>
      </div>
    )
  }
}


class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
      {context => (
        <div>color: {context.color}</div>
      )}
      </ThemeContext.Consumer>
    )
  }
}

export default Example5Component;