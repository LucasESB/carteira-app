import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: 64px;
    flex-direction: row;
    align-items: center;

    padding: 0 12px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.WHITE_BLUE};
`;

export const InputContainer = styled.TextInput`
    flex: 1;
    height: 50px;
    border: 0;
    border-radius: 8px;

    font-family: ${({ theme }) => theme.FONTS.CONTENT3}
    font-size: ${RFValue(16)}px;
    font-weight: 600;
`;