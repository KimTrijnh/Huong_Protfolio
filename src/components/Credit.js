import React from 'react'

const Style = {
    background: 'rgba(195, 83, 235, 0.4)',
    boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    position: 'absolute',
    bottom : 0,
    left: 0,
    margin: '15px 10px',
    padding: '10px',
    color: 'white'
}
const Credit = () => {
  return (
    <small style={Style}>
    Made by Huong Trinh with <i className="tim-icons icon-heart-2"></i>
    </small>
  )
}

export default Credit
