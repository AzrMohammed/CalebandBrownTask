import {put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  URL_ALL_COINS_BASIC,
  URL_TRENDING_COINS,
} from '../../common/network/apiEndpoint';
import {ActionTypes as CoinActionTypes} from '../../screens/Feeds/actions';
import {request} from '.././../common/network/request';
import {ActionTypes} from './actions';

function* getAllCoinsBasic(action) {
  try {
    const {response} = yield request(URL_ALL_COINS_BASIC);
    if (response) {
      yield put({
        type: ActionTypes.FETCH_ALL_COINS_BASIC_SUCCESS,
        payload: {
          data: response,
        },
      });

      const responseTrending = yield request(URL_TRENDING_COINS);
      if (responseTrending?.response?.coins) {
        yield put({
          type: ActionTypes.FETCH_TRENDING_COINS_SUCCESS,
          payload: {
            data: responseTrending.response.coins,
          },
        });
      }
      action.payload.onSuccess(response);
      yield refreshFavorites();
      yield refreshTrending();
    } else {
      yield put({
        type: ActionTypes.FETCH_ALL_COINS_BASIC_FAILURE,
        payload: {error: 'Something went wrong. Please try again later.'},
      });
      action.payload.onError('Something went wrong. Please try again later.');
    }
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_ALL_COINS_BASIC_FAILURE,
      payload: {
        error: 'Network Failure. Please check your Internet connection',
      },
    });
    action.payload.onError(
      'Network Failure. Please check your Internet connection',
    );
  }
}

export function* getAllCoinsBasicWatcher() {
  yield takeEvery(ActionTypes.FETCH_ALL_COINS_BASIC, getAllCoinsBasic);
}

function* addFavorites(action) {
  yield refreshFavorites();
}

function* removeFavorites(action) {
  // yield refreshFavorites();
  const state = yield select();
  let ids_arr = state.AppBasicReducer.favorites.map((item) => item.id);

  let currentFav = state.CoinListReducer.favoriteListbyIds.filter((item) => {
    if (ids_arr.some((it) => it === item.id)) {
      return true;
    }
    return false;
  });

  yield put({
    type: CoinActionTypes.FETCH_COIN_LIST_BY_IDS_SUCCESS,
    payload: {
      sourcetype: 'favorites',
      data: currentFav,
    },
  });
}

function* refreshTrending() {
  const state = yield select();
  let ids = state.AppBasicReducer.trendingCoins
    .map((item) => item.item.id)
    .toString();

  yield put({
    type: CoinActionTypes.FETCH_COIN_LIST_BY_IDS,
    payload: {
      sourcetype: 'trending',
      ids: ids,
      onError: () => {},
      onSuccess: () => {},
    },
  });
}

function* refreshFavorites() {
  const state = yield select();
  let ids = state.AppBasicReducer.favorites.map((item) => item.id).toString();
  yield put({
    type: CoinActionTypes.FETCH_COIN_LIST_BY_IDS,
    payload: {
      sourcetype: 'favorites',
      ids: ids,
      onError: () => {},
      onSuccess: () => {},
    },
  });
}

export function* addFavouritesWatcher() {
  yield takeLatest(ActionTypes.ADD_FAVORITE, addFavorites);
}

export function* removeFavouritesWatcher() {
  yield takeLatest(ActionTypes.REMOVE_FAVORITE, removeFavorites);
}
