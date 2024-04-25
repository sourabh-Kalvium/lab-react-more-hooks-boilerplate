import React from 'react'

function Input(props) {
  return (
    <>
      <input  onKeyDown={(e)=>{
        if(e.key==="Enter"){
            props.addItem(e.target.value)
            e.target.value=""
        }
      }} type="text"
       ref={props.inputRef} />
    </>
  )
}

export default Input