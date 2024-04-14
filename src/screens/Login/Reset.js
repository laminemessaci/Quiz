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

export default function Reset() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bord }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bord, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Reset Password'
                        titleStyle={[style.apptitle, { color: Colors.txt }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Icon name='arrow-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <Text style={[style.r16, { color: Colors.disable, marginTop: 5 }]}>Enter your email and we will send you a link to reset your password.</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.r14, { color: Colors.txt, marginTop: 15 }]}>Email Address</Text>
                        <View style={[style.inputcontainer, { marginTop: 8, backgroundColor: Colors.bg }]}>
                            <Icon name='mail-outline' size={24} color={Colors.primary}></Icon>
                            <TextInput placeholder='Your email address'
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -4, marginLeft: 10 }]}
                            />
                        </View>



                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('NewPass')}
                        style={[style.btn, { marginTop: 30 ,marginBottom:20}]}>
                        <Text style={[style.btntxt, {}]}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}