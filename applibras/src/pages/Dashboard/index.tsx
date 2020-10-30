import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  VideoList,
  VideoContainer,
  SignImage,
  VideoTitle,
  TagsWrapper,
  Tag,
} from './styles';

export interface Video {
  id: string;
  title: string;
  video_url: string;
  image_url: string;
  description: string;
  tags: string[];
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  
  const [data, setData] = useState<Video[]>();

  function handleNavigateToSinal(item: Video){
    navigation.navigate('Sinal', item);
  }

  async function handleComposeMail(){

    let to = 'lidialopes@acad.ifma.edu.br';
    let subject = 'Sugestão de Inclusão de Sinal';

    let url = `mailto:${to}?subject=${subject}`;

    if(await Linking.canOpenURL(url)){
      Linking.openURL(url);
    }    
  }

  useEffect(() => {
    api.get('video').then(response => (
      setData(response.data)
    ))
  }, []);

  if(!data){
    return null;
  }

  return (
    <Container>
      <Input name="busca" icon="search" placeholder="Pesquisar sinal" />

      <VideoList
        data={data}
        keyExtractor={(videoData : Video) => videoData.id}
        renderItem={({ item } : { item : Video}) => (
          <TouchableOpacity activeOpacity={0.7} onPress={() => handleNavigateToSinal(item)}>
            <VideoContainer>
              <SignImage source={{uri: `https://img.youtube.com/vi/${item.video_url}/hqdefault.jpg`}} />
              <VideoTitle>{item.title}</VideoTitle>
              <TagsWrapper>
                {item.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
            </VideoContainer>
          </TouchableOpacity>
        )}
      />

      <Button onPress={handleComposeMail}>Sugerir Inclusão</Button>
    </Container>
  );
};

export default Dashboard;