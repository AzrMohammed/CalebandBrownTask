import {put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import {ActionTypes as AppBaseActionTypes} from '../../common/AppReducer/actions';
import {
  URL_COIN_LIST_BY_IDS,
  URL_COIN_LIST_DEFAULT,
} from '../../common/network/apiEndpoint';
import {request} from '.././../common/network/request';
import {ActionTypes} from './actions';

function* refreshReorderList(action) {
  try {
    yield put({
      type: AppBaseActionTypes.SET_SORT_TYPE,
      payload: {
        data: action.payload.data,
      },
    });
    yield getCoinList({
      payload: {pageno: 1, onSuccess: () => {}, onError: () => {}},
    });
  } catch (error) {}
}

export function* refreshResetListWatcher() {
  yield takeEvery(ActionTypes.RESET_COIN_LIST, refreshReorderList);
}

function* getCoinList(action) {
  try {
    const state = yield select();
    let sortT = state.AppBasicReducer.sortTypeDefault;
    let orderTypeq = '&order=' + sortT;
    let url =
      URL_COIN_LIST_DEFAULT + orderTypeq + '&page=' + action.payload.pageno;
    const {response} = yield request(url);
    if (response) {
      yield put({
        type: ActionTypes.FETCH_COIN_LIST_SUCCESS,
        payload: {
          data: response,
        },
      });
      action.payload.onSuccess(response);
    } else {
      yield put({
        type: ActionTypes.FETCH_COIN_LIST_FAILURE,
        payload: {error: 'Something went wrong. Please try again later.'},
      });
      action.payload.onError('Something went wrong. Please try again later.');
    }
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_COIN_LIST_FAILURE,
      payload: {
        error: 'Network Failure. Please check your Internet connection',
      },
    });
    action.payload.onError(
      'Network Failure. Please check your Internet connection',
    );
  }
}

export function* getCoinListWatcher() {
  yield takeLatest(ActionTypes.FETCH_COIN_LIST, getCoinList);
}

function* getCoinListByID(action) {
  try {
    if (action.payload.ids !== '') {
      let orderTypeq = '&order=id_asc';
      let idsq = '&ids=' + action.payload.ids;
      let url = URL_COIN_LIST_BY_IDS + orderTypeq + idsq;
      const {response} = yield request(url);
      if (response) {
        yield put({
          type: ActionTypes.FETCH_COIN_LIST_BY_IDS_SUCCESS,

          payload: {
            sourcetype: action.payload.sourcetype,
            data: response,
          },
        });
        action.payload.onSuccess(response);
      } else {
        yield put({
          type: ActionTypes.FETCH_COIN_LIST_BY_IDS_FAILURE,
          payload: {error: 'Something went wrong. Please try again later.'},
        });
        action.payload.onError('Something went wrong. Please try again later.');
      }
    } else {
      yield put({
        type: ActionTypes.FETCH_COIN_LIST_BY_IDS_SUCCESS,
        payload: {
          sourcetype: action.payload.sourcetype,
          data: [],
        },
      });
      action.payload.onSuccess([]);
    }
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_COIN_LIST_BY_IDS_FAILURE,
      payload: {
        error: 'Network Failure. Please check your Internet connection',
      },
    });
    action.payload.onError(
      'Network Failure. Please check your Internet connection',
    );
  }
}
export function* getCoinListByIDWatcher() {
  yield takeEvery(ActionTypes.FETCH_COIN_LIST_BY_IDS, getCoinListByID);
}
