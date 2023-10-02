import React from 'react';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

//Aqui fica a logica de verificar se o app já tá logado ou se precisa logar
export const Routes = () => {
  return <AuthRoutes />
}
