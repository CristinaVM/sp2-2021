import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Title, Fab, View } from 'native-base';

//const win = Dimensions.get('window');

export default function Feed({ navigation }) {
  return (
    <Container>
      <Header  style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
        <Left style={{flex:1}}>
          <Button transparent>
            <Icon name="menu"style={{color:'#D8B7A8'}} onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body style={{flex:1}}>
          <Title style={{color: '#202251', alignSelf:'center'}}>Aplicacion</Title>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent>
            <Icon name="chatbox-ellipses"style={{color:'#D8B7A8'}} />
          </Button>
        </Right>
      </Header>

      <Fab active={true} direction='up' position='bottomRight' containerStyle={{bottom: '10%'}} style={{backgroundColor:'#D8B7A8'}} >
        <Icon name='add' />
      </Fab>
      
      <Content style={{padding:5, backgroundColor:'#f7f7f7'}}>
        <Card style={{flex: 0}}>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid', height: undefined, width: '100%', aspectRatio: 5/1}}>
            <Left>
              <Thumbnail source={require('../img/profile.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
              <Body>
                <Text>Usuario</Text>
                <Text note>Fecha</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../img/perro.jpg')} style={{height: undefined, width: '100%', aspectRatio: 4/3, flex: 1}} resizeMode={'cover'}/>
          </CardItem>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
            <Body>
              <Text>
                Texto de la publicación
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid', height: undefined, width: '100%', aspectRatio: 10/1}}>
            <Left>
              <Button transparent textStyle={{color: '#202251'}}>
                <Icon name="star" style={{color:'#202251'}}/>
                <Text style={{color:'#202251'}}>1,926 stars</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{color: '#202251'}}>
                <Icon name="chatbubbles" style={{color:'#202251'}} />
                <Text style={{color:'#202251'}}>4 Comments</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>

        <Card style={{flex: 0}}>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid', height: undefined, width: '100%', aspectRatio: 5/1}}>
            <Left>
              <Thumbnail source={require('../img/profile2.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
              <Body>
                <Text>Usuario</Text>
                <Text note>Fecha</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../img/gato.jpg')} style={{height: undefined, width: '100%', aspectRatio: 4/3, flex: 1}} resizeMode={'cover'}/>
          </CardItem>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
            <Body>
              <Text>
                Texto de la publicación
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid', height: undefined, width: '100%', aspectRatio: 10/1}}>
            <Left>
              <Button transparent textStyle={{color: '#202251'}}>
                <Icon name="star" style={{color:'#202251'}}/>
                <Text style={{color:'#202251'}}>1,926 stars</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{color: '#202251'}}>
                <Icon name="chatbubbles" style={{color:'#202251'}} />
                <Text style={{color:'#202251'}}>4 Comments</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>

        <Card style={{flex: 0}}>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid', height: undefined, width: '100%', aspectRatio: 5/1}}>
            <Left>
              <Thumbnail source={require('../img/profile3.jpg')} style={{borderWidth: 1, borderColor: '#555', borderRadius: 60/2}} />
              <Body>
                <Text>Usuario</Text>
                <Text note>Fecha</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../img/gato2.jpg')} style={{height: undefined, width: '100%', aspectRatio: 4/3, flex: 1}} resizeMode={'cover'}/>
          </CardItem>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
            <Body>
              <Text>
                Texto de la publicación
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid', height: undefined, width: '100%', aspectRatio: 10/1}}>
            <Left>
              <Button transparent textStyle={{color: '#202251'}}>
                <Icon name="star" style={{color:'#202251'}}/>
                <Text style={{color:'#202251'}}>1,926 stars</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{color: '#202251'}}>
                <Icon name="chatbubbles" style={{color:'#202251'}} />
                <Text style={{color:'#202251'}}>4 Comments</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>

        
      
      <Footer>
        <FooterTab style={{backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle:'solid'}}>
          <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Feed'})}>
            <Icon name="home" style={{color:'#B46D75'}}/>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Drawer', {screen: 'Search'})}>
            <Icon name="search" style={{color:'#D8B7A8'}}/>
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