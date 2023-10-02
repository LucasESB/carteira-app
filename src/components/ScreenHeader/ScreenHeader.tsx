import React from 'react';

import { BotaoVoltar, Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

interface ScreenHeaderProps {
    titleHeader: string;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({titleHeader}) => {
    const navigation = useNavigation();

    function handleVoltar(){
        navigation.goBack();
    }

    return (
        <Container>
            <BotaoVoltar onPress={handleVoltar}>
                <Entypo
                    name="chevron-with-circle-left"
                    size={30}
                    color='#60708F'
                />
            </BotaoVoltar>
            <Title>{titleHeader}</Title>
        </Container>
    )
}