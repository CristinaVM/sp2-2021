import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Title, Fab, View } from 'native-base';

//const win = Dimensions.get('window');

export default function Notifications({ navigation }) {
  return (
    <Container>
      <Header  style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
        <Left style={{flex:1}}>
          <Button transparent>
            <Icon name="menu"style={{color:'#D8B7A8'}} onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body style={{flex:1}}>
          <Title style={{color: '#202251', alignSelf:'center'}}>Notificaciones</Title>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent>
            <Icon name="chatbox-ellipses"style={{color:'#D8B7A8'}} />
          </Button>
        </Right>
      </Header>
      
      <Content style={{padding:5, backgroundColor:'#f7f7f7'}}>
        <Card>
          <CardItem>
            <Left style={{flex:0.3}}>
              <Thumbnail small source={require('../img/profile.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
            </Left>
            <Body style={{flex:1.75}}>
              <Text>
                <Text style={{fontWeight: "bold"}}>Carlos Martinez</Text>
                <Text note> Te etiquetó en su publicación</Text>
              </Text>
              <Text note>Hace 10 min</Text>
            </Body>
            <Right style={{flex:0.15, alignSelf:'flex-start'}}>
              <Icon name="ellipse" style={{color:'#202251'}}/>
            </Right>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left style={{flex:0.3}}>
              <Thumbnail small source={require('../img/profile.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
            </Left>
            <Body style={{flex:1.75}}>
              <Text>
                <Text style={{fontWeight: "bold"}}>Carlos Martinez</Text>
                <Text note> Te etiquetó en su publicación</Text>
              </Text>
              <Text note>Hace 15 min</Text>
            </Body>
            <Right style={{flex:0.15, alignSelf:'flex-start'}}>
              <Icon name="ellipse" style={{color:'#202251'}}/>
            </Right>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left style={{flex:0.3}}>
              <Thumbnail small source={require('../img/profile.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
            </Left>
            <Body style={{flex:1.75}}>
              <Text>
                <Text style={{fontWeight: "bold"}}>Carlos Martinez</Text>
                <Text note> Te etiquetó en su publicación</Text>
              </Text>
              <Text note>Hace 2 horas</Text>
            </Body>
            <Right style={{flex:0.15, alignSelf:'flex-start'}}>
              <Icon name="ellipse" style={{color:'#ffffff'}}/>
            </Right>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left style={{flex:0.3}}>
              <Thumbnail small source={require('../img/profile.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
            </Left>
            <Body style={{flex:1.75}}>
              <Text>
                <Text style={{fontWeight: "bold"}}>Carlos Martinez</Text>
                <Text note> Te etiquetó en su publicación</Text>
              </Text>
              <Text note>Hace 1 dia</Text>
            </Body>
            <Right style={{flex:0.15, alignSelf:'flex-start'}}>
              <Icon name="ellipse" style={{color:'#ffffff'}}/>
            </Right>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left style={{flex:0.3}}>
              <Thumbnail small source={require('../img/profile.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
            </Left>
            <Body style={{flex:1.75}}>
              <Text>
                <Text style={{fontWeight: "bold"}}>Carlos Martinez</Text>
                <Text note> Te etiquetó en su publicación</Text>
              </Text>
              <Text note>25 dic, 2020</Text>
            </Body>
            <Right style={{flex:0.15, alignSelf:'flex-start'}}>
              <Icon name="ellipse" style={{color:'#ffffff'}}/>
            </Right>
          </CardItem>
        </Card>
      </Content>

        
      
      <Footer>
        <FooterTab style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
          <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Feed'})}>
            <Icon name="home" style={{color:'#D8B7A8'}}/>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Search'})}>
            <Icon name="search" style={{color:'#D8B7A8'}}/>
          </Button>
          <Button badge vertical onPress={() => navigation.navigate('Drawer', {screen: 'Notifications'})}>
            <Badge ><Text>51</Text></Badge>
            <Icon name="notifications"style={{color:'#B46D75'}} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Profile'})}>
            <Icon name="person" style={{color:'#D8B7A8'}}/>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}