import React from 'react';
import { View } from 'native-base';
import { StyleSheet, Image, Text } from 'react-native';
export interface Props {
    name: string;
    color:string;
}

const Circle: React.FC<Props> = (props) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        myButton:{
            padding: 5,
            height: 200,
            width: 200,  //The Width must be the same as the height
            borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
            backgroundColor:'rgb(195, 125, 198)',
        
          }
    });
    return(
        <View style={styles.container}>
            <View style={styles.myButton}>
                <Text>Circle Button</Text>
            </View>
        </View>
    );
}

export default Circle;