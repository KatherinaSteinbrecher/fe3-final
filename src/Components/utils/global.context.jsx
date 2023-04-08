import { createContext, useContext, useState, useEffect, useReducer } from "react";

export const initialState = { theme: "light", data: [] };
export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case 'dark':
      return { ...state, theme: action.payload };
    case 'light':
      return { ...state, theme: action.payload };
    default:
      return state; // Devolver el estado actual en caso de acción desconocida
  }
};

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `https://jsonplaceholder.typicode.com/users`;
  
  const [dentist, setDentist] = useState([]);

  const [myArray, setArray] = useState(() => {
    const data = JSON.parse(localStorage.getItem("myArray")) || [];
    return data;
  });

  useEffect(() => {
    localStorage.setItem("myArray", JSON.stringify(myArray));
  }, [myArray]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDentist(data))
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        dentist,
        state,
        dispatch,
        myArray,
        setArray
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useGlobalStates = () => useContext(ContextGlobal);
