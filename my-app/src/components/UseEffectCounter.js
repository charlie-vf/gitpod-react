import React, {useState, useEffect} from 'react'

function UseEffectCounter() {

    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    // the useEffect hook takes, as a parameter, a function that will be executed
    // after every render of the component - this isn't ideal
        // the second argument at the end, [count], fixes this
            // tells the hook that this function should only run when the count changes
    // In this way, it will take care of running whatever function you give it both immediately
    // after the component mounts, and every time it updates
    // e.g. update document title to reflect the new count
    useEffect(() => {
        console.log('count 1 effect')
        document.title = count;
    }, [count]);
    useEffect(() => {
        console.log('Creating timer')
        const interval = setInterval(() => {
            console.log('Interval executed')
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('Cleaning up')
            clearInterval(interval);
        }
        // empty array so it only runs once
    }, [])


  return (
    <div>
        <button onClick = {
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter