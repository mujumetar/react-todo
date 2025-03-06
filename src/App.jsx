import { useState } from 'react'
import './App.css'
import Task from './component/task';
import List from './component/list';

function App() {
  const [Count, SetCount] = useState(0)

  return (
    <>
     <Task/>
    </>
  )
}

export default App
