import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
    align-items: center;
`;

export const Caixa = styled.View`
    width: 20px;
    height: 20px;
    
    align-items: center;
    justify-content: center;

    border-style: solid;
    border-width: 2px;
    border-radius: 5px;
    
    border-color: 'rgba(130, 130, 130, 1)';
`;

export const Check = styled.View`
    width: 5px;
    height: 10px;

    transform: rotate(45deg);

    border-bottom-style: solid;
    border-bottom-width: 2px;

    border-right-style: solid;
    border-right-width: 2px;

    border-radius: 1.2px;

    border-color: 'rgba(130, 130, 130, 1)';
    margin-bottom: 1px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT2}
    font-size: ${RFValue(16)}px;
    font-weight: 600;

    color: 'rgba(130, 130, 130, 1)';
    margin-left: 8px;
`;