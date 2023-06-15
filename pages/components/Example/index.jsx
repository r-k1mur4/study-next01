import { useState } from 'react';


const HooksExample = (props) => {
// export function HooksExample(props) {

  // Exampleコンポーネントでのみ使用するstate
  const [count, setCount] = useState(0);

  // ボタンクリック時の処理（countの値を1増やす）
  const handlerClick = (e) => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handlerClick}>Click me</button>
    </div>
  );

}


export default HooksExample;
