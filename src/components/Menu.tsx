import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'native-base'
interface Props{
    name?:string
}
const rekening = require('../assets/ic_rekening.png')
const Menu:React.FC<Props> = () => {
    return (
        <View style={styles.menuContainer}>
            <View style={styles.menu}>
                <Button transparent>
                    <Image
                        style={styles.menuImg}
                        source={rekening}
                        />
                    <Text style={styles.menuTitle}>Rekening</Text>
                </Button>
                
            </View>
            <View style={styles.menu}>
                <Image style={styles.menuImg} source={rekening}/>
                <Text style={styles.menuTitle}>Transfer</Text>
            </View>
            <View style={styles.menu}>
                <Image style={styles.menuImg} source={rekening}/>
                <Text style={styles.menuTitle}>Beli & Bayar</Text>
            </View>
            <View style={styles.menu}>
                <Image style={styles.menuImg} source={rekening}/>
                <Text style={styles.menuTitle}>Lainnya</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})


export default Menu
