import React, { createContext, useContext, useReducer } from 'react'
import {activities} from './activities'

export const SelectedActivityContext = createContext()

export function useSlectedActivity(){
    return useContext(SelectedActivityContext)
}


function reducer(state, action) {
    switch(action.type) {
        case 'select-activity':
            return {...state, selectedActivity: action.payload}
            case 'delete-activity':
                return {...state, activities: action.payload}
        default:
            return state
    }
}

const initialState = {
    selectedActivity: null,
    activities: activities
}

export function SelectedActivityContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
         dispatch,
         activities: state.activities,
         selectedActivity: state.selectedActivity
    }
    return (
        <SelectedActivityContext.Provider value={value}>
            {children}
        </SelectedActivityContext.Provider>
    )
}
