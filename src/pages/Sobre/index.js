import {
    Container,
    Header,
    HeaderButton,
    Banner,
    Description,
    Title,
    Info,
    
} from './styles';

import { Button, Text, TouchableOpacity  } from 'react-native';

import{ Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import { useNavigation} from '@react-navigation/native';

import call from 'react-native-phone-call';


function Sobre(){
    
    {/*callFunction para conetar telefone, trigger */}
    const triggerCall = () => {
        const args = {
            number: '1934936909',
            prompt: true
        };
      call(args).catch(console.log.error);
    };

    const navigation = useNavigation();


    return(
        <Container>
            <Header>
                <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Feather
                    name='arrow-left'
                    size={30}
                    color="#32B5B5"
                    />                     
                </HeaderButton>
                <HeaderButton>
                    <Ionicons
                    name="bookmark"
                    size={28}
                    color="#32B5B5"
                    />
                </HeaderButton>
            </Header>
            <Banner 
                source={require("../../../assets/fotoentrada.jpeg")}
            />

             <ScrollView showsVerticalScrollIndicator={false} >
                            
                <Title>Biblioteca Municipal de</Title>

                <Title>Rio das Pedras</Title>

                <Info>Informações:</Info>

                <Description>
                        A Biblioteca municipal de Rio das Pedras conta com  um acervo de quase 10.000.
                      O espaço fica dentro do polo da Univesp que está localizada na <Text style={{fontSize:17, color:"#086D89"}}>Av. Dr. 
                     Ademar de Barros, 520 - Jardim Dona Antonieta, Rio das Pedras - SP.</Text> 
                </Description>

                <TouchableOpacity
                    style={{width:"55%", height:50, backgroundColor:"#086D89",marginLeft:'20%',
                     justifyContent:'center', alignItems:'center', borderRadius:8, flexDirection:'row'}}
                    onPress={triggerCall}
                > 
               
                <Text style={{fontSize:17, fontWeight:'bold', color:"#ffd200", padding:8}}>(19)3493-6909</Text>
                <Ionicons 
                    name='call'
                    size={30}
                    color="rgb(255, 210, 0)"
                />
                    
                </TouchableOpacity>               
            </ScrollView>

        </Container>
    )
}


export default Sobre;