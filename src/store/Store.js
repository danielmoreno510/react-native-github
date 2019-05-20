import { createStore, combineReducers } from 'redux';
import CONSTANTES from './Constantes';

const reducerLogin = (state = { isLogin: false }, action) => {
    switch (action.type) {
        case CONSTANTES.LOGIN:
            return { isLogin: true};
        case CONSTANTES.CERRAR_SESION:
            return null;
        default:
            return state;
    }
};
const reducerGithub = (state=null, action) => {
    switch (action.type) {
      case CONSTANTES.ESTABLERCER_SESION:
        return action.usuario;
      case CONSTANTES.CERRAR_SESION:
        return null;
      default:
        return state;
    }
  };

const reducers = combineReducers({
    reducerGithub,
    reducerLogin
});

const store = createStore(reducers)

export default store