import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import {
    Image, 
    Name, 
    DescriptionProject,
    Description,
    InfoList,
    InfoContainer,
    TextInfo,
    Contact,
    ContactText,
    Icon,
} from './styles';

import { Container } from './../Dashboard/styles';
import { Title } from './../Sign/styles';

export interface Info {
    imageSource: string;
    name: string;
    description: string;
    mail: string;
};

const About: React.FC = ({}) =>{
    async function handleComposeMail(to: string){

        let subject = 'Contato';
    
        let url = `mailto:${to}?subject=${subject}`;
    
        if(await Linking.canOpenURL(url)){
          Linking.openURL(url);
        }    
    }

    return(
     <Container> 
        <Title>Sobre o Projeto</Title>
        <DescriptionProject>A ideia surgiu da percepção da dificuldade enfrentada por alguns alunos surdos na aprendizagem da Lógica de Programação e nosso objetivo é facilitar esse processo. Identificamos os termos mais usados, criamos e registramos os sinais que estão disponíveis neste app. Este projeto foi financiado pelo Instituto Federal de Educação, Ciência e Tecnologia do Marnhão (IFMA)</DescriptionProject>
        <Title>Nosso Time</Title>
        <InfoList>
            <InfoContainer>                 
                <Image source={require(`./../../assets/team_photos/eva.png`)}/>
                <TextInfo>
                    <Name>Evaldinolia Moreira</Name>
                    <Description>Dra. em Computação Aplicada e Prof.ª do curso de Sistemas de Informação</Description>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => handleComposeMail('prof.evaldinolia@acad.ifma.edu.br')}>
                        <Contact>
                            <Icon name="mail" color="#bdbdbd" size={20}/>
                            <ContactText>prof.evaldinolia@acad.ifma.edu.br</ContactText>
                        </Contact>
                    </TouchableOpacity>
                </TextInfo>
            </InfoContainer>
            <InfoContainer>                 
                <Image source={require(`./../../assets/team_photos/lais.png`)}/>
                <TextInfo>
                    <Name>Laís Farias</Name>
                    <Description>Tradutora/Intérprete de LIBRAS</Description>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => handleComposeMail('lais.farias@ifma.edu.br')}>
                        <Contact>
                            <Icon name="mail" color="#bdbdbd" size={20}/>
                            <ContactText>lais.farias@ifma.edu.br</ContactText>
                        </Contact>
                    </TouchableOpacity>
                </TextInfo>
            </InfoContainer>
            <InfoContainer>                 
                <Image source={require(`./../../assets/team_photos/lidia.png`)}/>
                <TextInfo>
                    <Name>Lídia Lopes</Name>
                    <Description>Estudante de Sistemas de Informação</Description>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => handleComposeMail('lididalopes@acad.ifma.edu.br')}>
                        <Contact>
                            <Icon name="mail" color="#bdbdbd" size={20}/>
                            <ContactText>lidialopes@acad.ifma.edu.br</ContactText>
                        </Contact>
                    </TouchableOpacity>
                </TextInfo>
            </InfoContainer>
            <InfoContainer>                 
                <Image source={require(`./../../assets/team_photos/claudio.png`)}/>
                <TextInfo>
                    <Name>Cláudio Castro</Name>
                    <Description>Estudante de Sistemas de Informação e Desenvolvedor Fullstack</Description>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => handleComposeMail('claudiocastro@acad.ifma.edu.br')}>
                        <Contact>
                            <Icon name="mail" color="#bdbdbd" size={20}/>
                            <ContactText>claudiocastro@acad.ifma.edu.br</ContactText>
                        </Contact>
                    </TouchableOpacity>
                </TextInfo>
            </InfoContainer>
            <InfoContainer>                 
                <Image source={require(`./../../assets/team_photos/daniel.png`)}/>
                <TextInfo>
                    <Name>Daniel Rodrigues</Name>
                    <Description>Tradutor/Intérprete de LIBRAS</Description>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => handleComposeMail('daniel.ribeiro@ifma.edu.br')}>
                        <Contact>
                            <Icon name="mail" color="#bdbdbd" size={20}/>
                            <ContactText>daniel.ribeiro@ifma.edu.br</ContactText>
                        </Contact>
                    </TouchableOpacity>
                </TextInfo>
            </InfoContainer>
            <InfoContainer>                 
                <Image source={require(`./../../assets/team_photos/thag.png`)}/>
                <TextInfo>
                    <Name>Thag Santos</Name>
                    <Description>Estudante de Teatro</Description>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => handleComposeMail('thiago.ferreira.santos97@gmail.com')}>
                        <Contact>
                            <Icon name="mail" color="#bdbdbd" size={20}/>
                            <ContactText>thiago.ferreira.santos97@gmail.com</ContactText>
                        </Contact>
                    </TouchableOpacity>
                </TextInfo>
            </InfoContainer>
        </InfoList>
     </Container>   
    );
} 

export default About;