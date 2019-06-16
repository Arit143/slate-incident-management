export interface Details {
    ticketName: string;
    description: string;
    firstName: string;
    lastName: string;
    city: string;
    zip: string;
    assignee: string;
    status: string;
}

export interface TicketState {
    tickets: Array<Details> | [];
}

export interface AppState {
    app: TicketState
}