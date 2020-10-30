import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { Info } from './index';

export const DescriptionProject = styled.Text`
    font-family: OpenSans;
    font-size: 15px;
    color: #212121;
    text-align: justify;
    letter-spacing: 0.3px;
    margin-top: 10px;
`;

export const InfoList = styled.ScrollView`
    margin: 15px 0 15px 0;
    padding: 0 10px 0 0;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 0px 5px 10px 0px;
    padding-bottom: 10px;
    border-bottom-color: #dbdbdb;
    border-bottom-width: 0.75px; 
`;

export const Image = styled.Image`
    border-radius: 100px;
    border-width: 1px;
    border-color: #aaaaaa;
    height: 90px;
    width: 90px;
    margin: 0px 10px 0px 0px ;
`;

export const TextInfo = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
`;

export const Name = styled.Text`
    font-family: 'OpenSans-SemiBold';
    font-size: 15px;
    color: #212121;
`;

export const Description = styled.Text`
    font-family: OpenSans;
    font-size: 15px;
    color: #212121;
    text-align: justify;
`;    

export const Contact = styled.View`
    flex-direction: row;
    align-items: flex-start;
    margin-top: 5px;
`;

export const ContactText = styled.Text`
    font-family: OpenSans;
    font-size: 15px;
    color: #bdbdbd;
    text-align: justify;
    flex: 1;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 5px;
`;