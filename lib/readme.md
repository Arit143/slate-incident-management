Example implementation

## Action
```
const action = (payload) => {
    return {
        type: 'ACTION_NAME',
        payload
    }
}
```

### Reducer

```
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ACTION_NAME': 
        return {
          ...state,
          ...someExtraState
        }
      default: {
        return { ...state };
      }
    }
}
```

### Store

```
const reducers = {
    app: reducer
}

/**
Store takes in reducer slice and initial state
*/
const store = new Store(reducers, {}); 
```

### Dispatch

```
const Component = () => {
    const onClick = () => store.dispatch(action(payload));
    return <button onClick={onClick}>Test</button>
}
```
### Subscribe

```
const Component = () => {
    const  appState= [];
    store.dispatch(state => appState = state);
    return <button>{appState.property}</button>
}

```

