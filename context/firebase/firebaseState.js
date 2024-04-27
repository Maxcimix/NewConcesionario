import React, {useReducer} from 'react';
import firebase from '../../firebase';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';



const FirebaseState = props => {
  // Crear el estado inicial

  const inicialState = {
    Home: []
  };

  // Crear el UseReduce se crea de la siguiente manera:
  const [state, dispatch] = useReducer(firebaseReducer, inicialState);
  return (
    <FirebaseContext.Provider
      value={{
        Home: state.Home,
        firebase
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
