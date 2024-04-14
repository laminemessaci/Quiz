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

export default function CCategory() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>

                <AppBar
                    style={{ backgroundColor: 'transparent', marginTop: Platform.OS === 'ios' ? 10 : 30, marginHorizontal: 20 }}
                    elevation={0}
                    centerTitle={true}
                    title='Choose Category'
                    titleStyle={[style.apptitle, { color: Colors.secondary }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={{ padding: 15, backgroundColor: Colors.secondary, marginHorizontal: 10, borderRadius: 20, marginBottom: 100 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#FF8FA2', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s14.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Math</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>21 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s28.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.primary, marginTop: 7 }]}>Sports</Text>
                                <Text style={[style.r12, { color: '#6A5AE075', }]}>18 Quizzes</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s29.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.primary, marginTop: 7 }]}>Music</Text>
                                <Text style={[style.r12, { color: '#6A5AE075', }]}>15 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s30.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.primary, marginTop: 7 }]}>Science</Text>
                                <Text style={[style.r12, { color: '#6A5AE075', }]}>12 Quizzes</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s31.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.primary, marginTop: 7 }]}>Art</Text>
                                <Text style={[style.r12, { color: '#6A5AE075', }]}>18 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s32.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.primary, marginTop: 7 }]}>Travel</Text>
                                <Text style={[style.r12, { color: '#6A5AE075', }]}>14 Quizzes</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s33.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.primary, marginTop: 7 }]}>History</Text>
                                <Text style={[style.r12, { color: '#6A5AE075', }]}>7 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s34.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.primary, marginTop: 7 }]}>Tech</Text>
                                <Text style={[style.r12, { color: '#6A5AE075', }]}>8 Quizzes</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('CQ4')}
                            style={[style.btn, { marginTop: 30, marginBottom: 10 }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}