import { Action } from 'my-custom-redux';

const INITIAL_STATE = {
    tickets: []
};


export function homeReducer(state = INITIAL_STATE, action: Action) {
    switch (action.type) {
      default: {
        return { ...state, tickets: ['abc'] };
      }
    }
  
    return state;
  }