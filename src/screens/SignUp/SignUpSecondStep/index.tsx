import React, { useState } from 'react';

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';

import { api } from '../../../services/api';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if(!password || !passwordConfirm) {
      return Alert.alert('Informe a senha e a confirmação.');
    }

    if(password !== passwordConfirm) {
      return Alert.alert('As senhas não conferem.');
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        nextScreenRoute: 'SignIn',
        title: 'Conta Criada!',
        message: `Agora é só fazer login\ne aproveitar.`
      });
    })
    .catch((error) => {
      Alert.alert('Erro', 'Não foi possível cadastrar.');
    });
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'}conta 
          </Title>
          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput 
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput 
              iconName='lock'
              placeholder='Repetir senha'
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button
            color={theme.colors.success}
            title='Cadastrar'
            onPress={handleRegister}
          />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}