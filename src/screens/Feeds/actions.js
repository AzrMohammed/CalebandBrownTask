export const ActionTypes = {
  FETCH_COIN_LIST: 'FETCH_COIN_LIST',
  FETCH_COIN_LIST_SUCCESS: 'FETCH_COIN_LIST_SUCCESS',
  FETCH_COIN_LIST_FAILURE: 'FETCH_COIN_LIST_FAILURE',
  FETCH_COIN_LIST_BY_IDS: 'FETCH_COIN_LIST_BY_IDS',
  FETCH_COIN_LIST_BY_IDS_SUCCESS: 'FETCH_COIN_LIST_BY_IDS_SUCCESS',
  FETCH_COIN_LIST_BY_IDS_FAILURE: 'FETCH_COIN_LIST_BY_IDS_FAILURE',
  RESET_COIN_LIST: 'RESET_COIN_LIST',
};

export const fetchCoinList = ({pageno, onSuccess, onError}) => ({
  type: ActionTypes.FETCH_COIN_LIST,
  payload: {pageno: pageno, onSuccess: onSuccess, onError: onError},
});

export const fetchCoinListSuccess = ({obj, onSuccess}) => ({
  type: ActionTypes.FETCH_COIN_LIST_SUCCESS,
  payload: {obj: obj, onSuccess: onSuccess},
});

export const fetchCoinListFailure = ({message}) => ({
  type: ActionTypes.FETCH_COIN_LIST_FAILURE,
  payload: {message: message},
});

export const fetchCoinListById = ({ids, sourcetype, onSuccess, onError}) => ({
  type: ActionTypes.FETCH_COIN_LIST_BY_IDS,
  payload: {
    ids: ids,
    sourcetype: sourcetype,
    onSuccess: onSuccess,
    onError: onError,
  },
});

export const fetchCoinListByIdSuccess = ({obj, onSuccess}) => ({
  type: ActionTypes.FETCH_COIN_LIST_BY_IDS_SUCCESS,
  payload: {obj: obj, onSuccess: onSuccess},
});

export const fetchCoinListByIdFailure = ({message}) => ({
  type: ActionTypes.FETCH_COIN_LIST_BY_IDS_FAILURE,
  payload: {message: message},
});

export const resetCoinList = ({data}) => ({
  type: ActionTypes.RESET_COIN_LIST,
  payload: {data:data},
});
