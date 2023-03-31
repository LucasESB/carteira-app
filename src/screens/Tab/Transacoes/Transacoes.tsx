import React from 'react';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    ContentHeader,
    TitleHeader,
    MenuArea,
    BotaoMenu,
    TitleBotaoMenu,
    ContentBody,
    TitleBody
} from './styles';

export const Transacoes: React.FC = () => {
    return (
        <Container>
            <ContentHeader>
                <TitleHeader>Transações</TitleHeader>

                <MenuArea>
                    <BotaoMenu>
                        <Ionicons name='menu-outline' size={50} color='#FFF' />
                        <TitleBotaoMenu>Todos</TitleBotaoMenu>
                    </BotaoMenu>

                    <BotaoMenu>
                        <Ionicons name='add-circle-outline' size={50} color='#FFF' />
                        <TitleBotaoMenu>Receitas</TitleBotaoMenu>
                    </BotaoMenu>

                    <BotaoMenu>
                        <Ionicons name='remove-circle-outline' size={50} color='#FFF' />
                        <TitleBotaoMenu>Despesas</TitleBotaoMenu>
                    </BotaoMenu>
                </MenuArea>
            </ContentHeader>

            <ContentBody>
                <TitleBody>Histórico de Transações</TitleBody>

                {/* <AreaCalendario>
                    <BotaoMudarMes>
                        <IconBack />
                    </BotaoMudarMes>

                    <BotaoMesAtual>Março - Aparecer calendario com meses e ano</BotaoMesAtual>

                    <BotaoMudarMes>
                        <IconNext />
                    </BotaoMudarMes>
                </AreaCalendario> */}

                {/* <FlatList /> */}
            </ContentBody>
        </Container>
    )
}
