import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { SubHeader_1 } from "../../styles/textos";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BotaoVoltar = styled(TouchableOpacity)`
    flex: 1;
`;

export const Title = styled(SubHeader_1)`
    flex: auto;
    font-family: ${({ theme }) => theme.FONTS.CONTENT};
    font-size: ${RFValue(24)}px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;