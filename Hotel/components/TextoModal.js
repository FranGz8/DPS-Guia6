import React, { Component, useEffect, useState } from 'react'; 
import {View, StyleSheet,Text,Modal,Button} from 'react-native'; 



const TextoModal = (props) =>{
    const [modalShow,setModalShow] = useState(false);
    const [modalHide,setModalHide] = useState(false);
    
    useEffect(() => {
      setModalShow(props.Visible)
    });

    const showModal = () =>{
      if (modalHide === false)
        return modalShow
      return modalHide
    }
    
    const hideModal = () => {
      setModalHide(!modalHide)
    }
    return(
      <Modal transparent={true} animationType="slide" visible={showModal} onRequestClose={() => {
        alert('Modal has been closed.');
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel de Centroamérica</Text>
              <Button title="Cerrar" onPress={hideModal}></Button>
            </View>
          </View>
        </Modal>
    )
}

export default TextoModal;

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
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1
  },
  
  subtitulo: {
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center'
  } 
  }); 