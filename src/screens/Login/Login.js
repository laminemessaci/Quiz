import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Login() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bord }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bord, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Login'
                        titleStyle={[style.apptitle, { color: Colors.txt }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Option')} >
                            <Icon name='arrow-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <TouchableOpacity 
                            style={[style.btn, { marginTop: 15, backgroundColor: Colors.bg, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={require('../../../assets/image/a2.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            <Text style={[style.m16, { color: Colors.txt, marginLeft: 20 }]}>Login with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[style.btn, { marginTop: 15, backgroundColor: '#0056B2', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={require('../../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            <Text style={[style.m16, { color: Colors.secondary, marginLeft: 20 }]}>Login with Facebook</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>

                            <View style={[style.divider, { backgroundColor: Colors.btn, flex: 1 }]}></View>
                            <Text style={[style.r16, { color: Colors.disable, marginHorizontal: 20 }]}>OR</Text>
                            <View style={[style.divider, { backgroundColor: Colors.btn, flex: 1 }]}></View>

                        </View>

                        <Text style={[style.r14, { color: Colors.txt, marginTop: 10 }]}>Email Address</Text>
                        <View style={[style.inputcontainer, { marginTop: 8, backgroundColor: Colors.bg }]}>
                            <Icon name='mail-outline' size={24} color={Colors.primary}></Icon>
                            <TextInput placeholder='Your email address'
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -4, marginLeft: 10 }]}
                            />
                        </View>

                        <Text style={[style.r14, { color: Colors.txt, marginTop: 20 }]}>Password</Text>
                        <View style={[style.inputcontainer, { marginTop: 8, backgroundColor: Colors.bg }]}>
                            <Icons name='lock-outline' size={24} color={Colors.primary}></Icons>
                            <TextInput placeholder='Your password'
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                secureTextEntry={!isPasswordVisible}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -4, marginLeft: 10 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={!isPasswordVisible ? 'eye-off' : 'eye'} color={'#CCCCCC'} size={20} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={[style.btn, { marginTop: 30 }]}>
                            <Text style={[style.btntxt, {}]}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
                            <Text style={[style.m16,{color:Colors.primary,textAlign:'center',marginTop:30}]}>Forgot password?</Text>
                        </TouchableOpacity>

                        <Text style={[style.r14,{color:Colors.disable,textAlign:'center',lineHeight:24,marginTop:20}]}>By continuing, you agree to the <Text style={[style.m14,{color:Colors.txt1}]}>Terms of Services</Text> &<Text style={[style.m14,{color:Colors.txt1}]}> Privacy Policy.</Text></Text>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}