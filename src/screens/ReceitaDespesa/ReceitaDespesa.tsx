import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Cifrao, Container, ContentHeader } from './styles';

import { ScreenHeader } from '../../components/ScreenHeader/ScreenHeader';
import { InputMoney } from '../../components/InputMoney/InputMoney';

export const ReceitaDespesa: React.FC = () => {
    const { params } = useRoute();

    return (
        <Container>
            {/* Campos necessaarios para mandar na API: 
            valor, dataTransacao, descricao, categoria, conta, usuario */}

            {/* Receber parametro com id para editar, caso não tenha inserir */}
            
            <ScreenHeader titleHeader='Nova Transação'/>

            <ContentHeader>
                <Cifrao>R$</Cifrao>
                <InputMoney valor={0.00}/>
            </ContentHeader>
        </Container>
    )
}
