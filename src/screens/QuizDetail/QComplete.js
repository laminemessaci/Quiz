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

export default function QComplete() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: Colors.bg }}
                        elevation={0}
                        centerTitle={true}
                        title='Good Job!'
                        titleStyle={[style.apptitle, { color: Colors.txt }]}
                        trailing={<TouchableOpacity onPress={() => navigation.navigate('QD7')}>
                            <Icon name='close' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                        leading={<View></View>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Image source={require('../../../assets/image/s58.png')} resizeMode='stretch' style={{ height: height / 2.8, width: width - 40 }} />

                        <Text style={[style.m12, { color: Colors.disable, marginTop: 15 }]}>Accuration Answer</Text>

                        <Image source={require('../../../assets/image/s59.png')} resizeMode='stretch' style={{ height: height / 10, width: width - 40, marginTop: 15 }} />

                        <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.m12, { color: Colors.disable }]}>CORRECT ANSWER</Text>
                                <Text style={[style.subtitle, { color: Colors.txt, marginTop: 5 }]}>7 questions</Text>
                                <Text style={[style.m12, { color: Colors.disable, marginTop: 15 }]}>Skipped</Text>
                                <Text style={[style.subtitle, { color: Colors.txt }]}>2</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.m12, { color: Colors.disable }]}>COMPLETION</Text>
                                <Text style={[style.subtitle, { color: Colors.txt, marginTop: 5 }]}>80%</Text>
                                <Text style={[style.m12, { color: Colors.disable, marginTop: 15 }]}>INCORRECT ANSWER</Text>
                                <Text style={[style.subtitle, { color: Colors.txt }]}>1</Text>
                            </View>
                        </View>

                    </ScrollView>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Review')}
                            style={[style.btn, { flex: 1, }]}>
                            <Text style={[style.btntxt]}>Done</Text>
                        </TouchableOpacity>
                        <View style={[style.icon,{height:56,width:56,borderRadius:20,marginLeft:10}]}>
                        <Icon name='share-social-outline' size={24} color={Colors.primary} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}