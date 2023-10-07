import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CurrencyInput from 'react-native-currency-input';

import { Container, InputContainer } from './styles';

interface InputMoneyProps {
    valor: number;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    iconSize?: number;
    iconColor?: string;
}

export const InputMoney: React.FC<InputMoneyProps & TextInputProps> = ({
    valor,
    iconName,
    iconSize,
    iconColor,
    ...rest
}) => {
    const [money, setMoney] = useState<number | null>(0.00);

    return (
        <Container>
            <CurrencyInput
                value={money}
                renderTextInput={(props) => <InputContainer {...props} />}
                onChangeValue={setMoney}
                minValue={0}
                prefix="R$ "
                precision={2}
            />
        </Container>
    )
}
