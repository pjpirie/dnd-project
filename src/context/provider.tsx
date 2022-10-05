import * as React from "react";
import rootReducer} from './reducers';
/* import { combineReducer } from '../utils/combineReducers'; */
/* import { persistState } from '../utils/persistState'; */

const AppStateProvider = React.createContext({});

/* const nonPersistedKeys: RootReducerKey[] = ['identity']; */

function ContextProvider({ children, overwrite }: any): any {
  const reducers = React.useCallback(
    () => combineReducer(rootReducer), // eslint-disable-next-line react-hooks/exhaustive-deps
    [combineReducer]
  );

  // call the function to get initial state and global reducer
  const [initialState, mainReducer] = reducers();

  // setup useReducer with the returned value of the reducers function
  const [state, dispatch] =              React.useReducer(

    mainReducer as React.ReducerWithoutAction<any>,

    initialState

  );

  // pass in the returned value of useReducer
  let contextValue = React.useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  if (overwrite?.state) {
    contextValue = { ...contextValue, state: { ...state, ...overwrite.state }};
  }

  return (
    <AppStateProvider.Provider value={contextValue}>
      {children}
    </AppStateProvider.Provider>
  );
}

export { ContextProvider, AppStateProvider as ContextConsumer };
