export const INITIAL_VALUES = {
    ticketName: '',
    description: '',
    firstName: '',
    lastName: '',
    city: '',
    zip: '',
    assignee: 'Engineer',
    status: 'Open'
};

export const assignees = [
    {
      value: 'Engineer',
      label: 'Engineer',
    },
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Super Admin',
      label: 'Super Admin',
    }
];

export const status = [
    {
      value: 'Resolved',
      label: 'Resolved',
    },
    {
      value: 'Open',
      label: 'Open',
    },
    {
      value: 'Pending',
      label: 'Pending',
    },
    {
        value: 'Acknowleged',
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