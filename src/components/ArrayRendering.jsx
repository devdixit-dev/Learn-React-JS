import React from 'react'

const ArrayRendering = () => {

  let array = [1, 2, 3, 4, 5]

  return (
    <div>
      {array.map((num) => { return <p key={num}>{num}</p> })}
    </div>
  )
}

export default ArrayRendering