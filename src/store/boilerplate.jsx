import { createContext, useReducer } from "react";

const initialState = {

}

const BoilerplateContext = createContext()

const BoilerplateContextProvider = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <BoilerplateContext.Provider value={{state, dispatch}}>
            {props.children}
        </BoilerplateContext.Provider>
    )
}


// this means that anything between/wrapped with this context will have acces to this data
// * this context needs a value 


// export default BolierplateContext

// export {BoilerplateContextProvider}   