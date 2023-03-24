import React from 'react';

import { AuthRoutes } from './auth.routes';
import { TabRoutes } from './tab.routes';

//Aqui fica a logica de verificar se o app já tá logado ou se precisa logar
export const Routes = () => {
  return <AuthRoutes />
}
