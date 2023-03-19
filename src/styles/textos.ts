import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Header_1 = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.HEADER}
    font-size: ${RFValue(32)}px;
    font-weight: 700;
`;

export const SubHeader_1 = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.SUB_HEADER}
    font-size: ${RFValue(24)}px;
    font-weight: 700;
`;

export const SubHeader_2 = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.SUB_HEADER}
    font-size: ${RFValue(20)}px;
    font-weight: 700;
`;

export const Content_1 = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT}
    font-size: ${RFValue(16)}px;
    font-weight: 700;
`;

export const Content_1_bold = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.SUB_HEADER}
    font-size: ${RFValue(16)}px;
    font-weight: 700;
`;

export const Content_2 = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT}
    font-size: ${RFValue(14)}px;
    font-weight: 500;
`;

export const Content_3 = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT}
    font-size: ${RFValue(12)}px;
    font-weight: 400;
`;