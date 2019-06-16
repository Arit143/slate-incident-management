import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Home  from './../pages/Home';
import CreateIncident  from './../pages/CreateIncident';



interface Routes {
    path: string;
    exact?: boolean;
    component: React.FC | React.SFC<RouteComponentProps>;
}

export const routes: Array<Routes> = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/create',
        component: CreateIncident
    }
]