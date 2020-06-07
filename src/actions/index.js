import actions from '../constants/actions';
import * as results from '../assets/palindroms.json';

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: actions.AUTH_REQUEST });

  /* Tu powinien być request POST z danymi
    w formacie axios.post(url, {
        username,
        password
    })
    na razie zamienię go pustym Promise
  */

  return new Promise((resolve) => {
    resolve(username, password);
  })
    .then(() => {
      /* z backendu powinny wrócić dane użytkownika (np. id, name) oraz token.
        Dane użytkownika też dodaję do localStorage i store, token - do cookies.
        Bardziej biezpieczne będzie ustawienie HttpOnly cookie,
        bo wtedy nie można się do niego dostać przez JS
      */
      dispatch({ type: actions.AUTH_SUCCESS });
      localStorage.setItem('isLogged', 'true');
    })
    .catch((e) => {
      dispatch({ type: actions.AUTH_ERROR, e });
    })
    .finally(() => {
      dispatch({ type: actions.AUTH_FINAL });
    });
};

export const isUserLogged = () => {
  const isLogged = localStorage.getItem('isLogged');
  return { type: actions.IS_USER_LOGGED, isLogged };
};

export const getResults = () => {
  const payload = results.data;
  return { type: actions.GET_RESULTS, payload };
};

export const addResult = (item) => ({ type: actions.ADD_RESULT, item });
