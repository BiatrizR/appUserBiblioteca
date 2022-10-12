import React from "react";
import { View, Text} from "react-native";

import Header from "../../components/Header";

import { Container, SearchContainer, Input, 
    SearchButton, Title, BannerButton, Banner,
    SliderBook, HeaderButton
} from './styles';

import{ Feather, Ionicons } from '@expo/vector-icons';

function Books(){
    return(
        <Container>
             <Header title="Meus Livros" />

             <Container style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                <Text style={{color:'#fff', fontSize: 16, fontWeight: 'bold', top: 10, left: 14}}>
                    Títulos Favoritados
                </Text>

                <HeaderButton>
                    <Ionicons
                    name="bookmark"
                    size={28}
                    color="#32B5B5"
                    />
                </HeaderButton>
             </Container>
        </Container>
    )

}

export default Books;