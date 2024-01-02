import React from 'react';

function Button({children}) {
  const handleclick = () => {
    alert('I love you')
  }
  return (
    <button onClick={handleclick}>
        {children}
    </button>
  )
}

export default Button
