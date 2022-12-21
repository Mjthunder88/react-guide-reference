import React from 'react'
import StateComponent from '../components/StateComponent'
import Effect from '../components/Effect'
import RefComponent from '../components/RefComponent'
import Interact from '../components/Interact'
import ContextComponent from '../components/ContextComponent'
import ReduxComponenet from '../components/ReduxComponent'


const ReferenceScreen = () => {
    return (
        <div className='col-container'>
            <h1>Reference</h1>
            <StateComponent />
            <Effect />
            <RefComponent />
            <ContextComponent />
            <Interact />
            <ReduxComponenet />
        </div>
    )
}

export default ReferenceScreen