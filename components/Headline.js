import { React } from "react";


export function Headline(props) {

  console.log(props);

  return (
    <>
      <h1> { props.page } page</h1>
      <p> Get started by editing </p>
      <button onClick={props.onClick}>ボタン</button>
    </>
  );
};
