import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Item, Input, Left, Right, Body, View, List, ListItem, Thumbnail } from 'native-base';

//const win = Dimensions.get('window');

export default function Search_product({ navigation }) {
  return (
    <Container>
      <Header searchBar rounded style={{backgroundColor:'#ffffff' }}>
        <Left style={{ flex: 0.25 }}>
          <Button transparent>
            <Icon name="arrow-back" style={{ color: '#D8B7A8' }} onPress={() => navigation.goBack()} />
          </Button>
        </Left>
        <Body style={{ flex: 1.75 }}>
          <Item style={{backgroundColor:'#e8e8e8', borderRadius: 15}} onPress={() => navigation.navigate('Search_product')} >
            <Input placeholder="Search" />
            <Icon name="search" />
          </Item>
        </Body>
      </Header>

      <Content style={{ padding: 5 }}>
        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Categorias</Text>
        
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{ borderRadius: 20, backgroundColor:'#ffa69e', height: undefined, width: '47%', flexDirection: 'row', padding: 15, marginLeft: 5, marginRight: 5, marginBottom: 10 }}>
            <Icon name="person" />
            <Text style={{ flex: 1, marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Belleza</Text>
          </View>
        </View>

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Tiendas</Text>

        <List>
          <ListItem style={{ marginLeft: 5, marginRight: 5 }} >
            <Left style={{flex: 0.5, }} >
              <Thumbnail source={require('../img/profile.jpg')} style={{ justifyContent: 'center', alignItems: 'center' , width: '100%', aspectRatio:1, resizeMode: 'cover', borderRadius: 15 }} />
            </Left>
            <Body style={{flex: 2, }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Tienda 1</Text>
              <Text style={{ fontSize: 14}}>Descripción de la tienda 1</Text>
            </Body>
          </ListItem>    
        </List>

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Productos</Text>

        <List>
          <ListItem style={{ marginLeft: 5, marginRight: 5 }} >
            <Left style={{flex: 0.6, }} >
              <Thumbnail source={require('../img/gato.jpg')} style={{ justifyContent: 'center', alignItems: 'center' , width: '100%', aspectRatio:1, resizeMode: 'cover', borderRadius: 15 }} />
            </Left>
            <Body style={{flex: 1.7, }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Producto 1</Text>
              <Text style={{ fontSize: 14}}>Descripción del Producto 1</Text>
            </Body>
            <Right style={{flex: 0.7}}>
              <Text style={{ textAlign: 'right', fontSize: 14, fontWeight: 'bold'}}>$100.00</Text>
              <Text style={{ textAlign: 'right', fontSize: 12}}>Disponible</Text>
            </Right>
          </ListItem>
        </List>
      </Content>      
    </Container>
  );
}