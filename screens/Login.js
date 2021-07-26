import React from 'react';
import { Container, Text, Item, Input, Button, Icon, Form } from 'native-base';
import { View, Image } from 'react-native';

export default function Login({ navigation }) {
  return (
    <Container>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <View style={{ marginTop: '40%' }}>
          <Image source={require('../img/logo.png')} style={{ width: 175, height: 120, resizeMode: 'contain' }} />
        </View>

        <Form style={{ width: '90%' }}>
          <Item rounded style={{ marginTop: 20, backgroundColor: '#e7e7e7' }}>
            <Icon active name='md-mail' />
            <Input placeholder="Correo electronico" />
          </Item>

          <Item rounded style={{ marginTop: 20, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Contraseña" secureTextEntry={true}/>
          </Item>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#202251', textAlign: 'right' }} onPress={() => navigation.navigate('RecoveryMail')}>He olvidado mi contraseña</Text>
          </View>
        </Form>

        <View style={{ marginTop: 20 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8', width: '90%' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Drawer', {screen: 'Feed'})}>INICIAR SESION</Text>
          </Button>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 35 }}>
          <Text style={{ color: '#202251', fontWeight: 'bold' }} onPress={() => navigation.navigate('Register')}>No tienes una cuenta? Registrate</Text>
        </View>
      </View>
    </Container>
  );
}