import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
    const navigate = useNavigate()
    const userInputRef = useRef()
    

    const handleClick = (event) => {
        let checkInput = +userInputRef.current.value
        // console.log(checkInput)
        if (Number.isFinite(checkInput)) {
            console.log("Number")
            navigate(`/details/${checkInput}`)
        } else {
            console.log("Not a Number")
        }
    }

    return (
        <div className='col-container'>
            <h1>Home</h1>
            <input type="text" ref={userInputRef} />
            <button onClick={handleClick}>Leave</button>
        </div>
    )
}

export default HomeScreen

// * useNavigate will redirect a user to another page/ url landing spot. 
// * When used with logic or check statements to make sure the user has sent in the right information. 