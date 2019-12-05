import React, { Component } from 'react'
import { StatusBar, SafeAreaView, ScrollView, Image } from 'react-native'
import { View, Content, Text, Grid, Col, Row, Button } from 'native-base'
import styles from './style';
import Circle from '../../components/Circle';
import Header from '../../components/Header';
const rekening = require('../../assets/ic_rekening.png')
export default class Home extends Component {
    render() {
        return (
            <>
             <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView  contentInsetAdjustmentBehavior="automatic">
                        <Header/>
                        <Content>
                            <View style={styles.container}>
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
                                <View></View>
                                <Grid>
                                    <Row>
                                        <Col>
                                            <Circle name="a" color="#393E41"></Circle>
                                        </Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col></Col>
                                    </Row>
                                    
                                </Grid>
                            </View>
                            </Content>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
