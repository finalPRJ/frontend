import { takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as carList from '../lib/api/car';

// 로딩 상태 액션 타입 정의
const START_LOADING = 'carList/START_LOADING';
const FINISH_LOADING = 'carList/FINISH_LOADING';

// 로딩 상태 액션 생성자 함수 정의
export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

// 액션 타입 정의
const [FETCH_CARS,FETCH_CARS_SUCCESS,FETCH_CARS_FAILURE] = createRequestActionTypes(
  'carList/FETCH_CARS'
);
const CHANGE_LEGION = 'carList/CHANGE_LEGION';

//사가 생성
export const listCars = createAction(
  FETCH_CARS,  
);

// 액션 생성자 함수 정의
const carSaga = createRequestSaga(FETCH_CARS,carList.carList);
export const changeLegion = createAction(CHANGE_LEGION, (legion) => legion);


// 사가 함수 정의
export function* carsearchSaga() {
  yield takeLatest(FETCH_CARS, carSaga);
}

// 초기 상태 정의
const initialState = {
  loading: false,
  cars: [],
  error: null,
  legion: '',
};

// 리듀서 함수 정의
const car = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        [action.payload]: true,
      },
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        [action.payload]: false,
      },
    }),
    [FETCH_CARS]: (state) => ({
      ...state,
      error: null,
    }),
    [FETCH_CARS_SUCCESS]: (state, action) => ({
      ...state,
      cars: action.payload,
      error: null,
    }),
    [FETCH_CARS_FAILURE]: (state, action) => ({
      ...state,
      cars: [],
      error: action.payload,
    }),
    [CHANGE_LEGION]: (state, action) => ({
      ...state,
      legion: action.payload,
    }),
  },
  initialState
);

export default car;

