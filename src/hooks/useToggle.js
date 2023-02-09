
import { useState } from 'react';

const useToggleHooks = ()=>{
    const [expend,setExpend]=useState(false)
    const toggleHandler = ()=>{
        setExpend(prev =>!prev)
    }
    return {
        expend,
        toggleHandler
    }
}
export default useToggleHooks;