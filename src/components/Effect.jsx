import React, {useEffect, useState} from 'react'
import axios from 'axios'



const Effect = () => {

    const [data, setData] = useState({})
    const [count, setCount] = useState(1)
    
    const getData = () => {
        axios.get(`https://www.swapi.tech/api/people/${count}`)
        .then((res) => {
            setData(res.data.result.properties)
        })
        .catch((error) => console.log(error))
    }

    const newPerson = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const prevPerson = () => {
        count !== 1 && setCount((prevCount) => prevCount - 1)
    }

// *-------------------------------------

    useEffect(() => {
        getData()
    }, [count])
    
// *---------------This code will run when (This component) is mounted to the DOM----------------------

    return (
        <div className='card'>
            <h2>useEffect</h2>
            <h3>Name: {data.name}</h3>
            <button onClick={newPerson}>New Character</button>
            <button onClick={prevPerson}>Previous Character</button>
        </div>
    )
}

export default Effect