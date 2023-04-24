import { takeLatest, put, call } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

// 로딩 상태 액션 타입 정의
const START_LOADING = 'carList/START_LOADING';
const FINISH_LOADING = 'carList/FINISH_LOADING';

// 로딩 상태 액션 생성자 함수 정의
export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

// 액션 타입 정의
const FETCH_CARS_REQUEST = 'carList/FETCH_CARS_REQUEST';
const FETCH_CARS_SUCCESS = 'carList/FETCH_CARS_SUCCESS';
const FETCH_CARS_FAILURE = 'carList/FETCH_CARS_FAILURE';

// 액션 생성자 함수 정의
export const fetchCarsRequest = createAction(FETCH_CARS_REQUEST);
export const fetchCarsSuccess = createAction(FETCH_CARS_SUCCESS);
export const fetchCarsFailure = createAction(FETCH_CARS_FAILURE);

// 비동기 액션 생성자 함수 정의
export function* fetchCarsSaga() {
  try {
    yield put(startLoading('FETCH_CARS_REQUEST'));
    const response = yield call(axios.get, '/car/list');
    yield put(fetchCarsSuccess(response.data));
  } catch (error) {
    yield put(fetchCarsFailure(error.message));
  } finally {
    yield put(finishLoading('FETCH_CARS_REQUEST'));
  }
}

// 사가 함수 정의
export function* watchFetchCars() {
  yield takeLatest(FETCH_CARS_REQUEST, fetchCarsSaga);
}

// 초기 상태 정의
const initialState = {
  loading: false,
  cars: [],
  error: null,
};

// 리듀서 함수 정의
const carReducer = handleActions(
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
    [FETCH_CARS_REQUEST]: (state) => ({
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
  },
  initialState
);

export default carReducer;

