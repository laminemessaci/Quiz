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

export default function InviteF() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.primary, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Invite Friends?'
                        titleStyle={[style.apptitle, { color: Colors.secondary, marginLeft: 25 }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Setting')} >
                            <Icon name='arrow-back' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <ImageBackground source={require('../../../assets/image/a4.png')} resizeMode='stretch' style={{ height: Platform.OS === 'ios' ? height/1.7 : height/2, width: width - 40 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 30 }}>
                                <Image source={require('../../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 64, width: 64 }}></Image>
                                <Image source={require('../../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 64, width: 64 }}></Image>
                            </View>

                            <View style={{ flex: 1 ,justifyContent:'flex-end',marginBottom:20}}>
                                <Text style={[style.m18, { color: Colors.txt ,textAlign:'center'}]}>Invite friends and get a bonus points for every new player!</Text>

                                <View style={[style.inputcontainer, { marginTop: 20, backgroundColor: Colors.bord, borderColor: '#0062CC20', borderWidth: 1, marginHorizontal: 20 }]}>
                                    <Text style={[style.b16, { color: Colors.active, flex: 1, marginBottom: -4, marginHorizontal: 10, textAlign: 'center' }]}>QU123Z</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 30 }}>
                                    <View style={{ backgroundColor: Colors.primary, borderRadius: 16, flex: 1, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/image/a7.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                                        <Text style={[style.m16, { color: Colors.secondary, marginLeft: 20 }]}>Copy Code</Text>
                                    </View>
                                    <View style={{ height: 56, width: 56, borderWidth: 2, borderColor: Colors.bord, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                                        <Icon name='share-social-outline' size={26} color={Colors.primary}></Icon>
                                    </View>
                                </View>
                            </View>

                        </ImageBackground>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}