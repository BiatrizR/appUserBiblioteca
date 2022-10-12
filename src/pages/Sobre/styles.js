import styled from 'styled-components';

export const Container = styled.View `
    flex:1;
    background-color: #fff;
 
`;


export const Header = styled.View`
    z-index: 99;
    position: absolute;
    top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
`; 

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(255, 210, 0, 0.95);
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`; 

export const Banner = styled.Image`
   
    height: 350px;
    width: auto;
    border-radius: 6px;
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 3px;
    opacity: 0.7;
  
`; 

export const ScrollView = styled.View` 
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const Title = styled.Text`
    color: #086D89;
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;
    justify-content: center;
    align-self: center;
    justify-content: center;
    margin-bottom: 0;
  
`;

export const Info = styled.Text` 

    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    padding: 8px 14px;
    justify-content: center;
    align-self: center;
    justify-content: center;
`;


export const Description = styled.Text`
    padding-left: 15px;
    padding-right: 14px;
    padding-bottom: 30px;
    color: #000;
    line-height: 25px;
    font-size: 15px;
    font-weight: 600;
    justify-content: center;


`;