import React, { createContext, useContext, useReducer } from "react";

/* 
useContext chúng ta có thể chia sẻ state tới các component, 
useReducer thì cho phép chúng ta cập nhật giá trị mới cho state. 
*/
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);