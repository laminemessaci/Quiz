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

export default function Signup() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bord }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bord, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Sign Up'
                        titleStyle={[style.apptitle, { color: Colors.txt }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Option')} >
                            <Icon name='arrow-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Email')}
                            style={[style.btn, { marginTop: 15, backgroundColor: Colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Icon name='mail-outline' size={22} color={Colors.secondary}></Icon>
                            <Text style={[style.m16, { color: Colors.secondary, marginLeft: 20 }]}>Sign Up with Email</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[style.btn, { marginTop: 15, backgroundColor: Colors.bg, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={require('../../../assets/image/a2.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            <Text style={[style.m16, { color: Colors.txt, marginLeft: 20 }]}>Login with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[style.btn, { marginTop: 15, backgroundColor: '#0056B2', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={require('../../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            <Text style={[style.m16, { color: Colors.secondary, marginLeft: 20 }]}>Login with Facebook</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, justifyContent: 'center', marginTop: 30 }}>
                            <Text style={[style.r16, { color: Colors.disable, textAlign: 'center' }]}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[style.m16, { color: Colors.primary, textAlign: 'center' }]}> Login</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[style.r14,{color:Colors.disable,textAlign:'center',lineHeight:24,}]}>By continuing, you agree to the <Text style={[style.m14,{color:Colors.txt1}]}>Terms of Services</Text> &<Text style={[style.m14,{color:Colors.txt1}]}> Privacy Policy.</Text></Text>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}