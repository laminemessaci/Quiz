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

export default function Review() {
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
                        title='Review Answers'
                        titleStyle={[style.apptitle, { color: Colors.txt }]}
                        trailing={<TouchableOpacity onPress={() => navigation.navigate('QComplete')}>
                            <Icon name='close' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                        leading={<View></View>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Image source={require('../../../assets/image/s60.png')} resizeMode='stretch' style={{ height: height / 3.5, width: width - 40 }} />

                        <Text style={[style.m18, { color: Colors.txt, marginTop: 15 }]}>Your Answers</Text>

                        <View style={{ paddingHorizontal: 10, paddingVertical: 20, borderRadius: 20, backgroundColor: '#EFEEFC', marginVertical: 15 }}>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC', }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>1</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Can you name the top 3 Premier League goal scorers?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>-</Text>
                                    </View>
                                    <Icon name='alert-circle-outline' size={24} color='#F2994A' />
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>2</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Name the clubs in England's top football division for the 2020–21 season.</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>-</Text>
                                    </View>
                                    <Icon name='alert-circle-outline' size={24} color='#F2994A' />
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>3</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Which player scored the fastest hat-trick in the Premier League?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>Sadio Mane</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>4</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Theodorus of Samos is the person who invented keys?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>True</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>5</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Who are three players share the record for most Premier League red cards (8)?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>Light Year</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>6</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>How to pronounce Wojciech Szczesny?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>voy · chek shez · nee</Text>
                                    </View>
                                    <Icon name='volume-medium-outline' size={24} color={Colors.primary} />
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>7</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Which three players shared the Premier League Golden Boot in 2018-19?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>Mohamed Salah, Sadio Mane, Aubameyang</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>8</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>What is the best club in England?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>Manchester United</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>9</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>Sort the cartoon name in the picture above into order</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>Bart Simpson</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderRadius: 20, backgroundColor: '#EFEEFC',marginTop:15 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={[style.icon, { backgroundColor: Colors.secondary, borderWidth: 0, height: 32, width: 32 }]}>
                                        <Text style={[style.m16, { color: Colors.primary }]}>10</Text>
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                                        <Text style={[style.m14, { color: Colors.txt, }]}>What does UAV stand for drone?</Text>
                                        <Text style={[style.r14, { color: Colors.disable, marginTop: 7 }]}>Unmanned Aerial Vehicle</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </ScrollView>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                        <TouchableOpacity style={[style.btnoutline,{flex:1}]}>
                            <Text style={[style.btntxt, { color: Colors.primary }]}>Edit Answer</Text>
                        </TouchableOpacity>
                        <View style={{marginHorizontal:5}}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={[style.btn, {flex:1}]}>
                            <Text style={[style.btntxt]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}