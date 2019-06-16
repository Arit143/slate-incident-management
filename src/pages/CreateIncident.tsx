import React, { SyntheticEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import { Formik, Form } from 'formik';

import Typography from '@material-ui/core/Typography';
import FormikTextField from './../common/FormikTextField';

import { INITIAL_VALUES, FORMIK_FIELDS, assignees, status } from './../constants/fields.contants';
import { Details } from './../types/details.type';

import store from './../store/app.store';

import { setIncidentDetails } from './../actions/create.action';

const CreateIncident = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create Incident
      </Typography>
      <Formik 
        initialValues={INITIAL_VALUES} 
        onSubmit={(values: Details) => { store.dispatch(setIncidentDetails(values)) }} render={({ values, setFieldValue }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormikTextField 
                  name={FORMIK_FIELDS.TICKET_NAME} 
                  required 
                  label="Name of incident"             
                />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField 
                  name={FORMIK_FIELDS.DESCRIPTION}
                  required 
                  label="Description"             
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikTextField 
                  name={FORMIK_FIELDS.FIRST_NAME} 
                  required 
                  label="First Name"             
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikTextField 
                  name={FORMIK_FIELDS.LAST_NAME}
                  required 
                  label="Last Name"             
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikTextField 
                  name={FORMIK_FIELDS.CITY}
                  required 
                  label="City"             
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikTextField 
                  name={FORMIK_FIELDS.ZIP}
                  required 
                  label="Zip"             
                />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField 
                  name="assignee"
                  value={values.assignee}
                  required
                  select
                  label="Assignee"
                  onChange={(e: SyntheticEvent) => { 
                    const target = e.target as HTMLSelectElement; 
                    setFieldValue('assignee', target.value, false); 
                  }}             
                >
                  {assignees.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </FormikTextField>
              </Grid>
              <Grid item xs={12}>
                <FormikTextField 
                  name="status"
                  value={values.status}
                  required
                  select
                  label="Status"
                  onChange={(e: SyntheticEvent) => { 
                    const target = e.target as HTMLSelectElement; 
                    setFieldValue('status', target.value, false); 
                  }}             
                >
                  {status.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </FormikTextField>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Create
                </Button>
              </Grid>
            </Grid>
          </Form>
      )}/>
    </React.Fragment>
  );
}

export default CreateIncident;