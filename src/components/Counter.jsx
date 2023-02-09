import React,{useState} from 'react'
import useToggleHooks from '../hooks/useToggle'




function Counter({title,content}) {
    // const [expend,setExpend]=useState(false)
    const {expend,toggleHandler}=useToggleHooks()
    // const clickHandler = ()=>{
    //     setExpend(prv=>!prv)
    // }
    // console.log('ex',expend)
    return (
        <div>
            {/* <p>{title}</p>
            <button style={{background:'green',width:'400px',height:'120px'}}
             onClick={toggleHandler}>increment <span>{expend?'-':'+'}</span></button> */}
             
             {/* <Body content = {content}/> */}
             {/* {expend && <div>{content}</div>} */}
             <Header title ={title} btnTitle='increment' content={content} />
        </div>
    )
}

export default Counter

// Header 
const Header = ({title,btnTitle,content})=>{
    const {expend,toggleHandler}=useToggleHooks()

    return(
    <div>
         <p>{title}</p>
            <button style={{background:'green',width:'400px',height:'120px'}}
             onClick={toggleHandler}>
              <h2>{btnTitle}</h2>
              <h1>{expend?'-':'+'}</h1>
            </button>
            {expend && <Body content ={content}/>}
    </div>)
}

// Body 

const Body =({content})=>{
    return(
        <h1>{content}</h1>
    )
}
