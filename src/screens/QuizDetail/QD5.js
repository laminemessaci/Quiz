import { View, Text, SafeAreaView, TextInput, Dimensions, ImageBackground, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function QD5() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>

                <AppBar
                    style={{ backgroundColor: 'transparent', marginTop: Platform.OS === 'ios' ? 10 : 30, marginHorizontal: 20 }}
                    elevation={0}
                    centerTitle={true}
                    title={<View style={{ height: 4, backgroundColor: '#FFFFFF20', width: width / 2, borderRadius: 5 }}>
                        <View style={{ height: 4, backgroundColor: '#FFFFFF', width: width / 3, borderRadius: 5 }}></View>
                    </View>}
                    leading={<View style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, backgroundColor: '#9087E5', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='person-outline' size={16} color={Colors.secondary} />
                        <Text style={[style.m12, { color: Colors.secondary, marginLeft: 2 }]}>1</Text>
                    </View>}
                    trailing={<View style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, backgroundColor: '#FF9B57', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../assets/image/s48.png')} resizeMode='stretch' style={{ height: 16, width: 16 }} />
                        <Text style={[style.m12, { color: Colors.secondary, marginLeft: 2 }]}>40</Text>
                    </View>}
                />

                <TouchableOpacity onPress={() => navigation.navigate('QD6')} activeOpacity={10}
                    style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, marginHorizontal: 10, borderRadius: 20, marginBottom: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <Image source={require('../../../assets/image/s53.png')} resizeMode='stretch' style={{ height: 64, width: 64, alignSelf: 'center' }} />

                        <Text style={[style.m14, { color: Colors.disable, marginTop: 15 }]}>QUESTION 7 OF 10</Text>
                        <Text style={[style.subtitle, { color: Colors.txt, marginTop: 5 }]}>Which three players shared the Premier League Golden Boot in 2018-19?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('QD6')}
                        style={[style.txtinput, { marginTop: 15, borderWidth: 0, backgroundColor: '#6A5AE020' }]}>
                            <Icon name='checkbox' size={24} color={Colors.primary} />
                            <Text style={[style.m16, { color: Colors.txt, marginLeft: 10 }]}>Mohamed Salah</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('QD6')} style={[style.txtinput, { marginTop: 15,  }]}>
                            <View style={[style.icon,{borderRadius:4,borderWidth:2,borderColor:Colors.primary}]}></View>
                            <Text style={[style.r16, { color: Colors.txt, marginLeft: 10 }]}>Marcus Rashford</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('QD6')} style={[style.txtinput, { marginTop: 15, borderWidth: 0, backgroundColor: '#6A5AE020' }]}>
                            <Icon name='checkbox' size={24} color={Colors.primary} />
                            <Text style={[style.m16, { color: Colors.txt, marginLeft: 10 }]}>Sadio Mane</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('QD6')} style={[style.txtinput, { marginTop: 15, borderWidth: 0, backgroundColor: '#6A5AE020' }]}>
                            <Icon name='checkbox' size={24} color={Colors.primary} />
                            <Text style={[style.m16, { color: Colors.txt, marginLeft: 10 }]}>Aubameyang</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}