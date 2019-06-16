import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik } from 'formik';
import Typography from '@material-ui/core/Typography';

import IncidentCreateForm from './../components/IncidentCreateForm';
import { INITIAL_VALUES } from '../constants/fields.constants';
import { Details } from './../types/details.type';

import store from './../store/app.store';

import { setIncidentDetails } from './../actions/create.action';

const CreateIncident = (props: RouteComponentProps) => {
  const { history } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create Incident
      </Typography>
      <Formik 
        initialValues={INITIAL_VALUES} 
        onSubmit={(values: Details) => { 
          store.dispatch(setIncidentDetails(values));
          history.push('/');
        }} 
        render={({ values, setFieldValue }) => (
          <IncidentCreateForm values={values} setFieldValue={setFieldValue}/>
      )}/>
    </React.Fragment>
  );
}

export default CreateIncident;