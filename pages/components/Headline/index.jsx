import { React, useCallback } from "react";
import styles from "./Headline.module.css";


export function Headline(props) {

const foo = 1;

const handlerClick = useCallback((e, foo) => {
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
}, []);


  return (
    <>
      <h1 className={styles.title}> {props.page} page</h1>
      <p className={styles.description}>
        {" "}
        Get started by editing {props.children}
      </p>

      {/* button-test */}
      {/* <a
        href="/about"
        onClick={handlerClick}
      >
        /about/への遷移ボタン
      </a> */}

    </>
  );
}
