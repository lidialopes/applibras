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
  EmptyListText,
  ActivityIndicator,
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
  const [filteredData, setFilteredData] = useState<Video[]>();
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const emptyListMessage = () => {
    return (
      <EmptyListText>
        Ops... Não temos esse sinal. Fique à vontade pra sugerir a inclusão dele!
      </EmptyListText>
    )
  }

  function search(text: string){
    let filtered = data?.filter(function (item: Video){
      let itemData = item.title ? item.title.toLowerCase() : '';
      let textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(filtered);
    setSearchText(text);
  }

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
    api.get('video').then(response => {
      setData(response.data);
      setFilteredData(response.data)
      setIsLoading(false);
    }
    );
  }, []);

  if(isLoading){
    return (
      <Container>
        <ActivityIndicator size="large" color="#007BF9"/>
      </Container>
    );
  }

  return (
    <Container>
      <Input name="busca" 
        icon="search" 
        placeholder="Pesquisar sinal"
        onChangeText={searchText => search(searchText)}
        value={searchText}
      />

      <VideoList
        data={filteredData}
        keyExtractor={(videoData : Video) => videoData.id}
        ListEmptyComponent={emptyListMessage}
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