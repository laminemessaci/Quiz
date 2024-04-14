import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Option() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bord }]}>
            <ImageBackground source={require('../../../assets/image/a1.png')} resizeMode='stretch' style={{ flex: 1 }}>
                <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>

                    <View style={{ flex: 1, margin: 18, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: Colors.bg, borderRadius: 20, padding: 12 }}>
                            <Text style={[style.apptitle, { color: Colors.active, textAlign: 'center' }]}>Login or Sign Up</Text>
                            <Text style={[style.r16, { color: Colors.disable, textAlign: 'center' ,marginTop:5}]}>Login or create an account to take quiz, take part in challenge, and more.</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}
                                style={[style.btn, { marginTop: 20 }]}>
                                <Text style={[style.btntxt, {  }]}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}
                                style={[style.btn, { marginTop: 15 ,backgroundColor:Colors.btn}]}>
                                <Text style={[style.btntxt, { color:Colors.primary}]}>Create an account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}
                                style={[style.btn, { marginTop: 15 ,backgroundColor:Colors.bg}]}>
                                <Text style={[style.btntxt, {color:Colors.disable}]}>Later</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    )
}