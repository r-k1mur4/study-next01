import { React, useState } from "react";
import styles from "./Headline.module.css";


export function Headline(props) {

  // ↓Headlineコンポーネントないでのみ使用するstate
  const [count, setCount] = useState(1);

  // ボタンクリック時の処理（fooの値を1増やす）
  const handlerClick = (e) => {
    setCount(foo => foo + 1);
  };


  return (
    <>
      <h1 className={styles.title}> {props.page} page</h1>
      <p className={styles.description}>
        {" "}
        Get started by editing {props.children}
      </p>

      <h1>{ count }</h1>

      <button
        onClick={handlerClick}
        className={styles.btn01}
      >
        カウントアップボタン
      </button>
    </>
  );
}
