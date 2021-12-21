import {all} from 'redux-saga/effects';
import {
  addFavouritesWatcher,
  getAllCoinsBasicWatcher,
  removeFavouritesWatcher,
} from '../common/AppReducer/saga';
import {
  getCoinListByIDWatcher,
  getCoinListWatcher,
  refreshResetListWatcher,
} from '../screens/Feeds/saga';

export function* rootSaga() {
  yield all([
    getCoinListWatcher(),
    getCoinListByIDWatcher(),
    getAllCoinsBasicWatcher(),
    refreshResetListWatcher(),
    addFavouritesWatcher(),
    removeFavouritesWatcher(),
  ]);
}
