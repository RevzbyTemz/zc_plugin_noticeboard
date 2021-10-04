import React from 'react'

function TextInput(props) {
  return (
    <div>
    <input {...props} className={`${props.className ?? ""} "input"`} />;
    </div>
  )
}

export default TextInput

