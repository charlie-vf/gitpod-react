import React, {useState} from 'react'
import UseEffectCounter from './UseEffectCounter'

function UseEffectCounterContainer() {

    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={() => {
            // passes not display - sets to the opposite of what display curently is
            setDisplay(!display)
        }}>
            Toggle Display
        </button>
        {/* Render if display is true, don't render if not */}
        {display && <UseEffectCounter />}
    </div>
  )
}

export default UseEffectCounterContainer