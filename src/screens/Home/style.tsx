import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FFF',
    },
    iconHeader:{
        width:100,
        height:50
    },
    iconNotif:{
        width:50,
        height:50
    },
    container:{
        marginLeft:12,marginRight:12,
    },
    menuContainer:{
        backgroundColor:'#096d5c',flex: 1, flexDirection: 'row',alignContent:'space-between',alignItems:'center',justifyContent:'center',borderRadius:6
    },
    menu:{
        width: 100, height: 100,alignItems:'center',flexDirection:'column',padding:15
    },
    menuImg:{width: 30, height: 30,paddingBottom:9},
    menuTitle:{
        color:'#FFF',fontWeight:'bold'
    }
});

export default styles;
