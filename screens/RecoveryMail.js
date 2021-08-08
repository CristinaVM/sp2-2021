import React from 'react';
import { Container, Content, Text, Item, Input, Button, Icon, Form } from 'native-base';
import { View, Image } from 'react-native';

export default function RecoveryMail({ navigation }) {
  return (
    <Container style={{ flex: 1, paddingTop: '10%', paddingHorizontal: '5%' }}>
      <Content>
        <View style={{ marginTop: '50%' }}>
          <Image source={require('../img/logo.png')} style={{ height: undefined, width: '100%', aspectRatio: 3 / 1, resizeMode: 'contain' }} />
        </View>

        <Form style={{ marginTop: '10%' }}>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='md-mail' />
            <Input placeholder="Correo electronico" />
          </Item>
        </Form>

        <View style={{ marginTop: 20 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('ChangePassword')}>RECUPERAR CUENTA</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}