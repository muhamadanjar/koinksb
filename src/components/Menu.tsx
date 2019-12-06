import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'native-base'
interface Props{
    name?:string
}
const rekening = require('../assets/ic_rekening.png')
const Menu:React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Image
                    style={styles.menuImg}
                    source={rekening}
                    />
            </View>
            <Text style={styles.menuTitle}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        alignItems:'center',
    },
    menu:{
        width:60, height: 60,
        alignItems:'center',
        paddingTop:15,
        paddingBottom:4
    },
    menuImg:{width: 40, height: 40},
    menuTitle:{
        color:'#FFF',fontWeight:'bold',
    }
})


export default Menu
