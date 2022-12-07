import React, { useRef } from 'react'

const RefComponent = () => {

    const inputRef = useRef()

    const checkRef = () => {
        alert(`Your input has the string: ${inputRef.current.value}`)
        inputRef.current.value = '' // just resets the input field to blank
        inputRef.current.focus() //focuses the cursor inside of the input field after its rendered again. 
    }

    return (
        <div className='card'>
            <h2>useRef</h2>
            <input type="text" ref={inputRef} />
            <button onClick={checkRef}>What's my ref?</button>
        </div>
    )
}

export default RefComponent