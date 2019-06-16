import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Incident from '../components/Incident';

import store from './../store/app.store';
import { AppState, Details } from '../types/app.type';

const Home = (props: RouteComponentProps) => { 
  const { history } = props;
  let tickets: Details[] = [];

  store.subscribe((state: AppState) => {
    tickets = state.app.tickets
  });

  return (
    <Box p={2}>
      {isEmpty(tickets) ? <Fab variant="extended" color="primary" aria-label="add" onClick={() => history.push('/create') }>
        <AddIcon /> Create Incident </Fab> 
        : tickets.map((val, id) => (
        <Incident ticket={val} key={id} />
      ))}
    </Box>
  )
}

export default Home;