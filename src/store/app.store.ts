import { Store } from 'my-custom-redux';

import { appReducer } from './app.reducer';

const reducers = {
    app: appReducer
}

const store = new Store(reducers, {});

export default store;
