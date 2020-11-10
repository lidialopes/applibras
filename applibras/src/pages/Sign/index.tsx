import React from 'react';
import { Dimensions, Linking } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation, useRoute } from '@react-navigation/native';

import { 
  Title,
  SignWriting,
  Description,
  SignInfo,
  About,
  TextAbout,
  Icon,
} from './styles';

import { 
  Container,
  SignTitle,
  TagsWrapper,
  Tag 
} from './../Dashboard/styles'

import Button from './../../components/Button';

interface Params {
  title: string;
  video_url: string;
  image_url: string,
  description: string;
  tags: string[];
}

const Sign: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as Params;
  const navigation = useNavigation();
  
  async function handleComposeMail(){

    let to = 'lidialopes@acad.ifma.edu.br';
    let subject = 'Sugestão de Correção';

    const url = `mailto:${to}?subject=${subject}`

    if(await Linking.canOpenURL(url)){
      Linking.openURL(url);
    }    
  }

  function handleNavigationToAbout(){
    navigation.navigate('About');
  }

  return (
    <Container>
      <SignInfo>
        <YoutubePlayer
          height={(Dimensions.get('window').width - 60) * 0.5625}
          width={Dimensions.get('window').width - 60}
          videoId={routeParams.video_url}
          initialPlayerParams={{}}
        />
        <SignTitle>{routeParams.title}</SignTitle>
        <TagsWrapper>
          {routeParams.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsWrapper>

        <Title>Escrita do Sinal</Title>
        <SignWriting
          source={{uri: routeParams.image_url}}
        />
        
        <Title>Descrição</Title>
        <Description>{routeParams.description}</Description>
      </SignInfo>

      <Button onPress={handleComposeMail}>Sugerir Correção</Button>
      <About activeOpacity={0.5} onPress={handleNavigationToAbout}>
        <Icon name="info" color="#bdbdbd" size={20} />
        <TextAbout>Sobre</TextAbout>
      </About>
    </Container>
  );
};

export default Sign;
