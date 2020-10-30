import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Info } from './index';

export const Image = styled.View`
    border-radius: 100px;
    border-width: 1px;
    border-color: #aaaaaa;
    height: 80px;
    width: 80px;
    margin: 0px 10px 0px 0px ;
`;

export const Name = styled.Text`
    font-family: 'OpenSans-SemiBold';
    font-size: 15px;
    color: #212121;
`;

export const DescriptionProject = styled.Text`
    font-family: OpenSans;
    font-size: 15px;
    color: #212121;
    text-align: justify;
    letter-spacing: 0.3px;
    margin-top: 10px;
`;

export const Description = styled.Text`
    font-family: OpenSans;
    font-size: 15px;
    color: #212121;
    text-align: justify;
    letter-spacing: 0.25px;
`;

export const InfoList = styled(FlatList as new () => FlatList<Info>)`
    margin: 15px 0 15px 0;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin: 0px 0px 10px 0px;
    padding-bottom: 10px;
    border-bottom-color: #dbdbdb;
    border-bottom-width: 0.75px; 
`;
    
export const TextInfo = styled.View`
    flex: 1;
    flex-direction: column;
`;