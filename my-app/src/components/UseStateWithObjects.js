import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        // spread operators as otherwise there is disconnect between what's in
                        // the form, and what's in the state
                        ...name,
                        firstName: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        ...name,
                        lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects