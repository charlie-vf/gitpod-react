import React, {useState} from 'react'

function UseStateWithArrays() {

    const [nums, setNums] = useState([1, 2, 3]);
    const addNums = () => {
        /// ... is spread operator
        setNums([...nums, nums.length + 1])
    }
    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                // whenever the filter method returns false for an item, that item
                // is left out of the resulting array
                return idx !== nums.length - 1
            })
        )
    }

    return (
        <div>
            <button onClick={addNums}>
                Add Item
            </button>
            <button onClick={(removeNum)}>
                Remove Item
            </button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default UseStateWithArrays