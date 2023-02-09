
import { useState } from 'react';
const FormInput = (props)=>{
    const [inputType]=useState(props.type)
    const [inputValue,setInputValue]=useState('')
    
    const handleInput = (e)=>{
        setInputValue(e.target.value)
        if(props.onChange){
            props.onChange(inputValue)
        }
    }
    return(
    <div>
        <input type={inputType}
         value = {inputValue} 
         name = 'input-form' 
         onChange={handleInput} 
         className='input-class'/>
         <p>{inputValue}</p>
    </div>
    )
}
export default FormInput