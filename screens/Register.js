import React, { useState } from 'react';
import { Container, Text, Item, Input, Button, Icon, Form, Content } from 'native-base';
import { View, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';

//const [date, setDate] = useState('')

export default function Register({ navigation }) {
  return (
    <Container style={{ flex: 1, paddingHorizontal: '5%' }}>
      <Content>
        <View style={{ marginTop: '10%' }}>
          <Image source={require('../img/logo.png')} style={{ height: undefined, width: '100%', aspectRatio: 5 / 1, resizeMode: 'contain' }} />
        </View>

        <Form style={{ marginTop: '5%' }}>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input placeholder="Nombre" />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input placeholder="Apellido" />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='calendar' />
            <Input placeholder="Fecha de nacimiento" />
          </Item>

          <View style={{ marginTop: 10, borderRadius: 25, backgroundColor:'#e7e7e7', flex: 1, flexDirection: 'row' }}>
            <Icon active name='people' style={{ flex: 0.1, alignSelf: 'center', marginLeft: 10 }} />
            <Picker style={{ flex: 0.9, marginLeft: -7 }} >
              <Item label="Sexo" value="null" color='#555555' disabled/>
              <Item label="Masculino" value="f" color='#000' />
              <Item label="Femenino" value="m" color='#000' />
            </Picker>
          </View>
        
          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='md-mail' />
            <Input placeholder="Correo electrónico" />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Contraseña" secureTextEntry={true} />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Confirmar contraseña" secureTextEntry={true} />
          </Item>
        </Form>

        <View style={{ marginTop: 10 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('VerifyAccount')}>REGISTRARSE</Text>
          </Button>
        </View>

        <View style={{ marginTop: '20%' }}>
          <Text style={{ textAlign: 'center', color: '#202251', fontWeight: 'bold' }} onPress={() => navigation.navigate('Login')}>Ya tienes una cuenta? Inicia sesión</Text>
        </View>
      </Content>
    </Container>
  );
}