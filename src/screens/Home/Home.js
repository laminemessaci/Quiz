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

export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Platform.OS === 'ios' ? 10 : 30, marginHorizontal: 20 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Icon name='sunny-outline' size={20} color={Colors.lpink} />
                        <Text style={[style.m12, { color: Colors.lpink, marginLeft: 5 }]}>GOOD MORNING</Text>
                    </View>
                    <Text style={[style.apptitle, { color: Colors.secondary, }]}>Madelyn Dias</Text>
                </View>
                <Image source={require('../../../assets/image/s1.png')} resizeMode='stretch' style={{ height: 56, width: 56 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                <Image source={require('../../../assets/image/s2.png')} resizeMode='stretch' style={{ height: height / 10, width: width - 40, marginHorizontal: 20, marginTop: 10 }} />

                <ImageBackground source={require('../../../assets/image/s3.png')} resizeMode='stretch' style={{ height: height / 3.5, width: width - 40, marginHorizontal: 20, marginTop: 15 }}>
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Image source={require('../../../assets/image/s4.png')} resizeMode='stretch' style={{ height: 48, width: 48 }} />
                            <Text style={[style.m14, { color: Colors.secondary, }]}>FEATURED</Text>
                            <View style={{ width: 48 }}></View>
                        </View>
                        <Text style={[style.m18, { color: Colors.secondary, textAlign: 'center', marginHorizontal: 25 }]}>Take part in challenges with friends or other players</Text>

                        <View style={{ marginRight: 10, height: 44, alignSelf: 'center', marginTop: 15, paddingHorizontal: 20, borderRadius: 18, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../assets/image/s6.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                            <Text style={[style.m14, { color: Colors.primary, marginLeft: 5 }]}>Find Friends</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', marginTop: -70 }}>
                            <Image source={require('../../../assets/image/s5.png')} resizeMode='stretch' style={{ height: 56, width: 64, }} />
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ padding: 20, backgroundColor: Colors.secondary, marginTop: 20,  borderRadius:20,marginBottom:20 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={[style.subtitle, { color: Colors.txt, flex: 1 }]}>Live Quizzes</Text>
                        <TouchableOpacity>
                            <Text style={[style.m14, { color: Colors.primary, }]}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('QDetail')} style={[style.box, {padding:12, borderRadius: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center' }]}>
                        <Image source={require('../../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 64, width: 64 }} />
                        <View style={{ flex: 1 ,marginLeft:10}}>
                            <Text style={[style.m16, { color: Colors.txt,  }]}>Statistics Math Quiz</Text>
                            <Text style={[style.r12, { color: Colors.disable, marginTop:7}]}>Math • 12 Quizzes</Text>
                        </View>
                        <Icon name='chevron-forward' size={24} color={Colors.primary} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('QDetail')} style={[style.box, {padding:12, borderRadius: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center' }]}>
                        <Image source={require('../../../assets/image/s8.png')} resizeMode='stretch' style={{ height: 64, width: 64 }} />
                        <View style={{ flex: 1 ,marginLeft:10}}>
                            <Text style={[style.m16, { color: Colors.txt,  }]}>Integers Quiz</Text>
                            <Text style={[style.r12, { color: Colors.disable, marginTop:7}]}>Math • 10 Quizzes</Text>
                        </View>
                        <Icon name='chevron-forward' size={24} color={Colors.primary} />
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}