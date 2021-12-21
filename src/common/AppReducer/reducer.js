import {ActionTypes} from './actions';

const initialState = {
  loading: false,
  hasInternet: true,
  sortTypes: [
    {name: 'Market Cap', key: 'market_cap_desc'},
    {name: 'Volume', key: 'volume_desc'},
    {name: 'ID', key: 'id_asc'},
  ],
  sortTypeDefault: 'id_asc',
  error: '',
  trendingCoins: [],
  allCoins: [],
  favorites: [],
};
// market_cap_desc,
//   gecko_desc,
//   gecko_asc,
//   market_cap_asc,
//   market_cap_desc,
//   volume_asc,
//   volume_desc,
//   id_asc,
//   id_desc;
const AppBasicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SORT_TYPE:
      return {
        ...state,
        sortTypeDefault: action.payload.data,
      };

    case ActionTypes.FETCH_ALL_COINS_BASIC:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.FETCH_ALL_COINS_BASIC_SUCCESS:
      return {
        ...state,
        allCoins: action.payload.data,
        error: '',
        loading: false,
      };

    case ActionTypes.FETCH_TRENDING_COINS_SUCCESS:
      return {
        ...state,
        trendingCoins: action.payload.data,
        error: '',
        loading: false,
      };

    case ActionTypes.FETCH_ALL_COINS_BASIC_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionTypes.ADD_FAVORITE: {
      let fav = state.favorites;
      let obj = action.payload.obj;
      let finalObj = {name: obj.name, id: obj.id, symbol: obj.symbol};
      if (fav.some((item) => item.id == obj.id)) {
        return state;
      } else {
        return {
          ...state,
          favorites: [...fav, finalObj],
        };
      }
    }
    case ActionTypes.REMOVE_FAVORITE: {
      let obj = action.payload.obj;
      let itemIndex = state.favorites.findIndex(
        (item) => item.id == obj.id,
      );
      if (itemIndex == -1) {
        return state;
      } else {
        let favFinal = state.favorites;
        favFinal.splice(itemIndex, 1);
        return {
          ...state,
          favorites: favFinal,
        };
      }
    }
    default:
      return state;
  }
};

export default AppBasicReducer;
