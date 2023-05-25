import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import user, {userSaga} from './user';
import car, { carsearchSaga } from './car';
import write, { writeSaga } from './write';
import auth from './auth';

const rootReducer = combineReducers({
  loading,
  user,
  car,
  write,
  auth,
});

export function* rootSaga() {
  yield all([userSaga(),carsearchSaga(),writeSaga()]);
}

export default rootReducer;