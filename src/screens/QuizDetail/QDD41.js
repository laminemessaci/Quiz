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

export default function QDD41() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>

                <AppBar
                    style={{ backgroundColor: 'transparent', marginTop: Platform.OS === 'ios' ? 10 : 30, marginHorizontal: 20 }}
                    elevation={0}
                    centerTitle={true}
                    title='Answers Explanation'
                    titleStyle={[style.apptitle, { color: Colors.secondary }]}
                    trailing={<TouchableOpacity onPress={() => navigation.navigate('QDD4')}>
                        <Icon name='close' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                    leading={<View></View>}
                />

                <View style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, marginHorizontal: 10, borderRadius: 20, marginBottom: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <Text style={[style.m14, { color: Colors.disable, }]}>QUESTION 6 OF 10</Text>
                        <Text style={[style.subtitle, { color: Colors.txt, marginTop: 5 }]}>How to pronounce Wojciech Szczesny?</Text>

                        <Text style={[style.m14, { color: Colors.disable, marginTop: 15 }]}>VOICE ANSWER</Text>

                        <View style={[style.txtinput, { marginTop: 5, backgroundColor: '#53DF83', borderWidth: 0 }]}>
                            <Icon name='play' size={24} color={Colors.secondary} />
                            <Text style={[style.r16, { color: Colors.secondary, flex: 1, marginLeft: 10 }]}>voy · chek shez · nee</Text>
                            <View style={[style.icon, { height: 32, width: 32, borderWidth: 0, backgroundColor: '#FFFFFF30' }]}>
                                <Icon name='checkmark-sharp' size={18} color={Colors.secondary} />
                            </View>
                        </View>

                        <Text style={[style.m14, { color: Colors.disable, marginTop: 15 }]}>EXPLANATION</Text>
                        <Text style={[style.r16, { color: Colors.txt, marginTop: 5 }]}>Pronunciation	English: /ˈvɔɪtʃɛx/ VOY-chekh Polish: [ˈvɔjtɕɛx] ( listen)</Text>

                        <Text style={[style.r16, { color: Colors.txt, marginTop: 10 }]}>Gender:	male</Text>

                        <Text style={[style.r16, { color: Colors.txt, marginTop: 10 }]}>Word/name	origin: Polish</Text>

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('QD5')}
                        style={[style.btn, {}]}>
                        <Text style={[style.btntxt]}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}