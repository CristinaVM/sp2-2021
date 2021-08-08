import React from 'react';
import { Image } from 'react-native';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Title } from 'native-base';

export default function Edit_profile({ navigation }) {
  return (
    <Container>
      <Header style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="pencil-sharp" style={{ color: '#202251' }} onPress={() => navigation.goBack()} />
          </Button>
        </Left>
        <Body style={{ flex: 1 }}>
          <Title style={{ color: '#202251', alignSelf: 'center' }}>Perfil</Title>
        </Body>
        <Right />
      </Header>

      <Content style={{ padding: 5, backgroundColor: '#fff' }}>
        <Card style={{ flex: 0, borderRadius: 15 }}>
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
        </Card>

        <Card style={{ padding: 5, borderRadius: 15 }}>
          <CardItem cardBody>
            <Left style={{ flex: 0.15, alignSelf: 'flex-start' }}>
              <Thumbnail square source={require('../img/profile.jpg')} style={{ borderRadius: 15 }} />
            </Left>
            <Body style={{ flex: 0.55, marginLeft: 8 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Pedido #A28401</Text>
              </Text>
              <Text note style={{ marginTop: 5 }}>1 x Camisa XL Azul</Text>
              <Text note style={{ marginTop: 5 }}>1 x Sueter de lana L</Text>
              <Text note style={{ marginTop: 5 }}>2 x Pants celeste</Text>
              {/* <Text note style={{ marginTop: 5 }}>...</Text>
              <Text note style={{ marginTop: 5, fontWeight: 'bold', textAlign: 'right' }}>Q.1000.00</Text> */}
            </Body>
            <Right style={{ flex: 0.30, alignSelf: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>Procesando</Text>
              <Text note style={{ fontWeight: 'bold', marginTop: 5 }}>Q.100000.00</Text>
            </Right>
          </CardItem>
        </Card>

      </Content>

      <Footer>
        <FooterTab style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
          <Button vertical onPress={() => navigation.navigate('Feed')}>
            <Icon name="home" style={{ color: '#D8B7A8' }} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Search')}>
            <Icon name="search" style={{ color: '#D8B7A8' }} />
          </Button>
          <Button badge vertical onPress={() => navigation.navigate('Notifications')}>
            <Badge ><Text>51</Text></Badge>
            <Icon name="notifications" style={{ color: '#D8B7A8' }} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" style={{ color: '#B46D75' }} />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}