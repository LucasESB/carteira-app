import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Caixa, Check, Title } from './styles';

interface CheckBoxProps {
    title: string;
    check?: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
    title,
    check
}) => {
    const [marcado, setMarcado] = useState(check);

    return (
        <TouchableOpacity onPress={() => setMarcado(!marcado)}>
            <Container>
                <Caixa>
                    {marcado && (<Check />)}
                </Caixa>
                <Title>{title}</Title>
            </Container>
        </TouchableOpacity>
    )
}
