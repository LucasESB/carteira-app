import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Title } from './styles';

interface ButtonProps {
    title: string;
    titleSize?: number;
    titleColor?: string;
    width?: number;
    height?: number;
    color?: string;
    disabled?: boolean;
    style?: TouchableOpacityProps['style'];
    onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    titleSize,
    titleColor,
    width,
    height,
    color,
    disabled,
    style,
    onPress = () => { }
}) => {
    const { COLORS } = useTheme();
    return (
        <Container
            onPress={onPress}
            disabled={disabled}
            style={[
                style,
                {
                    width: width ? width : '100%',
                    height: height ? height : 60,
                    backgroundColor: color ? color : COLORS.BLUE
                }
            ]}
        >
            <Title
                style={{
                    fontSize: titleSize ? RFValue(titleSize) : RFValue(22),
                    color: titleColor ? titleColor : '#FFF'
                }}
            >
                {title}
            </Title>
        </Container>
    )
}
