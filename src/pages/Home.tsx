import React from 'react';
import { Incident } from '../components/Incident';

import store from './../store/app.store';
import { StoreState } from './../types/details.type';

const Home: React.FC = () => {
  const storeSubscriber = store.subscribe((state: StoreState) => {
    console.log(state);
  })
  return (
    <div>
      <Incident
        title="Test incident"
        assignee="Admin"
        status="Resolved"
      />
      <Incident
        title="Another incident"
        assignee="Engineer"
        status="Acknowledged"
      />
    </div>
  )
}

export default Home;