import {useReducer,useRef} from 'react'
import './App.css'
import Input from './componet/input'
import List from './componet/list'
 
const initialState ={
  task:[]
}

const reducer = (state, action) => {
  switch(action.type) {
     case "Add_item":
       return {
         ...state,
         task: [...state.task, { id: Date.now() * Math.random(), item: action.payload, visible: true }]
       };
     case "toggle":
       return {
         ...state,
         task: state.task.map((ele) => {
            return ele.id === action.payload ? { ...ele, visible: !ele.visible } : ele;
         })
       };
     default:
       return state;
  }
};



function App() {
   
  const myRef =useRef(null)
 
  let handleFocusButtonClick=()=>{
    myRef.current.focus()
  }
 
  const [state,dispatch]=useReducer(reducer,initialState)
  
  console.log(state)
  const addItem =(item)=>{
      dispatch({type:"Add_item",payload:item})
  }

  const toggleVisibility =(id)=>{
     dispatch({type:"toggle",payload:id})
  }

  return (
     
    <>
      <Input addItem={addItem} inputRef={myRef}/> 
      <List items = {state.task} toggleVisibility={toggleVisibility}/>
      
      <button onClick={handleFocusButtonClick}>Scroll to top</button>

    </>
  )
}

export default App

