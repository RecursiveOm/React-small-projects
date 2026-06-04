import React from 'react'
import Card from './Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Aman singh" age={18} img="https://images.unsplash.com/photo-1779766342185-677b42fd175d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Therw trow" age={18} img="https://plus.unsplash.com/premium_photo-1779734561555-7b1ee1729427?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Feaari Rick" age={18} img="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App