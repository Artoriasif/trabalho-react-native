import React from 'react';
import {View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';
import { Assets } from 'react-navigation-stack';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import reels from '../../../assets/reels.png';

function Feed() {

  const posts = [
    {
      id: '1',
      author: 'leagueoflegendsbrasil',
      picture_url:
        'https://noticias.maisesports.com.br/wp-content/uploads/2021/08/skin-Shaco-Pesadelo-na-Cidade-do-Crime-1024x604.jpeg',
      likes: 50.445,
      description: 'Um novo perigo chega na cidade do crime.',
      hashtags: '#leagueoflegends #Shaco #Skins #lol',
      place: 'Jogos',
      commentF: '8.546 comentarios feitos',
      
    },

    {
      id: '2',
      author: 'fromsoftware',
      picture_url:
        'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png',
      likes: 35.076,
      description: 'Elden Ring is coming 21st January, 2022. Check out the new gameplay trailer(link in bio)',
      hashtags: '#elderring #Darksouls',
      place: 'Jogos',
      commentF: '10.784 comentarios feitos'
    },

    {
      id: '3',
      author: 'modusoperandi',
      picture_url:
        'https://pbs.twimg.com/profile_images/1208924672303063041/QvKLv09G_400x400.jpg',
      likes: '2154',
      description: 'saiu um novo episodi! Caso bizarro #16 - Homem do saco, bode atirador de pedras e API ( a pior delas)',
      hashtags: '#Truecrime #podcast #modusoperandi',
      place: 'Podcast',
      commentF: '5.456 comentarios feitos'
    },

    
    {
      id: '4',
      author: 'Pedrao',
      picture_url:
        'https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/243275367_384372736738264_738456183410629914_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8tLSVfr4dJUAX8r2OE7&_nc_ht=scontent.fgig14-1.fna&oh=c7cf0af382efb446390042858d18ac27&oe=61B79153',
      likes: '9.999.999.999',
      description: 'O pai é brabo',
      hashtags: '#eu #eumesmo #o mais brabo',
      place: 'euzinho',
      commentF: '10.456.400 comentarios feitos'
    },
    {
      id: '5',
      author: 'licehh',
      picture_url:
        'https://cdna.artstation.com/p/assets/images/images/014/192/376/large/jennifer-wuestling-neeko.jpg?1542892178',
      likes: '4.580',
      description: 'Neeko nao é tomatinho triste, ela é tomatinho fortona',
      hashtags: '#neeko #lol #tomate',
      place: 'lolzinho',
      commentF: '456.400 comentarios feitos'
    }

  ];

function renderItem({ item: post }) {     //Feed
  return (

    <View style={styles.post}>

      <View style={styles.postHeader}>

          <View style={styles.userInfo}>

           
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>

          </View>

          <View style={styles.postOptions}>

            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
                        
          </View>
          </View>

          <View>
              <TouchableOpacity>
                <Image
                  style={styles.picture_url}
                  source={{ uri: post.picture_url }}
                />
              </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                    <TouchableOpacity style={styles.action}>
                        <Image source={like} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action}>
                        <Image source={comment} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={send} />
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity>
                        <Image source={save} />
                    </TouchableOpacity>
                    </View>

                </View>

                <View>

                  <Text style={styles.likes}>{post.likes} likes</Text>
                  <Text style={styles.description}>{post.description}</Text>
                  <Text style={styles.hashtags}>{post.hashtags}</Text>
                  <Text style={styles.commentF}>{post.commentF}</Text>

                </View>
      </View>
      
    </View>

    );
  }

  return (
      
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View style={{backgroundColor: "white", width:'100%', height: '30%'}}>
        
      <TouchableOpacity><Foundation name="home" size={35} color="black" style={{marginLeft: 40, marginTop: 10}} /></TouchableOpacity>
      <TouchableOpacity><AntDesign name="search1" size={30} color="black" style={{marginLeft: 115, marginTop: -30}}/></TouchableOpacity>
      <TouchableOpacity><FontAwesome name="user-circle" size={30} color="black" style={{marginLeft:320, marginTop:-30}}/></TouchableOpacity>
      <TouchableOpacity><Feather name="shopping-bag" size={30} color="black" style={{marginLeft:250, marginTop:-30}} /></TouchableOpacity>
      <TouchableOpacity><Image source={reels} style={{marginLeft:180, marginTop:-30, width:30, height:30}}/></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  },
  commentF: {
      fontSize: 11
  },
  

});

export default Feed;