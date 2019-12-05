import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Left,Header, Right } from 'native-base';

const HeaderComponent = () => {
    return (
        <Header style={styles.header}>
            <Left>
                <Image source={require('../assets/ic_koin_dashboard.png')} style={styles.iconHeader} resizeMode="contain"/>
            </Left>
            <Right>
                <View>
                    <Image source={require('../assets/ic_notification.png')} style={styles.iconHeader} resizeMode="contain"/>
                </View>
            </Right>
        </Header>
    )
}
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
    }
});

export default HeaderComponent
