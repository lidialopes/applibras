import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Title = styled.Text`
  margin: 20px 0 5px;
  font-family: 'OpenSans-SemiBold';
  font-size: 20px;
  color: #212121;
`;

export const SignWriting = styled.Image`
  border-radius: 6px;
  height: 300px;
  margin: 5px;
`;

export const Description = styled.Text`
  margin: 0 0 10px;
  font-family: 'OpenSans';
  font-size: 15px;
  color: #212121;
  text-align: justify;
`;

export const SignInfo = styled.ScrollView`
  margin-bottom: 15px;
`;

export const About = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const TextAbout = styled.Text`
  font-family: 'OpenSans';
  font-size: 15px;
  color: #bdbdbd;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 5px;
`;