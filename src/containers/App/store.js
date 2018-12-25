import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fbConfig from '../../config/fbConfig';

import rootReducer from '../../redux/reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true,
    }),
    // redux bindings for firestore
  ),
);

export default store;
