import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import CarteiraLogo from '../../../assets/carteiraLogo.png';
import BackGround from '../../../assets/background.png';

import { InputText } from '../../../components/Input/Input';

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

          {/* <Input checkbox /> */}
        </ContentBody>

        <ContentFooter>
          {/* <Button>Login</Button> */}
        </ContentFooter>
      </Container >
    </KeyboardAvoidingView >
  )
}
