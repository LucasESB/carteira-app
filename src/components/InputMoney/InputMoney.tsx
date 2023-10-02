import React, { useState } from 'react';
import { TextInputChangeEventData, TextInputProps, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, InputContainer } from './styles';

interface InputMoneyProps {
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    iconSize?: number;
    iconColor?: string;
}

export const InputMoney: React.FC<InputMoneyProps & TextInputProps> = ({
    iconName,
    iconSize,
    iconColor,
    ...rest
}) => {
    const { COLORS } = useTheme();

    const [valor, setValor] = useState('0.00');

    function formatarValor(novoValor: string) {
        setValor(novoValor);
    }

    return (
        <Container>
            <InputContainer
                {...rest}
                value={valor}
                inputMode='decimal'
                placeholderTextColor={COLORS.GRAY_BLUE}
                onChangeText={e => formatarValor(e)}
            />
            {iconName && (
                <Ionicons
                    name={iconName}
                    size={iconSize || 24}
                    color={iconColor || COLORS.GRAY_BLUE}
                />
            )}
        </Container>
    )
}
