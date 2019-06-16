import { Details } from '../types/app.type';

export const setIncidentDetails = (details: Details) => {
    return {
        type: 'SET_INCIDENT_DETAILS',
        payload: details
    }
}