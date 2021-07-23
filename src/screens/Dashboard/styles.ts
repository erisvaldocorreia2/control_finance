import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.attention};
`;

export const Title = styled.Text`
    font-size: 24px;
    color: black;
`;
