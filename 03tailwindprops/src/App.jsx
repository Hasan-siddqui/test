import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    uername: "Hasan",
    age:23
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-xl">
        Tailwind Test
      </h1>
      <Card username="reacttest" btnText="Click Here" paraGraph="This is First" />
      <Card username="Hasan" btnText="Visit Here" paraGraph="This is second"/>
      <Card username="Siddiqui" btnText="Show Here" paraGraph="This is Third"/>
    </>
  );
}

export default App;
