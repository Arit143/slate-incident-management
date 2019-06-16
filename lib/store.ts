export interface Action {
    type: String;
    payload?: Object | String | Number;
}

export interface State {
    [key: string]: any;
}

export interface Reducer {
  [key: string]: Function;
}

export class Store {
    private subscribers: Function[];
    private reducers: Reducer;
    private state: State;

    /**
     * 
     * @param reducers 
     * @param initialState 
     */
    constructor(reducers = {}, initialState = {}) {
      this.subscribers = [];
      this.reducers = reducers;
      this.state = this.reduce(initialState, { type: '' });
    }
    
    /**
     * Get state
     */
    get value() {
      return this.state;
    }
    
    /**
     * 
     * @param fn 
     * return state for a particular subscriber
     */
    subscribe(fn: Function) {
      this.subscribers = [...this.subscribers, fn];
      fn(this.value);
      return () => {
        this.subscribers = this.subscribers.filter(sub => sub !== fn);
      };
    }
    
    /**
     * 
     * @param action 
     * Action dispatcher
     */
    dispatch(action: Action) {
      this.state = this.reduce(this.state, action);
      this.subscribers.forEach(fn => fn(this.value));
    }
    
    /**
     * 
     * @param state 
     * @param action
     * Put slices of data in the store 
     */
    private reduce(state: State, action: Action) {
      const newState: State = {};
      for (const prop in this.reducers) {
        newState[prop] = this.reducers[prop](state[prop], action);
      }
      return newState;
    }
  }