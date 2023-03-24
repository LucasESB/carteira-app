import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

import { Header_1, Content_1 } from "../../../styles/textos";

export const ImageBackground = styled.Image`
    width: 437px;
    height: 437px;

    position: absolute;
    top: 40px;
    right: -80px;
`;

export const Container = styled.View`
    padding: ${RFValue(27)}px;
`;

export const ContentHeader = styled.View`
    margin: ${RFValue(70)}px 0;
`;

export const ImageCarteira = styled.Image`
    width: ${RFValue(72)}px;
    height: ${RFValue(72)}px;
    margin-bottom: ${RFValue(17)}px;
`;

export const Title = styled(Header_1)`
    color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const ContentBody = styled.View`

`;

export const InputArea = styled.View`
    margin-bottom: 10px;
`;

export const Label = styled(Content_1)`
    color: 'rgba(130, 130, 130, 1)'; 
    margin-bottom: 5px;
`;

export const ContentFooter = styled.View`

`;
