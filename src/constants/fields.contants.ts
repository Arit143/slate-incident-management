export const INITIAL_VALUES = {
    ticketName: '',
    description: '',
    firstName: '',
    lastName: '',
    city: '',
    zip: '',
    assignee: 'engineer',
    status: 'open'
};

export const assignees = [
    {
      value: 'engineer',
      label: 'Engineer',
    },
    {
      value: 'admin',
      label: 'Admin',
    },
    {
      value: 'superAdmin',
      label: 'Super Admin',
    }
];

export const status = [
    {
      value: 'resolved',
      label: 'Resolved',
    },
    {
      value: 'open',
      label: 'Open',
    },
    {
      value: 'pending',
      label: 'Pending',
    },
    {
        value: 'acknowleged',
        label: 'Acknowledged',
      }
];

export const FORMIK_FIELDS = {
    TICKET_NAME: 'ticketName',
    DESCRIPTION: 'description',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    CITY: 'city',
    ZIP: 'zip',
    ASSIGNEE: 'assignee',
    STATUS: 'status'
}