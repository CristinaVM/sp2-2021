import React, {useState} from 'react';
import { Dimensions, Image, Touchable, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { Container, Text, Button, Icon, Footer, FooterTab, Badge, Header, Content, Form, Item, Input, Card, CardItem, Thumbnail, Left, Right, Body, Title, Fab, View } from 'native-base';

const usuario = 'Nombre Apellido'
const {width: windowWidth} = Dimensions.get('window');
const ITEM_WIDTH = 0.4 * windowWidth;
const SEPARATOR_WIDTH = 10;

const data = [
  { id: 'item1', image: 'https://i.imgur.com/s7GgEa8.jpg' },
  { id: 'item2', image: 'https://i.imgur.com/N3nQ9CS.jpg' },
  { id: 'item3', image: 'https://i.imgur.com/AzdYlDM.jpg' },
  { id: 'item4', image: 'https://i.imgur.com/4OqfOPF.jpg' },
  { id: 'item5', image: 'https://i.imgur.com/Vd84GAK.jpg' },
  { id: 'item6', image: 'https://i.imgur.com/kHsor9t.jpg' },
  { id: 'item7', image: 'https://i.imgur.com/LRgJ1LH.jpg' },
  { id: 'item8', image: 'https://i.imgur.com/cLJWun3.jpg' },
  { id: 'item9', image: 'https://i.imgur.com/rGhJMmT.jpg' },
  { id: 'item10', image: 'https://i.imgur.com/kHsor9t.jpg' }, 
];

const categorias = [
  { id: 'categoria1', image: 'https://source.unsplash.com/random' },
  { id: 'categoria2', image: 'https://source.unsplash.com/random' },
  { id: 'categoria3', image: 'https://source.unsplash.com/random' },
  { id: 'categoria4', image: 'https://source.unsplash.com/random' },
  { id: 'categoria5', image: 'https://source.unsplash.com/random' },
];

export default function Feed({ navigation }) {

  function renderItem_destacados({item}) {
    const {image} = item;
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Image source={{uri: image}} style={{ width: '100%', aspectRatio: 1, borderRadius: 15, marginLeft: 5, marginRight: 5 }} />
        </TouchableOpacity>
      </View>
    );
  }

  function renderItem_categorias({item}) {
    const {image} = item;
    return (
      <View>
        <TouchableOpacity>
          <Image source={{uri: image}} style={{ width: '100%', aspectRatio: 1, borderRadius: 15, marginLeft: 5, marginRight: 5 }} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Container>
      <Header style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
        <Body style={{ flex: 7, marginLeft: 5 }}>
          <Title style={{ color: '#202251' }}>Hola! {usuario}</Title>
        </Body>
      </Header>

      <Content style={{ padding: 5 }}>
        <Form style={{ marginLeft: 5, marginRight: 5, marginTop: 10 }}>
          <Item rounded style={{ backgroundColor: '#e7e7e7' }}>
            <Input placeholder="Search..." />
            <Icon active name='search' />
          </Item>
        </Form>

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Productos destacados</Text>
        <Carousel
          style={{ width: windowWidth, height: ITEM_WIDTH, flexGrow: 0 }}
          data={data}
          renderItem={renderItem_destacados}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Categoria 1</Text>
        <Carousel
          style={{ width: windowWidth, height: ITEM_WIDTH, flexGrow: 0 }}
          data={categorias}
          renderItem={renderItem_categorias}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Categoria 2</Text>
        <Carousel
          style={{ width: windowWidth, height: ITEM_WIDTH, flexGrow: 0 }}
          data={categorias}
          renderItem={renderItem_categorias}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Categoria 3</Text>
        <Carousel
          style={{ width: windowWidth, height: ITEM_WIDTH, flexGrow: 0 }}
          data={categorias}
          renderItem={renderItem_categorias}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Categoria 4</Text>
        <Carousel
          style={{ width: windowWidth, height: ITEM_WIDTH, flexGrow: 0 }}
          data={categorias}
          renderItem={renderItem_categorias}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />

        <Text style={{color:'#202251', fontSize: 22, fontWeight: 'bold', marginTop: 10, marginLeft: 5, marginBottom: 10 }}>Categoria 5</Text>
        <Carousel
          style={{ width: windowWidth, height: ITEM_WIDTH, flexGrow: 0 }}
          data={categorias}
          renderItem={renderItem_categorias}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />

        {/* <Card style={{ flex: 0 }}>
          <CardItem style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid', height: undefined, width: '100%', aspectRatio: 5 / 1 }}>
            <Left>
              <Thumbnail source={require('../img/profile.jpg')} style={{ borderWidth: 1, borderColor: '#555', borderRadius: 60 / 2 }} />
              <Body>
                <Text>Usuario</Text>
                <Text note>Fecha</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../img/perro.jpg')} style={{ height: undefined, width: '100%', aspectRatio: 4 / 3, flex: 1 }} resizeMode={'cover'} />
          </CardItem>
          <CardItem style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
            <Body>
              <Text>
                Texto de la publicación
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid', height: undefined, width: '100%', aspectRatio: 10 / 1 }}>
            <Left>
              <Button transparent textStyle={{ color: '#202251' }}>
                <Icon name="star" style={{ color: '#202251' }} />
                <Text style={{ color: '#202251' }}>1,926 stars</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{ color: '#202251' }}>
                <Icon name="chatbubbles" style={{ color: '#202251' }} />
                <Text style={{ color: '#202251' }}>4 Comments</Text>
              </Button>
            </Right>
          </CardItem>
        </Card> */}
      </Content>

      <Footer>
        <FooterTab style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e7e7e7', borderTopLeftRadius: 1, borderStyle: 'solid' }}>
          <Button vertical onPress={() => navigation.navigate('Feed')}>
            <Icon name="home-sharp" style={{ color: '#B46D75' }} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Search')}>
            <Icon name="search" style={{ color: '#D8B7A8' }} />
          </Button>
          <Button badge vertical onPress={() => navigation.navigate('Notifications')}>
            <Badge ><Text>51</Text></Badge>
            <Icon name="notifications" style={{ color: '#D8B7A8' }} />
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" style={{ color: '#D8B7A8' }} />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}