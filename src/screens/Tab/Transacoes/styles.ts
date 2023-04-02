import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { SubHeader_1 } from "../../../styles/textos";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const ContentHeader = styled.View`
    align-items: center;
`;

export const TitleHeader = styled(SubHeader_1)`
    font-family: ${({ theme }) => theme.FONTS.CONTENT};
    font-size: ${RFValue(24)}px;
    font-weight: 600;
    color: 'rgba(255, 255, 255, 1)';
    margin: 85px 0 50px 0;
`;

export const ContentBody = styled.View`
    flex: auto;
    padding: 35px 35px 0 35px;
    
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    background-color: 'rgba(255, 255, 255, 1)';
`;

export const TitleBody = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT}
    font-size: ${RFValue(20)}px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    margin-bottom: 25px;
`;

export const ContentFlat = styled.View`
    width: 100%;
    flex-direction: row;

    align-items: center;
`;

export const IconTransacao = styled.View`
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;
    text-align: center;

    border: 1px solid rgba(28, 89, 123, 0.2);
    border-radius: 20px;

    margin-right: 15px;
`;

export const DetailsTransacao = styled.View`
    flex: auto;
    margin-right: 15px;
`;

export const NomeTransacao = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT}
    font-size: ${RFValue(16)}px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const DataTransacao = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT3}
    font-size: ${RFValue(13)}px;
    font-weight: 600;
    color: 'rgba(103, 105, 111, 1)';
`;

export const ValorTransacao = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT}
    font-size: ${RFValue(16)}px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const BotaoAdicionar = styled(TouchableOpacity)`
    width: 70px;
    height: 70px;

    align-items: center;
    justify-content: center;

    position: absolute;
    right: 35px;
    bottom: 35px;

    border-radius: 35px;

    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;
