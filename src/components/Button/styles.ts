import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    border-radius: 15px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.CONTENT2}
    font-weight: 700;
`;