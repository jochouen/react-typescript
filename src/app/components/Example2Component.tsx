import React, { useState, useEffect, useCallback, useRef, forwardRef } from 'react';

interface Props {
  title: string
}

const Example2Component: React.FC<Props> = (props) => {
  const [count, setCount] = useState(0);
  const inputEl = useRef(null);

  useEffect(() => {
    console.log('useEffect');
  });

  const updateCount = useCallback(() => {
    setCount(count + 1)
  }, [count])


  return (
    <div className="example">
      <h2>{props.title}</h2>
      <p>You clicked {count} times</p>
      <button onClick={updateCount}>
        Click me
      </button>
      <ChildrenComponent ref={inputEl} />
      <pre>
        <code>
          {`
            import React, { useState, useEffect, useCallback, useRef, forwardRef } from 'react';

            interface Props {
              title: string
            }

            const Example2Component: React.FC<Props> = (props) => {
              const [count, setCount] = useState(0);
              const inputEl = useRef(null);

              useEffect(() => {
                console.log('useEffect');
              });

              const updateCount = useCallback(() => {
                setCount(count + 1)
              }, [count])


              return (
                <div className="example">
                  <h2>{props.title}</h2>
                  <p>You clicked {count} times</p>
                  <button onClick={updateCount}>
                    Click me
                  </button>
                  <ChildrenComponent ref={inputEl} />
                </div>
              );
            }

            const ChildrenComponent = forwardRef<HTMLInputElement>((props, ref) => {
              const copyText = () => {
                document.execCommand('copy');
                alert('クリップボードにコピーしました:' + ref['current'].value);
              }
              return (
                <>
                  <input type="text" ref={ref}/>
                  <button onClick={copyText}>COPY</button>
                </>
              )
            })

            export default Example2Component;
          `}
        </code>
      </pre>
    </div>
  );
}

const ChildrenComponent = forwardRef<HTMLInputElement>((props, ref: any) => {
  const copyText = () => {
    document.execCommand('copy');
    alert(`クリップボードにコピーしました: ${ref['current'].value}`);
  }
  return (
    <>
      <input type="text" ref={ref}/>
      <button onClick={copyText}>COPY</button>
    </>
  )
})

export default Example2Component;