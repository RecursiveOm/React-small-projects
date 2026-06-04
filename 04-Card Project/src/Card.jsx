import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} />
      <h1>{props.user},{props.age}</h1>
      <p>A selected Candidate for the interview</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card