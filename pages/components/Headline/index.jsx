import { React, useCallback, useState } from "react";
import styles from "./Headline.module.css";

const Headline = (props) => {
  // export function Headline(props) {

  // ↓Headlineコンポーネントでのみ使用するstate
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const [array, setArray] = useState([1]);

  console.log(text);

  // ボタンクリック時の処理（fooの値を1増やす）
  const handlerClick = (e) => {
    if (count < 10) {
      setCount((foo) => foo + 1);
    }
  };

  const handleAdd = useCallback(() => {
    // alert(123);
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します")
        return prevArray;
      }
              const newArray = [...prevArray, text];
              return newArray;
    });
  }, [text]);

  return (
    <>
      <h1 className={styles.title}> {props.page} page</h1>
      <p className={styles.description}>
        {" "}
        Get started by editing {props.children}
      </p>

      <h1>{count}</h1>

      <button onClick={handlerClick} className={styles.btn01}>
        カウントアップボタン
      </button>

      {/* e.target.valueはinputに入力した値 */}
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button onClick={handleAdd}>追加ボタン</button>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Headline;
