import React from 'react';
import { View,Button } from 'native-base';
import { StyleSheet, Image, Text } from 'react-native';
export interface Props {
    name: string;
    color:string;
}

const Circle: React.FC<Props> = (props) => {
    const styles = StyleSheet.create({
        container:{
            margin:1,
            alignContent:'center',
            alignItems:'center'
        },
        circle: {
            width: 80,
            height: 80,
            borderRadius: 80/2,
            borderWidth:1,
            borderColor:'#ddd',
            backgroundColor: props.color,
            marginBottom:11,
            flex:1,
            elevation:1,
            justifyContent:'center',
            alignItems:'center',
            shadowColor:'#000',
            shadowRadius:1,
            shadowOpacity:0.8
        }
    });
    return(
        <View style={styles.container}>
            
            <View style={styles.circle}>
                
                <Image style={{alignContent:'center'}} source={require('../assets/ic_sbmax_white.png')}/>
                
            </View>
            <Text>{props.name}</Text>
        </View>
    );
}

export default Circle;