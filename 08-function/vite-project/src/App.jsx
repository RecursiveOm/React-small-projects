import React from 'react'


function Button(props){

  return(
    <button 
      style={{
        color: props.color,
        fontSize: props.fontSize + 'px'
      }}
    >
      {props.text}
    </button>
  )
}


const App = () => {

  return (

    <div>

      <Button 
        text="Click Me" 
        color="blue"  
        fontSize={12}
      />

      <Button 
        text="Click Meee" 
        color="black"  
        fontSize={22}
      />

      <Button 
        text="Click Me Please" 
        color="red"  
        fontSize={18}
      />

    </div>
  )
}

export default App