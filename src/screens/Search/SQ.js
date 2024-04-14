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

export default function SQ() {
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
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={[style.inputcontainer, { marginHorizontal: 20, backgroundColor: Colors.input }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('SQR')}>
                        <Icon name='search-outline' size={24} color={Colors.secondary} />
                    </TouchableOpacity>
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
                                <Text style={[style.subtitle, { color: Colors.txt, flex: 1 }]}>Recent Searches</Text>
                                <Text style={[style.m14, { color: Colors.primary, }]}>Clear all</Text>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('QDetail')} style={[style.box, { padding: 12, borderRadius: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 50 }]}>
                                <Image source={require('../../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 64, width: 64 }} />
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <Text style={[style.m16, { color: Colors.txt, }]}>Statistics Math Quiz</Text>
                                    <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>Math • 12 Quizzes</Text>
                                </View>
                                <Icon name='chevron-forward' size={24} color={Colors.primary} />
                            </TouchableOpacity>


                        </ScrollView>

                    </View>
                </ImageBackground>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}