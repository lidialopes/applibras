import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  SignList,
  SignContainer,
  SignImage,
  SignTitle,
  TagsWrapper,
  Tag,
  EmptyListText,
  ActivityIndicator,
} from './styles';

export interface Sign {
  id: string;
  title: string;
  video_url: string;
  image_url: string;
  description: string;
  tags: string[];
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  
  const [data, setData] = useState<Sign[]>();
  const [filteredData, setFilteredData] = useState<Sign[]>();
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
    let filtered = data?.filter(function (item: Sign){
      let itemData = item.title ? item.title.toLowerCase() : '';
      let textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(filtered);
    setSearchText(text);
  }

  function handleNavigateToSign(item: Sign){
    navigation.navigate('Sign', item);
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
    api.get('sign').then(response => {
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

      <SignList
        data={filteredData}
        keyExtractor={(signData : Sign) => signData.id}
        ListEmptyComponent={emptyListMessage}
        renderItem={({ item } : { item : Sign}) => (
          <TouchableOpacity activeOpacity={0.7} onPress={() => handleNavigateToSign(item)}>
            <SignContainer>
              <SignImage source={{uri: `https://img.youtube.com/vi/${item.video_url}/hqdefault.jpg`}} />
              <SignTitle>{item.title}</SignTitle>
              <TagsWrapper>
                {item.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
            </SignContainer>
          </TouchableOpacity>
        )}
      />

      <Button onPress={handleComposeMail}>Sugerir Inclusão</Button>
    </Container>
  );
};

export default Dashboard;