import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import propertyReducer from "./propertyReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import tenantReducer from "./tenantReducer";
import themeReducer from "./themeReducer";
import sidebarReducer from "./sidebarReducer";
import cryptoTableReducer from "./cryptoTableReducer";
import newOrderTableReducer from "./newOrderTableReducer";
import customizerReducer from "./customizerReducer";
import { reducer as reduxFormReducer } from "redux-form";

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  cryptoTable: cryptoTableReducer,
  newOrder: newOrderTableReducer,
  customizer: customizerReducer,
  auth: authReducer,
  project: projectReducer,
  property: propertyReducer,
  tenant: tenantReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;

// the key name will be the data property on the state object
