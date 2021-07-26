import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Item, Input, Card, CardItem, Thumbnail, Left, Right, Body, Title, Fab, View } from 'native-base';

//const win = Dimensions.get('window');

export default function Search({ navigation }) {
  return (
    <Container>
      <Header searchBar rounded style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
        <Item style={{backgroundColor:'#e8e8e8'}}>
          <Icon name="search" />
            <Input placeholder="Search" />
          <Icon name="person" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>

      <Content/>      
      
      <Footer>
        <FooterTab style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
        <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Feed'})}>
            <Icon name="home" style={{color:'#D8B7A8'}}/>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Search'})}>
            <Icon name="search" style={{color:'#B46D75'}}/>
          </Button>
          <Button badge vertical onPress={() => navigation.navigate('Drawer', {screen: 'Notifications'})}>
            <Badge ><Text>51</Text></Badge>
            <Icon name="notifications"style={{color:'#D8B7A8'}} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Profile'})}>
            <Icon name="person" style={{color:'#D8B7A8'}}/>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}