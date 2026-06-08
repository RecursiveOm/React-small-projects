import React , {useState} from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function call(){
    let t=num-1;
    setnum(t);

  }
  function call1(){
    let t = num+1;
    setnum(t+1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={call1}>Increase</button>
      <button onClick={call}> Decrease</button>

    </div>
  )
}

export default App
