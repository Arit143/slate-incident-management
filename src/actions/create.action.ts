import { Details } from './../types/details.type';

export const setIncidentDetails = (details: Details) => {
    return {
        type: 'SET_INCIDENT_DETAILS',
        payload: details
    }
}