import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import car, { carsearchSaga } from './car';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  car
  
});

export function* rootSaga() {
  yield all([authSaga(),userSaga(),carsearchSaga()]);
}

export default rootReducer;