import {combineReducers} from 'redux';
import CoinListReducer from '../screens/Feeds/reducer';
import AppBasicReducer from '../common/AppReducer/reducer'

const appReducer = combineReducers({
  CoinListReducer: CoinListReducer,
  AppBasicReducer: AppBasicReducer,
});

export default (state, action) => appReducer(state, action);
