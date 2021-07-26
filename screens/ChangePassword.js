import React from 'react';
import { Container, Text, Item, Input, Button, Icon, Form } from 'native-base';
import { View, Image } from 'react-native';

export default function ChangePassword({ navigation }) {
  return (
    <Container>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <View>
          <Image source={require('../img/logo.png')} style={{ width: 175, height: 120, resizeMode: 'contain' }} />
        </View>

        <Form style={{ width: '90%' }}>
          <Item rounded style={{ marginTop: 20, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Nueva contraseña" secureTextEntry={true} />
          </Item>

          <Item rounded style={{ marginTop: 20, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Confirmar nueva contraseña" secureTextEntry={true} />
          </Item>
        </Form>

        <View style={{ marginTop: 20 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8', width: '90%' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Feed')}>CAMBIAR CONTRASEÑA</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}