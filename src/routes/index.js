import React from 'react';
import {View, ActivityIndicator} from 'react-native'

import AuthRoutes from './auth.routes';

function Routes(){

    const loading = false;
    const signed = false;
    return (
        //se estiver logado, ele mandará para as telas que o usuário tem acessoa o lugar. se n estiver logado, mandará para a tela que tem o signin e o signup
        signed ? <View></View> : <AuthRoutes/>
    )
}

export default Routes;