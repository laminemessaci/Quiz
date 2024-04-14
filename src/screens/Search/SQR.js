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

export default function SQR() {
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
                    leading={<TouchableOpacity onPress={() => navigation.navigate('SQ')}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={[style.inputcontainer, { marginHorizontal: 20, backgroundColor: Colors.input }]}>
                    <Icon name='search-outline' size={24} color={Colors.secondary} />
                    <TextInput placeholder='Quiz, categories, or friends' placeholderTextColor={Colors.btn}
                        selectionColor={Colors.secondary}
                        style={[style.r16, { color: Colors.secondary, flex: 1, marginLeft: 5 }]}
                    />
                </View>

                <ImageBackground source={require('../../../assets/image/s22.png')} resizeMode='stretch' style={{ flex: 1, width: width - 20, marginTop: 15, marginHorizontal: 10 }}>
                    <View style={{ padding: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-around' }}>
                            <Text style={[style.b14, { color: Colors.primary, }]}>Top</Text>
                            <Text style={[style.r14, { color: Colors.disable, }]}>Quiz</Text>
                            <Text style={[style.r14, { color: Colors.disable, }]}>Categories</Text>
                            <Text style={[style.r14, { color: Colors.disable, }]}>Friends</Text>
                        </View>
                        <View style={[style.indicator, { backgroundColor: Colors.primary, marginLeft: 25, marginTop: 5 }]}></View>

                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={[style.subtitle, { color: Colors.txt, flex: 1 }]}>Quiz</Text>
                                <Text style={[style.m14, { color: Colors.primary, }]}>Clear all</Text>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('QDetail')} style={[style.box, { padding: 12, borderRadius: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center', }]}>
                                <Image source={require('../../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 64, width: 64 }} />
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <Text style={[style.m16, { color: Colors.txt, }]}>Statistics Math Quiz</Text>
                                    <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>Math • 12 Quizzes</Text>
                                </View>
                                <Icon name='chevron-forward' size={24} color={Colors.primary} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('QDetail')} style={[style.box, { padding: 12, borderRadius: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center', }]}>
                                <Image source={require('../../../assets/image/s23.png')} resizeMode='stretch' style={{ height: 64, width: 64 }} />
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <Text style={[style.m16, { color: Colors.txt, }]}>Matrices Quiz</Text>
                                    <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>Math • 6 Quizzes</Text>
                                </View>
                                <Icon name='chevron-forward' size={24} color={Colors.primary} />
                            </TouchableOpacity>

                            <Text style={[style.subtitle, { color: Colors.txt, marginTop: 15 }]}>Friends</Text>

                            <View style={{  flexDirection: 'row', alignItems: 'center' ,marginTop:15}}>
                               <View style={{  }}>
                                    <Image source={require('../../../assets/image/s1.png')} resizeMode='stretch' style={{ height: 56, width: 56, }} />
                                    <Image source={require('../../../assets/image/s24.png')} resizeMode='stretch' style={{ height: 20, width: 20, position: 'absolute', right: -2, bottom: -4 }} />
                                </View>
                                <View style={{ marginLeft: 15 ,flex:1}}>
                                    <Text style={[style.m16, { color: Colors.txt, }]}>Maren Workman</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>325 points</Text>
                                </View>
                            </View>

                            <View style={{  flexDirection: 'row', alignItems: 'center' ,marginTop:15}}>
                               <View style={{  }}>
                                    <Image source={require('../../../assets/image/s25.png')} resizeMode='stretch' style={{ height: 56, width: 56, }} />
                                    <Image source={require('../../../assets/image/s13.png')} resizeMode='stretch' style={{ height: 20, width: 20, position: 'absolute', right: -2, bottom: -4 }} />
                                </View>
                                <View style={{ marginLeft: 15 ,flex:1}}>
                                    <Text style={[style.m16, { color: Colors.txt, }]}>Brandon Matrovs</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>124 points</Text>
                                </View>
                            </View>

                            <View style={{  flexDirection: 'row', alignItems: 'center' ,marginTop:15,marginBottom:60}}>
                               <View style={{  }}>
                                    <Image source={require('../../../assets/image/s26.png')} resizeMode='stretch' style={{ height: 56, width: 56, }} />
                                    <Image source={require('../../../assets/image/s27.png')} resizeMode='stretch' style={{ height: 20, width: 20, position: 'absolute', right: -2, bottom: -4 }} />
                                </View>
                                <View style={{ marginLeft: 15 ,flex:1}}>
                                    <Text style={[style.m16, { color: Colors.txt, }]}>Manuela Lipshutz</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>437 points</Text>
                                </View>
                            </View>

                        </ScrollView>

                    </View>
                </ImageBackground>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}