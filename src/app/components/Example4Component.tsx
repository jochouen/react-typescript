import React from 'react';

interface Props {
  title: string
}

interface State {
  count: number
}

class Example4Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count : 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render () {
    return (
      <div className="example">
        <h2>{this.props.title}</h2>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Click me
        </button>

        <button onClick={() => this.setState({count: 0})}>
          Reset
        </button>
        <pre>
          <code>
            {`
            import React from 'react';

            interface Props {
              title: string
            }

            interface State {
              count: number
            }

            class Example4Component extends React.Component<Props, State> {
              constructor(props) {
                super(props);
                this.state = {
                  count : 0
                }
              }

              componentDidMount() {
                console.log('componentDidMount');
              }

              componentDidUpdate() {
                console.log('componentDidUpdate');
              }

              componentWillUnmount() {
                console.log('componentWillUnmount');
              }

              render () {
                return (
                  <div>
                    <h2>{this.props.title}</h2>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={() => this.setState({count: this.state.count + 1})}>
                      Click me
                    </button>
                    <button onClick={() => this.setState({count: 0})}>
                      Reset
                    </button>
                  </div>
                )
              }
            }

            export default Example4Component;
            `}
          </code>
        </pre>
      </div>
    )
  }
}

export default Example4Component;