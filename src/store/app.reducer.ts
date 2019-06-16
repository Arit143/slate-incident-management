import { Action } from 'my-custom-redux';
import { StoreState } from './../types/details.type';

const INITIAL_STATE: StoreState = {
    tickets: []
};


export function appReducer(state = INITIAL_STATE, action: Action) {
    switch (action.type) {
      case 'SET_INCIDENT_DETAILS': 
        return {
          ...state,
          tickets: [...state.tickets, action.payload]
        }
      default: {
        return { ...state };
      }
    }
  }