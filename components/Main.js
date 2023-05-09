import { React } from "react";
import Image from "next/image";

import { Inter } from "next/font/google";
import { List } from "../components/List.js";
import { Headline } from "../components/Headline.js";
import { Header } from "./Header.js";

const inter = Inter({ subsets: ["latin"] });


export function Main(props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />

      <Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>

      <List />
    </main>
  );
}
