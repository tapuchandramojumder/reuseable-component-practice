import { useState } from 'react'
import Counter from './components/Counter'
import FormInput from './components/FormInput'

function App() {
  const [count, setCount] = useState(0)

  const  handleChange=(event)=> {
   
    console.log(event?.target?.value);
  }
  return (
    <div className="App">
    {/* <FormInput type='text'  /> */}
     <Counter title = 'this is our CounterApp' content = 'write your own content here'/>
    </div>
  )
}

export default App
