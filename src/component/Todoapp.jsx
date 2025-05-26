import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
 
const Todoapp = () => {
    const[input , setInput]= useState('')
    const[userInput, setUserInput]=useState([]);
    const inputRef=useRef()
    const handleInput=()=>{
        if(input.trim() !==""){
            setUserInput([...userInput , input])
            setInput('');
        }
    }
   const handleRemove = (i) => {
  const filterInput = userInput.filter((_, id) => 
    i !== id);
  setUserInput(filterInput);
};

    useEffect(()=>{
        const handleKey=(e)=>{
            if(e.key==="/"){
                e.preventDefault();
                inputRef.current.focus();
            }
            if(e.key==="Enter"){
                e.preventDefault()
                btnRef.current.click()
            }
        }
    })
  return (
   <>

   <div className='main-container'>
    <div className="container">
    <h1>To Do List</h1>

     <input type="text" value={input} placeholder='Enter something...' 
     onChange={(e)=>setInput(e.target.value)}
     />
     <button className='addItemBtn' onClick={handleInput}>ADD</button>
     <div className="addInput">
        {userInput.length>0 && userInput.map((data , i)=>(
            <p className='siftRemove' key={i}>
                {data}
                <button className="remove" onClick={()=>handleRemove(i)}><FontAwesomeIcon icon={faXmark}/></button>
            </p>
        
    ))}
    </div>
    <div className="removeAll">
        <p>{userInput.length} Pending tasks</p> 
        {userInput.length>0 && 
    <button className='removeAllBtn' onClick={()=>setUserInput("")} >Remove All</button>
        }
    </div>
     </div>
   </div>
   </>
  )
}

export default Todoapp