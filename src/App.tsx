import { ChangeEvent, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Circles from './Circles'
interface IObject {
  x: Number;
  y: Number;
}
function App() {
  const [count, setCount] = useState(0)
  const [circles, setCircles] = useState<IObject[]>([])
  
  const handleCircleAdd = (ev: MouseEvent) => {
    const circleX:Number = ev.clientX
    const circleY: Number = ev.clientY
      setCircles((prevCircles)=>[...prevCircles, {x: circleX, y: circleY}])
  }
  const handleDeleteCircles = () => {
    setCircles([])
  }
  useEffect(()=>{
    window.addEventListener('click',handleCircleAdd);
    return ()=>{
      window.removeEventListener('click',handleCircleAdd)
    }
  },[])
  return (
    <div className="App">
      <Circles circles={circles}/>
      {circles.length>10 ? <button onClick={handleDeleteCircles}>DELETE CIRCLES</button> : null}
    </div>
  )
}

export default App
