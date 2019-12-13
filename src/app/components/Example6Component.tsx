import React, { createRef } from 'react';

class Example6Component extends React.Component {
  textInput: React.RefObject<ChildrenComponent>;

  constructor(props) {
    super(props);
    this.textInput = createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render () {
    return (
      <div className="example">
        <h2>Class Base(Refs)</h2>
        <ChildrenComponent ref={ this.textInput } />
        <pre>
          <code>
            {`
              import React, { createRef } from 'react';

              class Example6Component extends React.Component {
                textInput: React.RefObject<ChildrenComponent>;

                constructor(props) {
                  super(props);
                  this.textInput = createRef();
                }

                componentDidMount() {
                  console.log(this.textInput.current);
                  this.textInput.current.focusTextInput();
                }

                render () {
                  return (
                    <div className="example">
                      <h2>Class Base(Refs)</h2>
                      <ChildrenComponent ref={ this.textInput } />
                    </div>
                  )
                }
              }

              class ChildrenComponent extends React.Component {
                inputRef: React.RefObject<HTMLInputElement>;
                constructor(props) {
                  super(props);
                  this.inputRef = createRef();
                  this.focusTextInput = this.focusTextInput.bind(this);
                }

                focusTextInput() {
                  this.inputRef.current.focus();
                }

                render(){
                  return(
                    <div>
                      <input type='text' ref={ this.inputRef }/>
                      <input
                        type="button"
                        value="Focus the text input"
                        onClick={this.focusTextInput}
                      />
                    </div>
                  )
                }
              }


              export default Example6Component;

            `}
          </code>
        </pre>
      </div>
    )
  }
}

class ChildrenComponent extends React.Component {
  inputRef: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.inputRef.current.focus();
  }

  render(){
    return(
      <div>
        <input type='text' ref={ this.inputRef }/>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}


export default Example6Component;