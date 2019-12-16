import React, { createRef, forwardRef, ObjectHTMLAttributes } from 'react';


const Example7Component: React.FC = () => {
  const textInput: any = createRef<HTMLInputElement>();

  const handleClick = () => {
    if (textInput['current'].value.length > 0) {
      textInput['current'].select();
      document.execCommand('copy');
      alert(`クリップボードにコピーしました: ${textInput['current'].value}`);
    }else {
      alert('入力してください。');
    }
  }

  return (
    <div className="example">
      <h2>FC(Refs)</h2>
      <ChildrenComponent ref={textInput} onhandleClick={handleClick}/>
      <button onClick={handleClick}>COPY</button>
      <pre>
        <code>
          {`
            import React, { createRef, forwardRef } from 'react';


            const Example7Component: React.FC = () => {
              const textInput = createRef<HTMLInputElement>();

              const handleClick = () => {
                if (textInput['current'].value.length > 0) {
                  textInput['current'].select();
                  document.execCommand('copy');
                  alert('クリップボードにコピーしました:' + textInput['current'].value);
                }else {
                  alert('入力してください。');
                }
              }

              return (
                <div className="example">
                  <h2>FC(Refs)</h2>
                  <ChildrenComponent ref={textInput} onhandleClick={handleClick}/>
                  <button onClick={handleClick}>COPY</button>
                </div>
              );
            }

            type Props = {
              onhandleClick: VoidFunction
            }

            const ChildrenComponent = forwardRef<HTMLInputElement, Props>((props, ref) => {

              const copyText = () => {
                props.onhandleClick()
              };

              return (
                <>
                  <input type="text" ref={ref} />
                  <button onClick={copyText}>コピー</button>
                </>
              )
            })


            export default Example7Component;

          `}
        </code>
      </pre>
    </div>
  );
}

type Props = {
  onhandleClick: VoidFunction
}

const ChildrenComponent = forwardRef<HTMLInputElement, Props>((props, ref) => {

  const copyText = () => {
    props.onhandleClick()
  };

  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={copyText}>コピー</button>
    </>
  )
})


export default Example7Component;