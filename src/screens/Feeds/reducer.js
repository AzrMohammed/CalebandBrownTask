import {ActionTypes} from './actions';

const initialState = {
  loading: false,
  loadingIds: false,
  pageno: 1,
  error: '',
  list: [],
  favoriteListbyIds: [],
  trendingListbyIds: [],
  searchListbyIds: [],
  allCoins: [],
};

const CoinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COIN_LIST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_COIN_LIST_SUCCESS: {
      let data = [...state.list, ...action.payload.data];
      return {
        ...state,
        list: data,
        pageno: state.pageno + 1,
        error: '',
        loading: false,
      };
    }
    case ActionTypes.FETCH_COIN_LIST_FAILURE:
      return {...state, error: action.payload.error, loading: false};

    case ActionTypes.FETCH_COIN_LIST_BY_IDS:
      return {
        ...state,
        loadingIds: true,
        error: '',
      };

    case ActionTypes.FETCH_COIN_LIST_BY_IDS_SUCCESS: {
      if (action.payload.sourcetype === 'favorites') {
        return {
          ...state,
          favoriteListbyIds: action.payload.data,
          error: '',
          loadingIds: false,
        };
      } else if (action.payload.sourcetype === 'trending') {
        return {
          ...state,
          trendingListbyIds: action.payload.data,
          error: '',
          loadingIds: false,
        };
      } else if (action.payload.sourcetype === 'search') {
        return {
          ...state,
          searchListbyIds: action.payload.data,
          error: '',
          loadingIds: false,
        };
      } else {
        return state;
      }
    }
    case ActionTypes.FETCH_COIN_LIST_BY_IDS_FAILURE:
      return {...state, error: action.payload.error, loadingIds: false};

    case ActionTypes.RESET_COIN_LIST:
      return {...state, error: '', loading: true, pageno: 1, list: []};

    default:
      return state;
  }
};

export default CoinListReducer;
