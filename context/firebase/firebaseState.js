import React, {useReducer} from 'react';

import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';

const FirebaseState = props => {
  // Crear el estado inicial

  const inicialState = {Catalog: []};

  // Crear el UseReduce se crea de la siguiente manera:
  const [state, dispatch] = useReducer(firebaseReducer, inicialState);
  return (
    <FirebaseContext.Provider value={{Catalog: state.Catalog}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
