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

export default function Faq() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bord }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bord, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Help and Support'
                        titleStyle={[style.apptitle, { color: Colors.txt, marginLeft: 25 }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Setting')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ImageBackground source={require('../../../assets/image/a8.png')} resizeMode='stretch' style={{ flex: 1, marginTop: 10 }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, marginTop: 35 }}>
                            <View style={[style.inputcontainer, {  backgroundColor: Colors.bord, }]}>
                                <Icon name='search' size={20} color={Colors.txt}></Icon>
                                <TextInput placeholder='Search topics or questions'
                                    placeholderTextColor={Colors.disable}
                                    selectionColor={Colors.primary}
                                    style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -4, marginHorizontal: 10,  }]}
                                />
                            </View>
                            <Text style={[style.m14, { color: Colors.disable ,marginTop:20}]}>INTRO</Text>
                            <View style={[style.divider,{backgroundColor:Colors.bord,marginVertical:12}]}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('Help')} >
                            <Text style={[style.m16, { color: Colors.txt }]}>Intro to Queezy apps</Text>
                            </TouchableOpacity>
                            <View style={[style.divider,{backgroundColor:Colors.bord,marginVertical:12}]}></View>
                            <Text style={[style.m16, { color: Colors.txt }]}>How to login or sign up</Text>
                            <Text style={[style.m14, { color: Colors.disable ,marginTop:25}]}>CREATE AND TAKE QUIZ</Text>
                            <View style={[style.divider,{backgroundColor:Colors.bord,marginVertical:12}]}></View>
                            <Text style={[style.m16, { color: Colors.txt }]}>How to create quiz in the app</Text>
                            <View style={[style.divider,{backgroundColor:Colors.bord,marginVertical:12}]}></View>
                            <Text style={[style.m16, { color: Colors.txt }]}>How to take quiz in the app</Text>
                            <View style={[style.divider,{backgroundColor:Colors.bord,marginVertical:12}]}></View>
                            <Text style={[style.m16, { color: Colors.txt }]}>How do I play quiz with other players?</Text>
                            <View style={[style.divider,{backgroundColor:Colors.bord,marginVertical:12}]}></View>
                            <Text style={[style.m16, { color: Colors.txt }]}>Can I invite my friends to play quiz together?</Text>
                            <View style={[style.divider,{backgroundColor:Colors.bord,marginVertical:12}]}></View>

                        </ScrollView>
                    </ImageBackground>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}