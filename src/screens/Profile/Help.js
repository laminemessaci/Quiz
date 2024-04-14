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

export default function Help() {

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
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Faq')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ImageBackground source={require('../../../assets/image/a8.png')} resizeMode='stretch' style={{flex:1,marginTop:10}}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:15,marginTop:30}}>
                            <Text style={[style.subtitle,{color:Colors.txt}]}>Intro to Queezy apps</Text>
                            <Text style={[style.r14,{color:Colors.disable,marginTop:3}]}>Updated  • 1 month ago</Text>
                            <Text style={[style.r16,{color:Colors.txt1,marginTop:5}]}>Queezy apps offer gamified quizzes with many different topics to test out your knowledge.</Text>
                            <Text style={[style.r16,{color:Colors.txt1,marginTop:8}]}>With Queezy you can also take part in challenges with friends or against others.</Text>
                            <Image source={require('../../../assets/image/a9.png')} resizeMode='stretch' style={{width:width-70,height:height/4.8,marginTop:30}}></Image>
                        </ScrollView>
                    </ImageBackground>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}