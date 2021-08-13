import React, { useState } from 'react';
import { Container, Text, Item, Input, Button, Icon, Form, Content, Toast } from 'native-base';
import { View, Image, Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import firebase from 'firebase';

export default function Pruebas() {
  const firebaseConfig = {
    apiKey: "AIzaSyDfMPRT40qvC-XTDrtDl13T2E4XRYzb0dQ",
    authDomain: "deivy-f6e2f.firebaseapp.com",
    projectId: "deivy-f6e2f",
    storageBucket: "deivy-f6e2f.appspot.com",
    messagingSenderId: "355547035734",
    appId: "1:355547035734:web:2c082a3681f6e23e2c63f7"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [registrar, setRegistrar] = useState();

  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [fecha, setFecha] = useState("Fecha de nacimiento");
  const [sexo, setSexo] = useState();
  const [correo, setCorreo] = useState();
  const [contra, setContra] = useState();
  const [conf_contra, setConfContra] = useState();

  const createNewUser = (nombre, apellido, fecha, sexo, correo, contra, conf_contra) => {
    if (contra.localeCompare(conf_contra) == 0) {
      var usuario = correo.replace(/\./g, "*");
      firebase.database().ref('Users/' + usuario).set({
        nombre,
        apellido,
        fecha,
        sexo,
        correo,
        contra,
        confirmado: 'no',
      }).then(() => {
        console.log('Usuario registrado');
        navigation.navigate('VerifyAccount');
      }).catch(() => {
        console.log('Error');
      });
    } else {
      Toast.show({
        text: 'Contraseñas no coinciden',
        buttonText: 'Okay'
      })
    }

  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dayMonthYear = moment(date).format("DD/MM/YYYY");
    setFecha(dayMonthYear);
    hideDatePicker();
  };

  const validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      setCorreo(text);
      console.log("Email is Correct");
    }
  };

  const checkRegister = () => {
    if (Boolean(nombre) && Boolean(apellido) && Boolean(fecha) && Boolean(sexo) && Boolean(correo) && Boolean(contra) && Boolean(conf_contra)) {
      if (contra == conf_contra) {
        
      } else {
        alert("Contraseñas no coinciden");
      }
    } else {
      alert("Por favor llenar todos los campos");
    }
  };

  return (
    <Container style={{ flex: 1, paddingHorizontal: '5%' }}>
      <Content>
        <View style={{ marginTop: '10%' }}>
          <Image source={require('../img/logo.png')} style={{ height: undefined, width: '100%', aspectRatio: 5 / 1, resizeMode: 'contain' }} />
        </View>

        <Form style={{ marginTop: '5%' }}>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input placeholder="Nombre" onChangeText={setNombre} />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input placeholder="Apellido" onChangeText={setApellido} />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='calendar' />
            <Text style={{ color: '#555555', height: 50, textAlignVertical: 'center', marginLeft: 7 }} onPress={showDatePicker} >{fecha}</Text>
            <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
          </Item>

          <View style={{ marginTop: 10, backgroundColor: '#e7e7e7', borderRadius: 35, flex: 1, flexDirection: 'row' }}>
            <Icon active name='people' style={{ flex: 0.1, marginLeft: 10, alignSelf: 'center' }} />
            <Picker style={{ flex: 0.90 }} onValueChange={(sexo) => sexo != "0"? setSexo(sexo) : null} >
              <Picker.Item label="Sexo" value="0" color="#555555" />
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Femenino" value="Femenino" />
            </Picker>
          </View>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='md-mail' />
            <Input placeholder="Correo electrónico" onChangeText={(text) => validateEmail(text)} />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Contraseña" secureTextEntry={true} onChangeText={setContra} />
          </Item>

          <Item rounded style={{ marginTop: 10, backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input placeholder="Confirmar contraseña" secureTextEntry={true} onChangeText={setConfContra} />
          </Item>
          
          {!!registrar && (
            <Text style={{ color: "red" }}>{registrar}</Text>
          )}

        </Form>

        <View style={{ marginTop: 10 }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8' }} onPress={checkRegister} >
            <Text style={{ fontWeight: 'bold' }} >REGISTRARSE</Text>
          </Button>
        </View>

        <View style={{ marginTop: '20%' }}>
          <Text style={{ textAlign: 'center', color: '#202251', fontWeight: 'bold' }} onPress={() => navigation.navigate('Login')}>Ya tienes una cuenta? Inicia sesión</Text>
        </View>
      </Content>
    </Container>
  );
}