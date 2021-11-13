import React, { createContext, useContext, useReducer } from "react";
import { activities } from "./activities";

export const SelectedActivityContext = createContext();

export function useSlectedActivity() {
  return useContext(SelectedActivityContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "select-activity":
      return { ...state, selectedActivity: action.payload };
    case "delete-activity":
      return { ...state, activities: action.payload };
    default:
      return state;
  }
}

export function SelectedActivityContextProvider({ children, testActivities }) {
  const initialState = {
    selectedActivity: null,
    activities: testActivities ?? activities,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { ...state, dispatch };

  return (
    <SelectedActivityContext.Provider value={value}>
      {children}
    </SelectedActivityContext.Provider>
  );
}
