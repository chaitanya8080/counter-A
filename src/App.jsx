
import './App.css';
import { useState} from "react"

function App() {
  const [count , setCount]=useState(0);
  return (
    <div className="App"> 
     <h1 className= {count % 2===0  ? 'green':'red'}>{count}</h1>
      <button onClick={()=>{ setCount(count+1)}}>Add 1</button>
      <button onClick={()=>{ setCount(count-1)}}>decrease 1</button>
      <button onClick={()=>{ setCount(count*2)}}>Double</button>
    </div>
  );
}

export default App;
