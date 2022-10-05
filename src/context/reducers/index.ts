import userReducer from "./userReducer";

const combineReducers = (reducers: any) => (state, action) =>
  // Build the combined state
  Object.keys(reducers).reduce(
    (prevState, key) => ({
      ...prevState,
      [key]: reducers[key](prevState[key], action),
    }),
    state
  );

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
