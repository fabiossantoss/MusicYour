import Immutable from 'seamless-immutable';

// Types
export const Types = {
  REQUEST: 'search/REQUEST',
  SUCCESS: 'search/SUCCESS',
  FAILURE: 'search/FAILURE',
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

// reducers
export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { data: action.payload.data, loading: false };
    case Types.FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

// creators => actions utilizadas pelo redux_saga para atualizar os reducers
export const Creators = {
  SearchRequest: param => ({
    type: Types.REQUEST,
    payload: {
      param,
    },
  }),

  SearchSuccess: data => ({
    type: Types.SUCCESS,
    payload: {
      data,
    },
  }),

  SearchFailure: error => ({
    type: Types.FAILURE,
    payload: {
      error,
    },
  }),
};
