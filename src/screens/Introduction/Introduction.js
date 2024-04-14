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

export default function Introduction() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />

            <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>

                <View style={{ width: width }}>
                    <ImageBackground source={require('../../../assets/image/bg1.png')} resizeMode='stretch' style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Image source={require('../../../assets/image/1.png')} resizeMode='stretch' style={{ height: height / 3, width: width - 40, alignSelf: 'center' }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                            <View style={{marginHorizontal:5, height: 16, width: 16, borderRadius: 8, borderColor: Colors.secondary, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={[style.indicator, {}]}></View>
                            </View>
                            <View style={[style.indicator, {}]}></View>
                            <View style={[style.indicator, {}]}></View>
                        </View>

                        <View style={{ flex: 0.4, backgroundColor: Colors.bg, margin: 20, borderRadius: 15, padding: 15 }}>
                            <Text style={[style.apptitle, { color: Colors.active, textAlign: 'center' }]}>Create gamified quizzes becomes simple</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('Option')}
                                style={[style.btn, { marginVertical: 20 }]}>
                                <Text style={[style.btntxt, {}]}>Sign Up</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={[style.r16, { color: Colors.disable, }]}>Already have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Option')}>
                                    <Text style={[style.m16, { color: Colors.primary, }]}> Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ImageBackground>
                </View>

                <View style={{ width: width }}>
                    <ImageBackground source={require('../../../assets/image/bg1.png')} resizeMode='stretch' style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Image source={require('../../../assets/image/2.png')} resizeMode='stretch' style={{ height: height / 2.5, width: width - 40, alignSelf: 'center' }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                            <View style={[style.indicator, {}]}></View>
                            <View style={{marginHorizontal:5, height: 16, width: 16, borderRadius: 8, borderColor: Colors.secondary, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={[style.indicator, {}]}></View>
                            </View>
                            <View style={[style.indicator, {}]}></View>
                        </View>

                        <View style={{ flex: 0.4, backgroundColor: Colors.bg, margin: 20, borderRadius: 15, padding: 15 }}>
                            <Text style={[style.apptitle, { color: Colors.active, textAlign: 'center' }]}>Find quizzes to test out your knowledge</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('Option')}
                                style={[style.btn, { marginVertical: 20 }]}>
                                <Text style={[style.btntxt, {}]}>Sign Up</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={[style.r16, { color: Colors.disable, }]}>Already have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Option')}>
                                    <Text style={[style.m16, { color: Colors.primary, }]}> Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ImageBackground>
                </View>

                <View style={{ width: width }}>
                    <ImageBackground source={require('../../../assets/image/bg1.png')} resizeMode='stretch' style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Image source={require('../../../assets/image/3.png')} resizeMode='stretch' style={{ height: height / 3, width: width - 40, alignSelf: 'center' }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                            <View style={[style.indicator, {}]}></View>
                            <View style={[style.indicator, {}]}></View>
                            <View style={{marginHorizontal:5, height: 16, width: 16, borderRadius: 8, borderColor: Colors.secondary, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={[style.indicator, {}]}></View>
                            </View>
                        </View>

                        <View style={{ flex: 0.4, backgroundColor: Colors.bg, margin: 20, borderRadius: 15, padding: 15 }}>
                            <Text style={[style.apptitle, { color: Colors.active, textAlign: 'center' }]}>Take part in challenges with friends</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('Option')}
                                style={[style.btn, { marginVertical: 20 }]}>
                                <Text style={[style.btntxt, {}]}>Sign Up</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={[style.r16, { color: Colors.disable, }]}>Already have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Option')}>
                                    <Text style={[style.m16, { color: Colors.primary, }]}> Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}