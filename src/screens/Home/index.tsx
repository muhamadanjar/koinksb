import React, { Component } from 'react'
import { StatusBar, SafeAreaView, ScrollView } from 'react-native'
import { View, Content, Grid, Col, Row } from 'native-base'
import styles from './style';
import Circle from '../../components/Circle';
import Header from '../../components/Header';
import MenuItem from '../../components/Menu';

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
                                    <MenuItem name="Rekening"/>
                                    <MenuItem name="Transfer"/>
                                    <MenuItem name="Beli & Bayar"/>
                                    <MenuItem name="Lainnya"/>
                                </View>
                                <View style={{marginTop:32}}>
                                <Grid>
                                    <Row>
                                        <Col>
                                            <Circle name="SBMax" color="#096d5c"></Circle>
                                        </Col>
                                        <Col>
                                            <Circle name="Taka" color="#2cbf5a"></Circle>
                                        </Col>
                                        <Col>
                                            <Circle name="Save-T" color="#fa6e70"></Circle>
                                        </Col>
                                        <Col>
                                            <Circle name="SBAuto" color="#235d9f"></Circle>
                                        </Col>
                                        
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Circle name="PickMe" color="#fca000"></Circle>
                                        </Col>
                                        <Col>
                                            <Circle name="Komersial" color="#19738c"></Circle>
                                        </Col>
                                        <Col>
                                            <Circle name="SBReno" color="#4bbfb8"></Circle>
                                        </Col>
                                        <Col>
                                            <Circle name="EZHaj" color="#71ab3c"></Circle>
                                        </Col>
                                        
                                    </Row>
                                    
                                </Grid>
                                </View>
                            </View>
                        </Content>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
