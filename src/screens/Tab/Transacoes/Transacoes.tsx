import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ContentHeader,
    TitleHeader,
    ContentBody,
    TitleBody,
    ContentFlat,
    IconTransacao,
    DetailsTransacao,
    NomeTransacao,
    DataTransacao,
    ValorTransacao,
    BotaoAdicionar
} from './styles';

export const Transacoes: React.FC = () => {
    const navigation = useNavigation();

    function hangleAbriTelaReceitaDespesa() {
        navigation.navigate('ReceitaDespesa');
    }

    return (
        <Container>
            <ContentHeader>
                <TitleHeader>Transações</TitleHeader>
            </ContentHeader>

            <ContentBody>
                <TitleBody>Histórico de Transações</TitleBody>

                {
                //TODO: Criar função para filtrar por periodo
                /* <AreaCalendario>
                    <BotaoMudarMes>
                        <IconBack />
                    </BotaoMudarMes>

                    <BotaoMesAtual>Março - Aparecer calendario com meses e ano</BotaoMesAtual>

                    <BotaoMudarMes>
                        <IconNext />
                    </BotaoMudarMes>
                </AreaCalendario> */}

                <FlatList
                    data={[
                        { id: 1, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'RECEITA' },
                        { id: 2, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'DESPESA' },
                        { id: 3, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'RECEITA' },
                        { id: 4, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'DESPESA' },
                        { id: 5, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'RECEITA' },
                        { id: 6, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'DESPESA' },
                        { id: 7, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'RECEITA' },
                        { id: 8, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'DESPESA' },
                        { id: 9, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'RECEITA' },
                        { id: 10, nomeTrasacao: 'Boleto Netflix', dataTransacao: '23 abril 2023', valor: '1.000,00', tipo: 'DESPESA' },
                    ]}
                    ListHeaderComponent={null}
                    ItemSeparatorComponent={() => (<View style={{ height: 15 }}></View>)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        //TODO: Criar função de arrastar pro lado e aparecer opção de editar
                        <ContentFlat key={item.id}>
                            <IconTransacao>
                                <Ionicons
                                    name={item.tipo === 'RECEITA' ? 'add-circle' : 'remove-circle'}
                                    size={35}
                                    color='#60708F'
                                />
                            </IconTransacao>

                            <DetailsTransacao>
                                <NomeTransacao>{item.nomeTrasacao}</NomeTransacao>
                                <DataTransacao>{item.dataTransacao}</DataTransacao>
                            </DetailsTransacao>

                            <ValorTransacao>R$ {item.valor}</ValorTransacao>
                        </ContentFlat>
                    )}
                />

                <BotaoAdicionar
                    onPress={hangleAbriTelaReceitaDespesa}
                >
                    <Ionicons
                        name={'add-outline'}
                        size={35}
                        color='#FFF'
                    />
                </BotaoAdicionar>
            </ContentBody>
        </Container>
    )
}
