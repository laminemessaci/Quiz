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

export default function Search() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>

                <AppBar
                    style={{ backgroundColor: 'transparent', marginTop: Platform.OS === 'ios' ? 10 : 30, marginHorizontal: 20 }}
                    elevation={0}
                    centerTitle={true}
                    title='Discover'
                    titleStyle={[style.apptitle, { color: Colors.secondary }]}
                    leading={<TouchableOpacity >
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={[style.inputcontainer, { marginHorizontal: 20, backgroundColor: Colors.input }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('SQ')}>
                        <Icon name='search-outline' size={24} color={Colors.secondary} />
                    </TouchableOpacity>
                    <TextInput placeholder='Quiz, categories, or friends' placeholderTextColor={Colors.btn}
                        selectionColor={Colors.secondary}
                        style={[style.r16, { color: Colors.secondary, flex: 1, marginLeft: 5 }]}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                    <Image source={require('../../../assets/image/s9.png')} resizeMode='stretch' style={{ height: height / 5.2, width: width - 40, marginHorizontal: 20, marginTop: 10 }} />

                    <View style={{ padding: 20, backgroundColor: Colors.secondary, marginTop: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                        <Text style={[style.subtitle, { color: Colors.txt, }]}>Top rank of the week</Text>

                        <ImageBackground source={require('../../../assets/image/s10.png')} resizeMode='stretch' style={{ height: height / 8, width: width - 40, marginTop: 15 }}>
                            <View style={{ alignItems: 'flex-end', marginTop: -20, marginRight: 15 }}>
                                <Image source={require('../../../assets/image/s11.png')} resizeMode='stretch' style={{ height: 40, width: 40, }} />
                            </View>
                            <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[style.icon]}>
                                    <Text style={[style.m12, { color: Colors.secondary, marginRight: 2 }]}>1</Text>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../../assets/image/s12.png')} resizeMode='stretch' style={{ height: 56, width: 56, }} />
                                    <Image source={require('../../../assets/image/s13.png')} resizeMode='stretch' style={{ height: 20, width: 20, position: 'absolute', right: -2, bottom: -4 }} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={[style.m16, { color: Colors.secondary, }]}>Brandon Matrovs</Text>
                                    <Text style={[style.r14, { color: Colors.secondary, }]}>124 points</Text>
                                </View>
                            </View>
                        </ImageBackground>

                        <Text style={[style.subtitle, { color: Colors.txt, marginTop: 15 }]}>Categories</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#88E2CE', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s14.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Math</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>21 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#9087E5', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s15.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Science</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>12 Quizzes</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#FF8FA2', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s16.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Music</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>15 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#7491F6', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s17.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Sports</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>18 Quizzes</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#88E2CE', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Tech</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>8 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#FF8FA2', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s19.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Travel</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>14 Quizzes</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#9087E5', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s20.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>History</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>7 Quizzes</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#7491F6', paddingVertical: 15 }}>
                                <Image source={require('../../../assets/image/s21.png')} resizeMode='stretch' style={{ height: 48, width: 48, }} />
                                <Text style={[style.m16, { color: Colors.secondary, marginTop: 7 }]}>Art</Text>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>18 Quizzes</Text>
                            </View>
                        </View>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}