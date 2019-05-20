import CONSTANTES from './Constantes';

export const actionLogin = datos => ({
  type: CONSTANTES.LOGIN,
  datos,
});

export const actionEstablecerSesion = usuario => ({
  type: CONSTANTES.ESTABLERCER_SESION,
  usuario,
});

export const actionCerrarSesion = () => ({
  type: CONSTANTES.CERRAR_SESION,
});
