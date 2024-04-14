import { View, Text, SafeAreaView, TextInput, Dimensions, Modal, Switch, ImageBackground, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function RQ() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>

                <AppBar
                    style={{ backgroundColor: 'transparent', marginTop: Platform.OS === 'ios' ? 10 : 30, marginHorizontal: 20 }}
                    elevation={0}
                    centerTitle={true}
                    title='Create Quiz'
                    titleStyle={[style.apptitle, { color: Colors.secondary }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('CQ10')}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                    trailing={<TouchableOpacity >
                        <Icon name='ellipsis-horizontal' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }} >

                    <View style={{ alignItems: 'flex-end' }}>
                        <Image source={require('../../../assets/image/s35.png')} resizeMode='stretch' style={{ height: height / 4, width: width / 1.4, }} />
                    </View>

                    <ImageBackground source={require('../../../assets/image/s36.png')} resizeMode='stretch' style={{ height: 178, width: width - 20, marginHorizontal: 10 }}>
                        <View style={{ padding: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                                <View style={[style.box, { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, backgroundColor: '#6A5AE010', borderWidth: 0 }]}>
                                    <Image source={require('../../../assets/image/s37.png')} resizeMode='stretch' style={{ height: 16, width: 16, }} />
                                    <Text style={[style.m12, { color: Colors.primary, marginLeft: 5, }]}>TECH • 5 QUIZZES</Text>
                                </View>
                                <Icons name='pencil-outline' size={24} color={Colors.disable} />
                            </View>
                            <Text style={[style.subtitle, { color: Colors.txt, marginTop: 15, }]}>Remote Work Tools Quiz</Text>
                            <Text style={[style.r16, { color: Colors.disable, marginTop: 5, }]}>Take this basic remote work tools quiz to test your tech knowledge.</Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground source={require('../../../assets/image/s38.png')} resizeMode='stretch' style={{ height: height/1.1, width: width - 20, marginHorizontal: 10, marginBottom: 20 }}>
                        <View style={{ padding: 15 }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={[style.m18, { color: Colors.txt, }]}>Questions</Text>
                                <View style={[style.icon, { borderRadius: 8, borderWidth: 0, backgroundColor: Colors.primary, marginLeft: 10 }]}>
                                    <Text style={[style.b14, { color: Colors.secondary }]}>5</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Icons name='pencil-outline' size={24} color={Colors.disable} />
                                </View>
                            </View>

                            <View style={{ padding: 12, borderRadius: 20, backgroundColor: '#EFEEFC', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>1</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Which mathematical symbol was the title of Ed Sheeran’s first album in 2011?</Text>
                                        <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>Multiple Choices</Text>
                                    </View>
                                    <Image source={require('../../../assets/image/s39.png')} resizeMode='stretch' style={{ height: 56, width: 56 }} />
                                </View>
                            </View>

                            <View style={{ padding: 12, borderRadius: 20, backgroundColor: '#EFEEFC', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>2</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Bad Romance was Lady Gaga’s first No. 1 hit?</Text>
                                        <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>True or False</Text>
                                    </View>
                                    <Image source={require('../../../assets/image/s40.png')} resizeMode='stretch' style={{ height: 56, width: 56 }} />
                                </View>
                            </View>

                            <View style={{ padding: 12, borderRadius: 20, backgroundColor: '#EFEEFC', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>3</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>What is the name of The Beatles’ first album?</Text>
                                        <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>Type Answer</Text>
                                    </View>
                                    <Image source={require('../../../assets/image/s41.png')} resizeMode='stretch' style={{ height: 56, width: 56 }} />
                                </View>
                            </View>

                            <View style={{ padding: 12, borderRadius: 20, backgroundColor: '#EFEEFC', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>4</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Who wrote the song 'Let's Get It On'?</Text>
                                        <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>Voice Note</Text>
                                    </View>
                                    <Image source={require('../../../assets/image/s42.png')} resizeMode='stretch' style={{ height: 56, width: 56 }} />
                                </View>
                            </View>

                            <View style={{ padding: 12, borderRadius: 20, backgroundColor: '#EFEEFC', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>5</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Who was the 2 most streamed artist on Spotify in 2019?</Text>
                                        <Text style={[style.r12, { color: Colors.disable, marginTop: 7 }]}>Checkbox</Text>
                                    </View>
                                    <Image source={require('../../../assets/image/s43.png')} resizeMode='stretch' style={{ height: 56, width: 56 }} />
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                                style={[style.btn, { marginTop: 20, marginBottom: 10 }]}>
                                <Text style={[style.btntxt]}>Save</Text>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}