import React, { useState } from 'react'; 
import {View, StyleSheet,Image,ScrollView,Text,Modal,Pressable,TouchableHighlight, Alert} from 'react-native'; 
import TextoModal from './components/TextoModal';

const App = () =>{
  const [modalVisible,setModalVisible] = useState(false);
  const [modalVisible2,setModalVisible2] = useState(false);
  const [modalVisible3,setModalVisible3] = useState(false);


  return( 
    <>
      <ScrollView style={styles.fondo}> 

      <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => {
        alert('Modal has been closed.');
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitación Clasica</Text>
              <Text style={styles.info}>Espaciosa habitación con una cama king con vista a la piscina o jardines interiores. </Text>
              <Text style={styles.info2}>Equipadas con baño privado con agua caliente y secadora de pelo, aire acondicionado, escritorio de trabajo, mesa de noche, porta maletas, plancha y planchador ( a petición), caja fuerte y armario.</Text>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={()=> {setModalVisible(!modalVisible)}}>
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisible2} onRequestClose={() => {
        alert('Modal has been closed.');
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitación Ejecutiva</Text>
              <Text style={styles.info}>Habitación familiar con dos camas matrimoniales, barra desayunador, microondas, cafetera ( a petición) y un sofá para su mayor comodidad. Ubicadas en un nivel superior con vistas a la ciudad o al volcán</Text>
              <Text style={styles.info2}>Equipadas con baño privado con agua caliente y secadora de pelo, aire acondicionado, escritorio de trabajo, mesa de noche, porta maletas, plancha y planchador ( a petición), caja fuerte y armario.</Text>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={()=> {setModalVisible2(!modalVisible2)}}>
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisible3} onRequestClose={() => {
        alert('Modal has been closed.');
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitación Suite</Text>
              <Text style={styles.info}>Habitación de lujo con dos ambientes separados. una habitación con una cama king y vistas panorámicas al volcán y espacio de sala de estar con barra desayunador, microondas, cafetera ( a petición), sofá y escritorio de trabajo</Text>
              <Text style={styles.info2}>Equipada con baño privado con agua caliente y secadora de pelo, aire acondicionado, escritorio de trabajo, mesa de noche, porta maletas, plancha y planchador ( a petición), caja fuerte y armario.</Text>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={()=> {setModalVisible3(!modalVisible3)}}>
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={{flexDirection:'row'}} > 
          <Image style={styles.banner} source={require('./src/img/logo.png')} /> 
        </View>

        <View style={styles.contenedor}>

          <Text style={styles.titulo}>Elige tu habitación perfecta</Text>
          <View>
            <TouchableHighlight onPress={()=> {setModalVisible(!modalVisible)}}>
              <Image style={styles.mejores} source={require('./src/img/classic-room.jpg')} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={()=> {setModalVisible2(!modalVisible2)}}>
              <Image style={styles.mejores} source={require('./src/img/suite-room.jpg')} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={()=> {setModalVisible3(!modalVisible3)}}>
              <Image style={styles.mejores} source={require('./src/img/executive-room.jpg')} />
            </TouchableHighlight>
          </View> 

          <Text style={styles.titulo}>Nuestros mejores servicios para ti</Text>
          <ScrollView horizontal>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/gym.jpg')}/> 
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/piscina.webp')} />  
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/restaurante.jpg')} />  
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/bar.jpg')} />  
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/sala_conferencia.jpg')} />  
            </View>
          </ScrollView>

        </View>


        <Text style={styles.titulo}>Lugares cercanos</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image  style={styles.mejores} source={require('./src/img/cc_la_gran_via.jpg')} />
          </View>
          <View style={styles.listaItem}>
            <Image style={styles.mejores} source={require('./src/img/playa_el_tunco.webp')} />
          </View>
          <View style={styles.listaItem}>
            <Image  style={styles.mejores} source={require('./src/img/lago_coatepeque.jpg')} />
          </View>
          <View style={styles.listaItem}>
            <Image style={styles.mejores} source={require('./src/img/centro_historico_ss.jpeg')} />
          </View>
        </View>

      </ScrollView> 
    </> 
  ); 
}; 

const styles = StyleSheet.create({ 
banner:{ 
  height:250, 
  flex:1 
},

fondo:{
  backgroundColor: 'rgb(84, 84, 84)'
},

texto:{
  color:'rgb(221, 151, 45)',
},

titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10,
  color:'rgb(221, 151, 45)'
},

contenedor:{
  marginHorizontal:10
},

ciudad:{
  width:250,
  height:300,
  marginRight:10
},

mejores:{
  width:'100%',
  height:200,
  marginVertical:5,
},

listaItem:{
  flexBasis:'49%'
},

listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},

vistaModal:{
  backgroundColor:'#000000aa',
flex:1
},

Modal:{
  backgroundColor:'#fff',
  margin:30,
  padding:30,
  borderRadius:10,
  height: 400
},

subtitulo: {
  fontWeight:'bold',
  fontSize:14,
  justifyContent:'center',
},

info: {
  fontSize:14,
  textAlign: 'justify',
  top: 30
},

info2: {
  fontSize:14,
  textAlign: 'justify',
  top: 40
}, 

button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  top: 70
},
buttonClose: {
  backgroundColor: "#2196F3",
},

textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},

}); 

export default App;