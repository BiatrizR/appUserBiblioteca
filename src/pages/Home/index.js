//configurando toda a aba de todos os livros
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { Container, SearchContainer, Input, 
    SearchButton, Title, BannerButton, Banner,
    SliderBook
} from './styles';


import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

import api from '../../../src/services/Api';


import { getListBooks } from '../../utils/books';

import { StackActions } from "@react-navigation/native";

import { useNavigation } from '@react-navigation/native'

function Home(){

 const [nowBios, setNowBios] = useState([]);
 const [nowInfant, setNowInfant] = useState([]);
 const [nowRoman, setNowRoman] = useState([]);

 //armazenar estados do campo de pesquisa
 const [input, setInput] = useState('');

 const navigation = useNavigation();

 useEffect(() =>{ 
     let isActive = true;

     /* async function getBooks(){
        const [biografiaData, infantoData, romanceData] = await Promise.all([
            api.get('/biografia', {
             }),

            api.get('/infanto', {
                
            }),

            api.get('/romance', {
                
            }),
        ])
        const bioList = getListBooks(10, biografiaData.data);
        const infList = getListBooks(10, infantoData.data);
        const romList = getListBooks(10, romanceData.data);
        
        setNowBios(bioList);
        setNowInfant(infList);
        setNowRoman(romList);
        
    } */
  
    async function getBooks(){


      const infanto = await api.get('/infanto');

      console.log('nowInfant=>' , infanto.data);
      
    }
        getBooks();
    }, []);

    function navigateSobrePage(){
        navigation.navigate('Sobre')
    }

    function handleSearchBook(){
        //console.log("Valor do input", input)
        if(input ===''){
            alert('DIGITE UM NOME NO CAMPO')
            return;}
                
        navigation.navigate('Search', {name: input})
        //setInput('')
    }

    return(
        <Container>

            <Header title="Todos os livros" />

            <SearchContainer>
                <Input
                placeholder="ex: autor, título ou categoria"
                placeholderTextColor="rgba(255,255, 255, 0.3)"
                /*adicionar o campo de pesquisa, passar o texto digitado para o estado setInput*/
                value={input}
                onChangeText={(text) => setInput(text)}
                />
                <SearchButton onPress={handleSearchBook}>
                    <Feather name="search" size={30} color="#F1D902" />
                </SearchButton>
            </SearchContainer>


            <ScrollView showsVerticalScrollIndicator={false}>

                <Title> Biblioteca Municipal - Rio das Pedras </Title>
                <BannerButton activeOpacity={0.6} onPress={navigateSobrePage}>
                 <Banner 
                  resizeMethod="resize"
                  source={require('../../../assets/whiteLogo.png')}
                  />
                </BannerButton>

                <Title> Biografias </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Clássicos </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

               <Title> Concurso Público </Title>
               <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Drama </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />


                <Title> Ficção </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Gibis e Quadrinhos </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Infanto Juvenil </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                <Title> Poesias e Crônicas </Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />
                
                <Title> Romance </Title>
                <SliderBook
                       horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                  
                />
               
                <Title> Terror, Suspense</Title>
                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem /> }
                />

                
            </ScrollView>

         
        </Container>
    )
}

export default Home;