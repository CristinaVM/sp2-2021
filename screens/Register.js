import React, {useState} from 'react';
import { Container, Text, Item, Input, Button, Icon, Form, DatePicker } from 'native-base';
import { View, Image } from 'react-native';

export default function Register({ navigation }) {
  return (
    <Container>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <View style={{ marginTop: '10%' }}>
          <Image source={require('../img/logo.png')} style={{ width: 175, height: 120, resizeMode: 'contain' }} />
        </View>

        <Form style={{ width: '90%' }}>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input placeholder="Nombre" />
          </Item>

          <Item rounded style={{ marginTop: 15, backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input placeholder="Apellido" />
          </Item>

          <Item rounded style={{ marginTop: 15, backgroundColor: '#e7e7e7' }}>
            <Icon active name='calendar' />
            <DatePicker 
              value={new Date()}
              mode="date"
              placeHolderText="Fecha de nacimiento"
              placeHolderTextStyle={{ color: "#454545" }}
              textStyle={{ color: "#D8B7A8" }}
              format="YYYY-MM-DD"
              minDate="1900-01-01"
              maxDate="2200-12-31" />
          </Item>

          <Item rounded style={{ marginTop: 15, backgroundColor: '#e7e7e7' }}>
            <Icon active name='md-mail' />
            <Input placeholder="Correo electrónico" />
          </Item>

          <Item rounded style={{ marginTop: 15, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Contraseña" secureTextEntry={true} />
          </Item>

          <Item rounded style={{ marginTop: 15, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Confirmar contraseña" secureTextEntry={true} />
          </Item>
        </Form>

        <View style={{ marginTop: 20 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8', width: '90%' }}>
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('VerifyAccount')}>REGISTRARSE</Text>
          </Button>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 35 }}>
          <Text style={{ color: '#202251', fontWeight: 'bold' }} onPress={() => navigation.navigate('Login')}>Ya tienes una cuenta? Inicia sesión</Text>
        </View>
      </View>
    </Container>
  );
}