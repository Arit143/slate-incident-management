import { Store } from 'my-custom-redux';

import { homeReducer } from './home.reducer';

const reducers = {
    home: homeReducer
}

const store = new Store(reducers, {});

export default store;
