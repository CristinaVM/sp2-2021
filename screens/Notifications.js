import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Title, Fab, View } from 'native-base';

export default function Notifications({ navigation }) {
  return (
    <Container>
      <Header style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
        <Left style={{ flex: 0.15 }}>
          <Button transparent>
            <Icon name="arrow-back" style={{ color: '#202251' }} onPress={() => navigation.goBack()} />
          </Button>
        </Left>
        <Body style={{ flex: 0.7 }}>
          <Title style={{ color: '#202251', alignSelf: 'center' }}>Notificaciones</Title>
        </Body>
        <Right style={{ flex: 0.15 }} />
      </Header>

      <Content style={{ padding: 3, backgroundColor: '#f7f7f7' }}>
        <Card style={{ padding: 5, borderRadius: 15 }}>
          <CardItem cardBody>
            <Left style={{ flex: 0.3 }}>
              <Thumbnail square source={require('../img/profile.jpg')} style={{ borderRadius: 15 }} />
            </Left>
            <Body style={{ flex: 1.5, marginLeft: 15 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Tu pedido de Tienda se ha actualizado al estado En Espera</Text>
              </Text>
              <Text note style={{ marginTop: 5 }}>Hace 10 min</Text>
            </Body>
            <Right style={{ flex: 0.2, alignSelf: 'flex-start' }}>
              <Icon name="ellipse" style={{ color: '#202251' }} />
            </Right>
          </CardItem>
        </Card>

        <Card style={{ padding: 5, borderRadius: 15 }}>
          <CardItem cardBody>
            <Left style={{ flex: 0.3 }}>
              <Thumbnail square source={require('../img/profile.jpg')} style={{ borderRadius: 15 }} />
            </Left>
            <Body style={{ flex: 1.5, marginLeft: 15 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Tu pedido de Tienda se ha actualizado al estado Aprobado</Text>
              </Text>
              <Text note style={{ marginTop: 5 }}>Hace 10 min</Text>
            </Body>
            <Right style={{ flex: 0.2, alignSelf: 'flex-start' }}>
              <Icon name="ellipse" style={{ color: '#202251' }} />
            </Right>
          </CardItem>
        </Card>

        <Card style={{ padding: 5, borderRadius: 15 }}>
          <CardItem cardBody>
            <Left style={{ flex: 0.3 }}>
              <Thumbnail square source={require('../img/profile.jpg')} style={{ borderRadius: 15 }} />
            </Left>
            <Body style={{ flex: 1.5, marginLeft: 15 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Tu pedido de Tienda se ha actualizado al estado Empacado</Text>
              </Text>
              <Text note style={{ marginTop: 5 }}>Hace 10 min</Text>
            </Body>
            <Right style={{ flex: 0.2, alignSelf: 'flex-start' }}>
              <Icon name="ellipse" style={{ color: '#ffffff' }} />
            </Right>
          </CardItem>
        </Card>

        <Card style={{ padding: 5, borderRadius: 15 }}>
          <CardItem cardBody>
            <Left style={{ flex: 0.3 }}>
              <Thumbnail square source={require('../img/profile.jpg')} style={{ borderRadius: 15 }} />
            </Left>
            <Body style={{ flex: 1.5, marginLeft: 15 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Tu pedido de Tienda se ha actualizado al estado En Camino</Text>
              </Text>
              <Text note style={{ marginTop: 5 }}>Hace 10 min</Text>
            </Body>
            <Right style={{ flex: 0.2, alignSelf: 'flex-start' }}>
              <Icon name="ellipse" style={{ color: '#ffffff' }} />
            </Right>
          </CardItem>
        </Card>

        <Card style={{ padding: 5, borderRadius: 15 }}>
          <CardItem cardBody>
            <Left style={{ flex: 0.3 }}>
              <Thumbnail square source={require('../img/profile.jpg')} style={{ borderRadius: 15 }} />
            </Left>
            <Body style={{ flex: 1.5, marginLeft: 15 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Tu pedido de Tienda se ha actualizado al estado Completado</Text>
              </Text>
              <Text note style={{ marginTop: 5 }}>Hace 10 min</Text>
            </Body>
            <Right style={{ flex: 0.2, alignSelf: 'flex-start' }}>
              <Icon name="ellipse" style={{ color: '#ffffff' }} />
            </Right>
          </CardItem>
        </Card>
      </Content>



      <Footer>
        <FooterTab style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
        <Button vertical onPress={() => navigation.navigate('Feed')}>
            <Icon name="home-sharp" style={{color:'#D8B7A8'}}/>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Search')}>
            <Icon name="search" style={{color:'#D8B7A8'}}/>
          </Button>
          <Button badge vertical onPress={() => navigation.navigate('Notifications')}>
            <Badge ><Text>51</Text></Badge>
            <Icon name="notifications"style={{color:'#B46D75'}} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" style={{color:'#D8B7A8'}}/>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}