import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Container, InputContainer } from './styles';

interface InputTextProps {
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    iconSize?: number;
    iconColor?: string;
}

export const InputText: React.FC<InputTextProps & TextInputProps> = ({
    secureTextEntry,
    iconName,
    iconSize,
    iconColor,
    ...rest
}) => {
    const { COLORS } = useTheme();

    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <Container>
            <InputContainer
                {...rest}
                secureTextEntry={secury}
                placeholderTextColor={COLORS.GRAY_BLUE}
            />

            {iconName && (
                <Ionicons
                    name={iconName}
                    size={iconSize || 24}
                    color={iconColor || COLORS.GRAY_BLUE}
                />
            )}

            {secureTextEntry && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Ionicons name={secury ? 'eye-off-outline' : 'eye-outline'}
                        size={iconSize || 24}
                        color={iconColor || COLORS.GRAY_BLUE}
                    />
                </TouchableOpacity>
            )}
        </Container>
    )
}
