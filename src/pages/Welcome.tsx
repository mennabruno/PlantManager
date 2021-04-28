import React from 'react'
import {Text, Image, StyleSheet, TouchableOpacity,SafeAreaView, Dimensions, View} from 'react-native'
import imageW from '../assets/watering.png'
import colors from '../../styles/colors'
import {Feather} from '@expo/vector-icons';
import fonts from '../../styles/fonts'
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}> 
                <Text style={styles.title}>
                Gerencie{'\n'}
                suas plantas de{'\n'}
                forma fácil

                </Text>
                <Image 
                    source={imageW} 
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
                </Text>

            <TouchableOpacity 
                style={styles.botao}
                activeOpacity={0.7}
                onPress={handleStart}
            >
                
            
                <Feather 
                    name='chevron-right'
                    style={styles.buttonIcon}
                />
            
        </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:20,
    },
    title:{ 
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.heading,
        marginTop:48,
        fontFamily: fonts.heading,
        lineHeight:34
       
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading,
        marginTop:20,
        lineHeight:25,
        fontFamily:fonts.text
    },
    
    image:{
        
        height:Dimensions.get('window').width * 0.7

    },
    botao:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56,
        marginTop:20,

    },
    buttonText:{
        color:colors.white,
        fontSize:24,
    },
    buttonIcon:{
        color: colors.white,
        fontSize:28,
    },
    

})