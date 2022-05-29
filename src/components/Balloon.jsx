import React, { useEffect } from 'react'
import { useState } from 'react'
import "./balloon.css"
const Balloon = () => {
    const [arrIndex , setArrindex] = useState(0)
    const [arr,setArr] = useState([1,2,3,4,5])
    const [num , setNum] = useState(0)
    const [container , setContainer] = useState([])
    const handleChange = (e) => {
        setArrindex(e.target.value)
    }
    useEffect(() => {
    arr.sort((a,b) => a-b)
    setArr(arr)
    },[arr])

    const handleButtonclick = () => {
        setNum(arr[arrIndex-1])
        setContainer(state => [...state, arr[arrIndex-1]])
        setArr(arr.filter(item => item !== arr[arrIndex-1]))
    }

    const popBalloon = (moveableNumber) => {
        // remove the container[arrIndex-1] from the container and push into arr at arrIndex - 1
        //if container is empty push directly
        setContainer(container.filter(item => item !== moveableNumber))
        setArr(state => [...state , moveableNumber])
    }
  return (
        <div className='Container'>
            <div className='EmptyContainer'>
            {/* if container includes 1,2,3,4,5 then render it accordingly */}
            {container.includes(1) ? <div className='firstCircle' onClick={() => popBalloon(1)}></div> : ""}
            {container.includes(2) ? <div className='secondCircle' onClick={() => popBalloon(2)}></div> : ""}
            {container.includes(3) ? <div className='thirdCircle' onClick={() => popBalloon(3)}></div> : ""}
            {container.includes(4) ? <div className='fourthCircle' onClick={() => popBalloon(4)}></div> : ""}
            {container.includes(5) ? <div className='fifthCircle' onClick={() => popBalloon(5)}></div> : ""}
            </div>

            <div className='balloon-container'>
            {/* if arr includes 1,2,3,4,5 then render it accordingly */}
            {!arr.includes(1) ? "" : <div className='firstCircle'></div>}
            {!arr.includes(2) ? "" : <div className='secondCircle'></div>}
            {!arr.includes(3) ? "" : <div className='thirdCircle'></div>}
            {!arr.includes(4) ? "" : <div className='fourthCircle'></div>}
            {!arr.includes(5) ? "" : <div className='fifthCircle'></div>}
            </div>
            <div className='input-container'>
          <input type="text" onChange={handleChange} value={arrIndex} />
          <br/>
          <br/>
          <button onClick={handleButtonclick}>Shoot</button>
        </div>
        </div>   
  )
}

export default Balloon;