import React from 'react';
import { Container, Content, Text, Item, Input, Button, Icon, Form } from 'native-base';
import { View, Image } from 'react-native';

export default function ChangePassword({ navigation }) {
  return (
    <Container style={{ flex: 1, paddingTop: '10%', paddingHorizontal: '5%' }}>
      <Content>
        <View style={{ marginTop: '50%' }}>
          <Image source={require('../img/logo.png')} style={{ height: undefined, width: '100%', aspectRatio: 3 / 1, resizeMode: 'contain' }} />
        </View>

        <Form>
          <Item rounded style={{ marginTop: '10%', backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Nueva contraseña" secureTextEntry={true} />
          </Item>

          <Item rounded style={{ marginTop: 20, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Confirmar nueva contraseña" secureTextEntry={true} />
          </Item>
        </Form>

        <View style={{ marginTop: 20 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Login')}>CAMBIAR CONTRASEÑA</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}