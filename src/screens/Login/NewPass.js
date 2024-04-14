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

export default function NewPass() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bord }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bord, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='New Password'
                        titleStyle={[style.apptitle, { color: Colors.txt }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Reset')} >
                            <Icon name='arrow-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <Text style={[style.r16, { color: Colors.disable, marginTop: 5 }]}>Your new password must be different from previous used passwords.</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

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
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:8}}>
                            <Text style={[style.r14,{color:Colors.disable}]}>Must be at least 8 characters.</Text>
                            <Icon name='checkmark-sharp' size={20} color={Colors.primary}></Icon>
                        </View>

                        <Text style={[style.r14, { color: Colors.txt, marginTop: 20 }]}>Confirm Password</Text>
                        <View style={[style.inputcontainer, { marginTop: 8, backgroundColor: Colors.bg }]}>
                            <Icons name='lock-outline' size={24} color={Colors.primary}></Icons>
                            <TextInput placeholder='Confirm Password'
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                secureTextEntry={!isPasswordVisible1}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -4, marginLeft: 10 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible1(!isPasswordVisible1)} >
                                <Icon name={!isPasswordVisible1 ? 'eye-off' : 'eye'} color={'#CCCCCC'} size={20} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}
                            style={[style.btn, { marginTop: 30 }]}>
                            <Text style={[style.btntxt, {}]}>Reset Password</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}