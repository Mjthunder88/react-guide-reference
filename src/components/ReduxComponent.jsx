import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const ReduxComponenet = () => {
    const dispatch = useDispatch()

    const name = useSelector(state => state.name)
    const count = useSelector(state => state.count)
    return (
        <div className='card'>
            <h2>Redux</h2>
            <ul>
                <li>{name}</li>
                <li>{count}</li>
            </ul>
        </div>
    )
}


export default ReduxComponenet