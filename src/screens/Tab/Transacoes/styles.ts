import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from "react-native";
import { SubHeader_1 } from "../../../styles/textos";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const ContentHeader = styled.View`
    align-items: center;
`;

export const TitleHeader = styled(SubHeader_1)`
    font-family: ${({ theme }) => theme.FONTS.CONTENT}
    font-size: ${RFValue(24)}px;
    font-weight: 600;
    color: 'rgba(255, 255, 255, 1)';
    margin: 100px 0 30px 0;
`;

export const MenuArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: 0 30px;

    margin-bottom: 35px;
`;

export const BotaoMenu = styled(TouchableOpacity)`
    width: 80px;

    align-items: center;
`;

export const TitleBotaoMenu = styled.Text`
    
    color: 'rgba(255, 255, 255, 1)';
`;

export const ContentBody = styled.View`
    flex: auto;
    padding: 35px;
    
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    background-color: 'rgba(255, 255, 255, 1)';
`;

export const TitleBody = styled.Text`

`;
