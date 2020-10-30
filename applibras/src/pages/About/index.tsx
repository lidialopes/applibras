import React from 'react';

import {
    Image, 
    Name, 
    DescriptionProject,
    Description,
    InfoList,
    InfoContainer,
    TextInfo,
} from './styles';

import { Container } from './../Dashboard/styles';
import { Title } from './../Sinal/styles';

export interface Info {
    imageSource: string;
    name: string;
    description: string;
};

const data = [
    {
        imageSource: './../../assets/logo.png',
        name: 'Evaldinolia Moreira',
        description: 'Prof.ª Dra. de Sistemas de Informação do IFMA',
    },
    {
        imageSource: './../../assets/logo.png',
        name: 'Laís Farias',
        description: 'Tradutora/Intérprete de LIBRAS do IFMA',
    },
    {
        imageSource: './../../assets/logo.png',
        name: 'Lídia Lopes',
        description: 'Estudante de Sistemas de Informação do IFMA',
    },
    {
        imageSource: './../../assets/logo.png',
        name: 'Cláudio Castro',
        description: 'Estudante de Sistemas de Informação do IFMA',
    },
    {
        imageSource: './../../assets/logo.png',
        name: 'Daniel Rodrigues',
        description: 'Tradutor/Intérprete de LIBRAS do IFMA',
    },
    {
        imageSource: './../../assets/logo.png',
        name: 'Thiago Santos',
        description: 'Estudante de Teatro da UFMA',
    },
];

const About: React.FC = ({}) =>{
    return(
     <Container> 
        <Title>Nosso Projeto</Title>
        <DescriptionProject>A ideia surgiu da percepção da dificuldade enfrentada por alguns alunos surdos na aprendizagem da Lógica de Programação e nosso intuito é justamente facilitar esse processo. Identificamos os termos mais usados, criamos e registramos os sinais que estão disponíveis nesse app. Este projeto foi financiado pelo Instituto Federal de Educação, Ciência e Tecnologia do Marnhão (IFMA)</DescriptionProject>
        <Title>Nosso Time</Title>
        <InfoList
            data={data}
            keyExtractor={(data: Info) => data.name}
            renderItem={({ item } : { item: Info }) => (
                <InfoContainer>                 
                    <Image/>
                    <TextInfo>
                        <Name>{item.name}</Name>
                        <Description>{item.description}</Description>
                    </TextInfo>
                </InfoContainer>
            )}
        />
     </Container>   
    );
} 

export default About;