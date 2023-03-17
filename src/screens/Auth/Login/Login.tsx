import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { Container } from './styles';

export const Login: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <Container>
        <ContentHeader>
          <ImageCarteira />
          <Title>Logar no {'\n'}Carteira App</Title>
        </ContentHeader>

        <ContentBody>
          <Label>Usuário</Label>
          <Input /> 

          <Label>Senha</Label>
          <Input />

          <Input checkbox />
        </ContentBody>

        <ContentFooter>
          <Button>Login</Button>
        </ContentFooter>
      </Container>
    </KeyboardAvoidingView>
  )
}
