import { Action } from 'my-custom-redux';
import { TicketState } from '../types/app.type';

const INITIAL_STATE: TicketState = {
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