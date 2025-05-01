import { useState } from 'react'
import './App.css'
import Task from './component/task';

function App() {
  const [Count, SetCount] = useState(0)

  return (
    <>
     <Task/>
    </>
  )
}

export default App
