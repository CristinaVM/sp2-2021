import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Title, Fab, View } from 'native-base';

export default function Chats({ navigation }) {
  return (
    <Container>
      <Header  style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
        <Left style={{flex:1}}>
          <Button transparent>
            <Icon name="arrow-back" style={{ color: '#D8B7A8' }} onPress={() => navigation.goBack()} />
          </Button>
        </Left>
        <Body style={{flex:1}}>
          <Title style={{color: '#202251', alignSelf:'center'}}>Mensajes</Title>
        </Body>
        <Right style={{flex:1}}/>
      </Header>
      
      <Content>
        <Card>
          <CardItem cardBody style={{padding:6, aspectRatio: 5/1}}>
            <Left style={{flex:0.3}}>
              <Thumbnail source={require('../img/profile.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
            </Left>
            <Body style={{flex:1.5}}>
              <View style={{flex:1.5, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                <Text style={{fontWeight: "bold", width:'75%'}}>Carlos Martinez</Text>
                <Text note style={{width:'25%', textAlign:'right'}}>Hace 10m</Text>
              </View>   
              <View style={{flex:1.5, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontWeight: "bold", width:'90%', marginRight:3, backgroundColor:'green'}}>Hola amigo, como estás?</Text>
                <Badge><Text>2</Text></Badge>
              </View>              
            </Body> 
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}