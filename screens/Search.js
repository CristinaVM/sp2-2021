import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Item, Input, Left, Right, Body, View, List, ListItem, Thumbnail } from 'native-base';

//const win = Dimensions.get('window');

export default function Search({ navigation }) {
  return (
    <Container>
      <Header searchBar rounded style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
        <Item style={{backgroundColor:'#e8e8e8', borderRadius: 15}} onPress={() => navigation.navigate('Search_product')} >
          <Input placeholder="Search" />
          <Icon name="search" />
        </Item>
      </Header>

      <Content style={{ padding: 5 }}>
        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Categorias</Text>
        
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{ borderRadius: 20, backgroundColor:'#ffa69e', height: undefined, width: '47%', flexDirection: 'row', padding: 15, marginLeft: 5, marginRight: 5, marginBottom: 10 }}>
            <Icon name="person" />
            <Text style={{ flex: 1, marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Belleza</Text>
          </View>
          <View style={{ borderRadius: 20, backgroundColor:'#faf3dd', height: undefined, width: '47%', flexDirection: 'row', padding: 15, marginLeft: 5, marginRight: 5, marginBottom: 10 }}>
            <Icon name="person" />
            <Text style={{ flex: 1, marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Ropa</Text>
          </View>
          <View style={{ borderRadius: 20, backgroundColor:'#aed9e0', height: undefined, width: '47%', flexDirection: 'row', padding: 15, marginLeft: 5, marginRight: 5, marginBottom: 10 }}>
            <Icon name="person" />
            <Text style={{ flex: 1, marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Deportes</Text>
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
          <ListItem style={{ marginLeft: 5, marginRight: 5 }} >
            <Left style={{flex: 0.5, }} >
              <Thumbnail source={require('../img/profile2.jpg')} style={{ justifyContent: 'center', alignItems: 'center' , width: '100%', aspectRatio:1, resizeMode: 'cover', borderRadius: 15 }} />
            </Left>
            <Body style={{flex: 2, }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Tienda 2</Text>
              <Text style={{ fontSize: 14}}>Descripción de la tienda 2</Text>
            </Body>
          </ListItem>
          <ListItem style={{ marginLeft: 5, marginRight: 5 }} >
            <Left style={{flex: 0.5, }} >
              <Thumbnail source={require('../img/profile3.jpg')} style={{ justifyContent: 'center', alignItems: 'center' , width: '100%', aspectRatio:1, resizeMode: 'cover', borderRadius: 15 }} />
            </Left>
            <Body style={{flex: 2, }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Tienda 3</Text>
              <Text style={{ fontSize: 14}}>Descripción de la tienda 3</Text>
            </Body>
          </ListItem>     
        </List>
      </Content>      
      
      <Footer>
        <FooterTab style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderRadius: 1, borderStyle:'solid'}}>
          <Button vertical onPress={() => navigation.navigate('Feed')}>
            <Icon name="home-sharp" style={{color:'#D8B7A8'}}/>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Search')}>
            <Icon name="search" style={{color:'#B46D75'}}/>
          </Button>
          <Button badge vertical onPress={() => navigation.navigate('Notifications')}>
            <Badge ><Text>51</Text></Badge>
            <Icon name="notifications"style={{color:'#D8B7A8'}} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" style={{color:'#D8B7A8'}}/>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}