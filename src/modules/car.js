import { takeLatest, call, put, select } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';
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
const CHANGE_CAR_FILTERS = 'carList/CHANGE_CAR_FILTERS';

//사가 생성
export const listCars = createAction(
  FETCH_CARS,  
);

// 액션 생성자 함수 정의
export const changeCarFilters = createAction(CHANGE_CAR_FILTERS, ({legion,platform}) => ({legion,platform}));

//요청에 조건문을 넣어줘야해서 따로 만들음
export function* carSaga() {
  const { legion, platform } = yield select(state => state.car.filters);

  // 원래 요청하던 carList 함수 호출
  let apiFunction = carList.carList;
  let apiParams = {};

  if (legion !== '') {
    // legion이 '' 아니라면 type='legion'인 요청을 하도록 수정
    apiParams = { type: legion };
    console.log(`legion = ${legion}`)
  }
  if (platform !== '') {
    // platform이 '' 아니라면 type='platform'인 요청을 하도록 수정
    apiParams = { ...apiParams, type: platform}
  }

  yield put(startLoading(FETCH_CARS));

  try {
    const cars = yield call(apiFunction, apiParams);
    console.log('car상태: ',cars);
    yield put({
      type: FETCH_CARS_SUCCESS,
      payload: cars,
    });
  } catch (error) {
    yield put({
      type: FETCH_CARS_FAILURE,
      payload: error,
      error: true,
    });
  }

  yield put(finishLoading(FETCH_CARS));
}


// 사가 함수 정의
export function* carsearchSaga() {
  yield takeLatest(FETCH_CARS, carSaga);
}

// 초기 상태 정의
const initialState = {
  loading: false,
  cars: [],
  error: null,
  filters: {
    legion: '',
    platform: ''
  }
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
    [CHANGE_CAR_FILTERS]: (state, action) => ({
      ...state,
      filters: {
        ...state.filters,
        legion: action.payload.legion,
        platform: action.payload.platform,
      },
      error: null,
    }),
  },
  initialState
);

export default car;

