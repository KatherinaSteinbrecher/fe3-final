import { createContext, useContext, useState, useEffect, useReducer } from "react";


export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

const reducer = (state , action) => {
  switch(action.type){
    case 'dark': 
      return {...state,theme:action.payload}
    case 'light':
      return {...state, theme:action.payload}
    default:
      return state
  }
}

export const Context= ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state,dispach] = useReducer(reducer, initialState)

  const url = `https://jsonplaceholder.typicode.com/users`
  const [dentist, setDentist] = useState([])
  

useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentist(data))
}, [])




  return (
    <ContextGlobal.Provider 
    value={{
        dentist,state,dispach
    }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
 
  export default Context

   export const useGlobalStates = () => {
    return useContext(ContextGlobal);
  }
