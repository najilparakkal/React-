
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  let [state, setState] = useState(false)
  return (
    <div>
      <h1 onClick={() => setState(!state)}> Sow/Hide</h1>
     {state &&  <Counter/> }
    </div>
  )
}

export default App