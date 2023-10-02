import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CarteiraLogo from '../../../assets/imgs/carteiraLogo.png';
import BackGround from '../../../assets/imgs/background.png';

import { InputText } from '../../../components/InputText/InputText';
import { CheckBox } from '../../../components/CheckBox/CheckBox';
import { Button } from '../../../components/Button/Button';

import {
  ImageBackground,
  Container,
  ContentHeader,
  ImageCarteira,
  Title,
  ContentBody,
  InputArea,
  Label,
  ContentFooter
} from './styles';

export const Login: React.FC = () => {
  const navigation = useNavigation();

  function handleLogar() {
    navigation.navigate('AppRoutes');
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <Container>
        <ImageBackground
          source={BackGround}
          resizeMode="contain"
        />

        <ContentHeader>
          <ImageCarteira source={CarteiraLogo} />
          <Title>Logar no {'\n'}Carteira App</Title>
        </ContentHeader>

        <ContentBody>
          <InputArea>
            <Label>Usuário</Label>
            <InputText
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              placeholder='Digite seu usuário'
            />
          </InputArea>

          <InputArea>
            <Label>Senha</Label>
            <InputText
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='default'
              placeholder='Digite sua senha'
              secureTextEntry
            />
          </InputArea>

          <CheckBox title='Lembrar usuário' />
        </ContentBody>

        <ContentFooter>
          <Button
            title='Logar'
            onPress={handleLogar}
            style={{
              marginTop: 30
            }}
          />
        </ContentFooter>
      </Container >
    </KeyboardAvoidingView >
  )
}
