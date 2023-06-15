import { React, useEffect } from "react";
import Image from "next/image";

import { Inter } from "next/font/google";
import  List  from "pages/components/List/index.jsx";
import Headline from "pages/components/Headline/index.jsx";
import Header  from "pages/components/Header/index.jsx";
import HooksExample from "pages/components/Example/index.jsx";

const inter = Inter({ subsets: ["latin"] });

const Main = (props) => {

  useEffect(() => {
    // mount時の処理
    document.body.style.backgroundColor = "lightblue";

    // unmount時の処理
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />

      <Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>

      <HooksExample />


      <List />
    </main>
  );
}


export default Main;
