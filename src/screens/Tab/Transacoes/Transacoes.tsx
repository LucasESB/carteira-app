import React from 'react';

import {
    Container
} from './styles';

export const Transacoes: React.FC = () => {
    return (
        <Container>
            <ContentHeader>
                <TitleHeader>Transações</TitleHeader>

                <MenuArea>
                    <BotaoMenu>
                        <IconTodos />
                        <TitleBotaoMenu>Todos</TitleBotaoMenu>
                    </BotaoMenu>

                    <BotaoMenu>
                        <IconRceitas />
                        <TitleBotaoMenu>Receitas</TitleBotaoMenu>
                    </BotaoMenu>

                    <BotaoMenu>
                        <IconDespesas />
                        <TitleBotaoMenu>Despesas</TitleBotaoMenu>
                    </BotaoMenu>
                </MenuArea>
            </ContentHeader>

            <ContentBody>
                <TitleBody>Histórico de Transações</TitleBody>

                <AreaCalendario>
                    <BotaoMudarMes>
                        <IconBack />
                    </BotaoMudarMes>

                    <BotaoMesAtual>Março - Aparecer calendario com meses e ano</BotaoMesAtual>

                    <BotaoMudarMes>
                        <IconNext />
                    </BotaoMudarMes>
                </AreaCalendario>

                <ListaHitorico />
            </ContentBody>
        </Container>
    )
}
