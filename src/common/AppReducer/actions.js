export const ActionTypes = {
  FETCH_ALL_COINS_BASIC: 'FETCH_ALL_COINS_BASIC',
  FETCH_ALL_COINS_BASIC_SUCCESS: 'FETCH_ALL_COINS_BASIC_SUCCESS',
  FETCH_TRENDING_COINS_SUCCESS: 'FETCH_TRENDING_COINS_SUCCESS',
  FETCH_ALL_COINS_BASIC_FAILURE: 'FETCH_ALL_COINS_BASIC_FAILURE',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
};

export const setSortType = ({data}) => ({
  type: ActionTypes.SET_SORT_TYPE,
  payload: {data: data},
});

export const addFavorites = ({obj}) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: {obj: obj},
});

export const removeFavorites = ({obj}) => ({
  type: ActionTypes.REMOVE_FAVORITE,
  payload: {obj: obj},
});

export const fetchAllCoinsBasic = ({onSuccess, onError}) => ({
  type: ActionTypes.FETCH_ALL_COINS_BASIC,
  payload: {onSuccess: onSuccess, onError: onError},
});

export const fetchAllCoinsBasicSuccess = ({obj, onSuccess}) => ({
  type: ActionTypes.FETCH_ALL_COINS_BASIC_SUCCESS,
  payload: {obj: obj, onSuccess: onSuccess},
});

export const fetchTrendingCoinsSuccess = ({obj}) => ({
  type: ActionTypes.FETCH_TRENDING_COINS_SUCCESS,
  payload: {obj: obj},
});

export const fetchAllCoinsBasicFailure = ({message}) => ({
  type: ActionTypes.FETCH_ALL_COINS_BASIC_FAILURE,
  payload: {message: message},
});
