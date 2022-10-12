//tela ao inserir input no campo de pesquisa
import React, {useState, useEffect} from 'react';
import { Container, Name, Results} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

//Adicionar ranking dos mais retirados
//botão de disponível, emprestado

//Cadastro  para mais pessoas, 
//campo de id tela cadastro


function Search(){
    const navigation = useNavigation();
    const route = useRoute();

    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        let isActive = true;
        async function getSearchBook(){
            const response = await pesquisa({
                params:{
                    query: route?.params?.name,
                    language: 'pt-BR',
                    page:1,
                }
            })

            if(isActive){
                setBook(response);
                console.log(response);
                setLoading(false);

            }
            if(isActive){
                getSearchBook();
            }
        }

        return() => {
            isActive = false;
        }


    }, [])


    // if(loading){
    //     return(
    //         <Container></Container>
    //     )
    // }

    return(
        <Container>
            <Name> LIVROS ENCONTRADOS . . .</Name>

           
        </Container>
    )



}


export default Search;