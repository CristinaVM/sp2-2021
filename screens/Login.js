import React from 'react';
import { Container, Text, Item, Input, Button, Icon, Form, Content } from 'native-base';
import { View, Image, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  return (
    <Container style={{ flex: 1, paddingTop: '10%', paddingHorizontal: '5%' }}>
      <Content>
        <View style={{ marginTop: '30%' }}>
          <Image source={require('../img/logo.png')} style={{ height: undefined, width: '100%', aspectRatio: 3 / 1, resizeMode: 'contain' }} />
        </View>

        <Form>
          <Item rounded style={{ marginTop: 20, backgroundColor: '#e7e7e7' }}>
            <Icon active name='md-mail' />
            <Input placeholder="Correo electronico" />
          </Item>

          <Item rounded style={{ marginTop: 20, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Contraseña" secureTextEntry={true} />
          </Item>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#202251', textAlign: 'right' }} onPress={() => navigation.navigate('RecoveryMail')}>He olvidado mi contraseña</Text>
          </View>
        </Form>

        <View style={{ marginTop: 20 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Feed')}>INICIAR SESION</Text>
          </Button>
        </View>

        <View style={{ marginTop: '50%' }}>
          <Text style={{ textAlign: 'center', color: '#202251', fontWeight: 'bold' }} onPress={() => navigation.navigate('Register')}>No tienes una cuenta? Registrate</Text>
        </View>
      </Content>
    </Container>
  );
}