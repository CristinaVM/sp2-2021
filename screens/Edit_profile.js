import React from 'react';
import { Image } from 'react-native';
import { Container, Text, Button, Icon, Form, Item, Input, View, Header, Content, Card, CardItem, Left, Right, Body, Title } from 'native-base';
import {Picker} from '@react-native-picker/picker';

export default function Edit_profile({ navigation }) {

  const [nombre, onChangeNombre] = React.useState("Nombre");
  const [apellido, onChangeApellido] = React.useState("Apellido");
  const [fecha, onChangeFecha] = React.useState("01/01/2021");
  const [sexo, onChangeSexo] = React.useState("Masculino");
  const [correo, onChangeCorreo] = React.useState("correo electronico");
  const [contrasena, onChangeContrasena] = React.useState("password");

  const [departamento, onChangeDepartamento] = React.useState("Departamento");
  const [municipio, onChangeMunicipio] = React.useState("Municipio");
  const [zona, onChangeZona] = React.useState("Zona");
  const [avenida, onChangeAvenida] = React.useState("Avenida");
  const [calle, onChangeCalle] = React.useState("Calle");
  const [condominio, onChangeCondominio] = React.useState("Condominio/colonia");
  const [casa, onChangeCasa] = React.useState("Casa");
  const [info_extra, onChangeInfoExtra] = React.useState("Información extra");

  const [nit, onChangeNit] = React.useState("CF");
  const [nombre_fact, onChangeNombreFact] = React.useState("Nombre factura");
  const [direccion, onChangeDireccion] = React.useState("Ciudad");

  return (
    <Container>
      <Header style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="arrow-back" style={{ color: '#202251' }} onPress={() => navigation.goBack()} />
          </Button>
        </Left>
        <Body style={{ flex: 1 }}>
          <Title style={{ color: '#202251', alignSelf: 'center' }}>Editar Perfil</Title>
        </Body>
        <Right>
          <Text>Guardar</Text>
        </Right>
      </Header>

      <Content style={{ padding: 5, backgroundColor: '#fff' }}>
        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10, marginRight: 5 }}>Información de usuario</Text>
        <View style={{ flex: 1, marginTop: 5 }}>
          <Image source={require('../img/profile.jpg')} style={{ height: undefined, width: '50%', aspectRatio: 1, borderWidth: 1, borderColor: '#e7e7e7', borderRadius: 10000, alignSelf: 'center' }} resizeMode={'cover'} />
        </View>
        <Form style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
          <Text>Nombre:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input value={nombre} onChangeText={onChangeNombre} />
          </Item>
          <Text style={{ marginTop: 5 }}>Apellido:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='person' />
            <Input value={apellido} onChangeText={onChangeApellido} />
          </Item>
          <Text style={{ marginTop: 5 }}>Fecha de Nacimiento:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='calendar' />
            <Input value={fecha} onChangeText={onChangeFecha} />
          </Item>
          <Text style={{ marginTop: 5 }}>Sexo:</Text>
          <View style={{ borderRadius: 25, backgroundColor:'#e7e7e7', flex: 1, flexDirection: 'row' }}>
            <Icon active name='people' style={{ flex: 0.1, alignSelf: 'center', marginLeft: 10 }} />
            <Picker style={{ flex: 0.9, marginLeft: -7 }} >
              <Item label="Masculino" value="f" color='#000' />
              <Item label="Femenino" value="m" color='#000' />
            </Picker>
          </View>
          <Text style={{ marginTop: 5 }}>Correo electrónico:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='md-mail' />
            <Input value={correo} onChangeText={onChangeCorreo} />
          </Item>
          <Text style={{ marginTop: 5 }}>Contraseña:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Icon active name='lock-closed' />
            <Input value={contrasena} onChangeText={onChangeContrasena} />
          </Item>
        </Form>

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 20, marginLeft: 5, marginBottom: 10, marginRight: 5 }}>Dirección de Envío</Text>
        <Form style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}>
          <Text>Departamento:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={departamento} onChangeText={onChangeDepartamento} />
          </Item>
          <Text style={{ marginTop: 5 }} >Municipio:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={municipio} onChangeText={onChangeMunicipio} />
          </Item>
          <Text style={{ marginTop: 5 }} >Zona:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={zona} onChangeText={onChangeZona} />
          </Item>
          <Text style={{ marginTop: 5 }} >Avenida:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={avenida} onChangeText={onChangeAvenida} />
          </Item>
          <Text style={{ marginTop: 5 }} >Calle:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={calle} onChangeText={onChangeCalle} />
          </Item>
          <Text style={{ marginTop: 5 }} >Condominio/Colonia/Residencial:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={condominio} onChangeText={onChangeCondominio} />
          </Item>
          <Text style={{ marginTop: 5 }} >Casa:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={casa} onChangeText={onChangeCasa} />
          </Item>
          <Text style={{ marginTop: 5 }} >Información adicional:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={info_extra} onChangeText={onChangeInfoExtra} />
          </Item>
        </Form>

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 20, marginLeft: 5, marginBottom: 10, marginRight: 5 }}>Información de Facturación</Text>
        <Form style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}>
          <Text>NIT:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={nit} onChangeText={onChangeNit} />
          </Item>
          <Text style={{ marginTop: 5 }} >Nombre:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input value={nombre_fact} onChangeText={onChangeNombreFact} />
          </Item>
          <Text style={{ marginTop: 5 }} >Dirección:</Text>
          <Item rounded style={{ backgroundColor: '#e7e7e7', marginBottom: 20 }}>
            <Input value={direccion} onChangeText={onChangeDireccion} />
          </Item>
        </Form>

      </Content>
    </Container>
  );
}