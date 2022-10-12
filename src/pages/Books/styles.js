import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: rgba(6,135,137, 0.85);
    flex:1;
    padding: 4px 0;
    
`;


export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(255, 210, 0, 0.95);
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin: 10px;
`; 