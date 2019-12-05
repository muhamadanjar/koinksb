import React, { Component } from 'react'
import { StatusBar, SafeAreaView, ScrollView, Image } from 'react-native'
import { Header, Left, Right, View, Content, Text, Grid, Col } from 'native-base'
import styles from "./style";
const rekening = require('../../assets/ic_rekening.png')
export default class Home extends Component {
    render() {
        return (
            <>
             <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView  contentInsetAdjustmentBehavior="automatic">
                        <Header style={styles.header}>
                            <Left>
                                <Image source={require('../../assets/ic_koin_dashboard.png')} style={styles.iconHeader} resizeMode="contain"/>
                            </Left>
                            <Right>
                                <View>
                                    <Image source={require('../../assets/ic_notification.png')} style={styles.iconHeader} resizeMode="contain"/>
                                </View>
                            </Right>
                        </Header>
                        <Content>
                            <View style={styles.container}>
                                <View style={styles.menuContainer}>
                                    <View style={styles.menu}>
                                        <Image
                                            style={styles.menuImg}
                                            source={rekening}
                                            />
                                        <Text style={styles.menuTitle}>Rekening</Text>
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
                                <View></View>
                                <Grid>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Grid>
                            </View>
                            </Content>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
