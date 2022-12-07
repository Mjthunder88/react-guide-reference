import { createContext, useReducer } from "react";

const initialState = {
    name: "Marcus",
    count: 0,
    list: []
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "CHANGENAME":
                return {...state, name: action.payload}
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


// this means that anything between/wrapped with this context will have acces to this data
// * this context needs a value 


export default GlobalContext
export {GlobalContextProvider}  