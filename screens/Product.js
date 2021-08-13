import React from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Title, View } from 'native-base';

export default function Product({ navigation }) {

  const {width: windowWidth} = Dimensions.get('window');
  const ITEM_WIDTH = windowWidth;
  const SEPARATOR_WIDTH = 0;
  const data = [
    { id: 'item1', image: 'https://i.imgur.com/s7GgEa8.jpg' },
    { id: 'item2', image: 'https://i.imgur.com/N3nQ9CS.jpg' },
    { id: 'item3', image: 'https://i.imgur.com/AzdYlDM.jpg' } 
  ];

  function renderItem_destacados({item}) {
    const {image} = item;
    return (
      <View>
        <Image source={{uri: image}} style={{ width: '100%', aspectRatio: 1.25/1 }} />
      </View>
    );
  }

  return (
    <Container>
      <Header style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="arrow-back" style={{ color: '#202251' }} onPress={() => navigation.goBack()} />
          </Button>
        </Left>
        <Body style={{ flex: 1 }}>
          <Title style={{ color: '#202251', alignSelf: 'center' }}>Tienda</Title>
        </Body>
        <Right />
      </Header>

      <Content style={{ padding: 5, backgroundColor: '#fff' }}>
        {/* <Card style={{ flex: 0, borderRadius: 15 }}>
          <CardItem style={{ height: undefined, width: '100%', aspectRatio: 1.5 / 1 }}>
            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../img/profile.jpg')} style={{ height: undefined, width: '50%', aspectRatio: 1, borderWidth: 1, borderColor: '#e7e7e7', borderRadius: 10000 }} resizeMode={'cover'} />
              <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                Carlos Martinez
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 16, color: '#707070', textAlign: 'center' }}>
                correo electronico
              </Text>
            </Body>
          </CardItem>
        </Card> */}

        <Carousel
          style={{ flexGrow: 0, width: '100%', aspectRatio: 1.25/1  }}
          data={data}
          renderItem={renderItem_destacados}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginLeft: 5, marginBottom: 5, marginRight: 5 }}>Nombre del producto</Text>
        <Text style={{ marginLeft: 5, marginRight: 5, marginBottom: 15 }}>
          <Text style={{color:'#202251', fontSize: 16, fontWeight: 'bold' }}>Q.100000.00  </Text>
          <Text style={{color:'#757575', fontSize: 12, textDecorationLine: 'line-through' }}>(Q.200000.00)</Text>
        </Text>
        <Text style={{color:'#000', fontSize: 14, marginLeft: 5, marginBottom: 15, marginRight: 5 }}>Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto </Text>
        
        <Text style={{color:'#000', fontSize: 16, fontWeight: 'bold', marginLeft: 5, marginBottom: 5, marginRight: 5 }}>Presentación 1: </Text>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5, marginRight: 5, marginBottom: 15 }}>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'black' }} >
            <Text style={{ color: 'white' }} >XS</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >S</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >M</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >L</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >XL</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >XXL</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >XXL</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >XXXXL</Text>
          </Button>
        </View>

        <Text style={{color:'#000', fontSize: 16, fontWeight: 'bold', marginLeft: 5, marginBottom: 5, marginRight: 5 }}>Presentación 2: </Text>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5, marginRight: 5, marginBottom: 15 }}>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} >Rojo</Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} >Azul</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >Amarillo</Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} >Celeste</Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} >Negro</Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} >Blanco</Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} >Gris</Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} >Rosa</Text>
          </Button>
        </View>

        <Text style={{color:'#000', fontSize: 16, fontWeight: 'bold', marginLeft: 5, marginBottom: 5, marginRight: 5 }}>Presentación 3: </Text>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5, marginRight: 5, marginBottom: 15 }}>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} > XS </Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} > S </Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} > M </Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} > L </Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} > XL </Text>
          </Button>
          <Button bordered style={{ borderColor: '#e7e7e7', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: '#e7e7e7' }} > XXL </Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} > XXL </Text>
          </Button>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'white' }} >
            <Text style={{ color: 'black' }} > XXXXL </Text>
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginLeft: 5, marginRight: 5, marginBottom: 15, marginTop: 15 }}>
          <Text style={{color:'#000', fontSize: 16, fontWeight: 'bold', marginLeft: 5, marginBottom: 5, marginRight: 5 }}>Cantidad: </Text>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'black' }} >
            <Text style={{ color: 'white', fontWeight: 'bold' }} >-</Text>
          </Button>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10, marginRight: 10 }}>1</Text>
          <Button bordered style={{ borderColor: 'black', marginRight: 5, marginBottom: 5, backgroundColor: 'black' }} >
            <Text style={{ color: 'white', fontWeight: 'bold' }} >+</Text>
          </Button>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button rounded block style={{ backgroundColor: '#D8B7A8' }}>
            <Text>Enviar mensaje</Text>
          </Button>
          <Button rounded block style={{ backgroundColor: '#5d9b9b' }}>
            <Text>Agregar a carrito</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}