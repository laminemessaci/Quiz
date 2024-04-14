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

export default function QDetail() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
            <ImageBackground source={require('../../../assets/image/s44.png')} resizeMode='stretch' style={{ flex: 1 }}>
                <AppBar
                    style={{ backgroundColor: 'transparent', marginTop: Platform.OS === 'ios' ? 10 : 30, marginHorizontal: 20, flex: 0.54 }}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={{ flex: 1, backgroundColor: Colors.secondary, margin: 10, borderRadius: 20, paddingVertical: 15, paddingHorizontal: 10 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.m14, { color: Colors.disable }]}>SPORTS</Text>
                        <Text style={[style.apptitle, { color: Colors.txt }]}>Basic Trivia Quiz</Text>

                        <View style={[style.box, { backgroundColor: '#EFEEFC', borderWidth: 0, borderRadius: 15, marginTop: 10 }]}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../../assets/image/s45.png')} resizeMode='stretch' style={{ height: 32, width: 32 }} />
                                <Text style={[style.m14, { color: Colors.txt, marginLeft: 10 }]}>10 questions</Text>
                            </View>
                            <View style={[style.verticaldivider, { backgroundColor: '#CCCCCC50', height: '100%', marginHorizontal: 10 }]}></View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../../assets/image/s46.png')} resizeMode='stretch' style={{ height: 32, width: 32 }} />
                                <Text style={[style.m14, { color: Colors.txt, marginLeft: 10 }]}>+100 points</Text>
                            </View>
                        </View>

                        <Text style={[style.m14, { color: Colors.disable, marginTop: 15 }]}>DESCRIPTION</Text>
                        <Text style={[style.r16, { color: Colors.txt, marginTop: 5 }]}>Any time is a good time for a quiz and even better if that happens to be a football themed quiz!</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../../assets/image/s47.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.m14, { color: Colors.txt, }]}>Brandon Curtis</Text>
                                <Text style={[style.r12, { color: Colors.disable, }]}>Creator</Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={[style.btnoutline,{flex:0.8}]}>
                            <Text style={[style.btntxt, { color: Colors.primary }]}>Play Solo</Text>
                        </TouchableOpacity>
                        <View style={{marginHorizontal:5}}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('QD1')}
                            style={[style.btn, {flex:1}]}>
                            <Text style={[style.btntxt]}>Play with Friends</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}