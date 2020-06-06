import actions from '../constants/actions';

const initialState = {
  isLogged: false,
  authLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_REQUEST:
      return {
        ...state,
        authLoading: true,
      };
    case actions.AUTH_SUCCESS:
      // Tu też powinny się dodawać dane użytkownika do state
      return {
        ...state,
        isLogged: true,
      };
    case actions.AUTH_ERROR:
      return {
        ...state,
        error: action.e,
      };
    case actions.AUTH_FINAL:
      return {
        ...state,
        authLoading: false,
      };
    case actions.IS_USER_LOGGED:
      return {
        ...state,
        isLogged: action.isLogged,
      };
    default:
      return state;
  }
};

export default reducer;
