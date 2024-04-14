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

export default function CQ9() {
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
                    leading={<TouchableOpacity onPress={() => navigation.navigate('CQ8')}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                    trailing={<TouchableOpacity >
                        <Icon name='ellipsis-horizontal' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={{ padding: 15, backgroundColor: Colors.secondary, marginHorizontal: 10, borderRadius: 20, marginBottom: 100 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View >
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>1</Text>
                                    <Text style={[style.r14, { color: Colors.disable, marginHorizontal: 30 }]}>2</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>3</Text>
                                    <Text style={[style.r14, { color: Colors.disable, marginHorizontal: 30 }]}>4</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>5</Text>
                                    <Text style={[style.r14, { color: Colors.disable, marginHorizontal: 30 }]}>6</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>7</Text>
                                    <Text style={[style.r14, { color: Colors.disable, marginHorizontal: 30 }]}>8</Text>
                                    <View style={[style.icon, { height: 32, width: 32, backgroundColor: Colors.active, borderWidth: 0, }]}>
                                        <Text style={[style.r14, { color: Colors.secondary, marginLeft: -2 }]}>9</Text>
                                    </View>
                                    <Text style={[style.r14, { color: Colors.disable, marginLeft: 30 }]}>10</Text>
                                </View>
                            </ScrollView>
                        </View>


                        <View style={{ height: height / 4, marginTop: 15, backgroundColor: '#EFEEFC', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='image-outline' size={60} color={Colors.primary} />
                            <Text style={[style.m16, { color: Colors.primary }]}>Add Cover Image</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }}>
                            <View style={[style.box, { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 }]}>
                                <Icons name='clock-time-four-outline' size={16} color={Colors.primary} />
                                <Text style={[style.m12, { color: Colors.txt, marginLeft: 5, }]}>20 Sec</Text>
                            </View>
                            <View style={[style.box, { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 }]}>
                                <Text style={[style.m12, { color: Colors.txt, marginRight: 5, }]}>Poll</Text>
                                <Icon name='chevron-down' size={16} color={Colors.primary} />
                            </View>
                        </View>

                        <Text style={[style.m16, { color: Colors.txt, marginTop: 20 }]}>Add Question</Text>
                        <View style={[style.txtinput, { marginTop: 5 }]}>
                            <TextInput placeholder='Enter your question' placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.r16, { color: Colors.active, flex: 1 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 10 }]}>
                            <TextInput placeholder='Add choice answer 1' placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.r16, { color: Colors.active, flex: 1 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 10 }]}>
                            <TextInput placeholder='Add choice answer 2' placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.r16, { color: Colors.active, flex: 1 }]}
                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('CQ10')}
                            style={[style.btn, { marginTop: 20, marginBottom: 10 }]}>
                            <Text style={[style.btntxt]}>Add Question</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}