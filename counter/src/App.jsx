import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      console.log("Maximum limit reached");
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      console.log("Minimum limit reached");
    }
  }

  return (
    <>
      <h1>Counter React App</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App
// import { useState } from "react";

// function App() {
//   let [counter, setCounter] = useState(5)

//   // let counter = 5
//   const addValue =()=>{
//     // counter = counter + 1
//     setCounter(counter + 1)
//     console.log("clicked", counter);
//   }
//   const removeValue =()=>{
//     // counter = counter - 1
//     setCounter(counter - 1)
//     console.log("clicked", counter);
//   }

//   return (
//     <>
//     <h1>Counter React App</h1>
//     <h2>Counter value : {counter}</h2>

//     <button
//     onClick={addValue}
//     >Add Value {counter}</button>
//     <br />
//     <button
//     onClick={removeValue}
//     >Remove Value {counter}</button>
//     <p>Footer{counter}</p>
//     </>
//   )
// }

// export default App
