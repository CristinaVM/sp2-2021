import React from 'react';
import { Container, Text, Item, Input, Button, Icon, Form } from 'native-base';
import { View, Image } from 'react-native';

export default function VerifyAccount({ navigation }) {
  return (
    <Container>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <View style={{ marginTop: '10%' }}>
          <Image source={require('../img/logo.png')} style={{ width: 175, height: 120, resizeMode: 'contain' }} />
        </View>

        <Form style={{ width: '90%' }}>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='key' />
            <Input placeholder="Código de validación" />
          </Item>
        </Form>

        <View style={{ marginTop: 20 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8', width: '90%' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Feed')}>VALIDAR CUENTA</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}