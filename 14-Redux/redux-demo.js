const redux = require("redux");

defaultState = {
  counter: 0,
};

const counterReducer = (oldState = defaultState, action) => {
  if (action.type === "increment") {
    return {
      counter: oldState.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: oldState.counter - 1,
    };
  }
  return defaultState;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
