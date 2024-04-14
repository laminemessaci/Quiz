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

export default function Pass() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bord }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bord, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='What’s your password?'
                        titleStyle={[style.apptitle, { color: Colors.txt, marginLeft: 25 }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                            <Icon name='arrow-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

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

                    </ScrollView>

                    <Text style={[style.m16, { color: Colors.primary ,textAlign:'right'}]}>2 of 3</Text>

                    <View style={{ height: 8, borderRadius: 8, backgroundColor: '#6A5AE010' ,marginTop:5}}>
                        <View style={{ height: 8, borderRadius: 8, backgroundColor: Colors.primary ,width:width/1.7}}></View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('User')}
                        style={[style.btn, { marginTop: 30, marginBottom: 20 }]}>
                        <Text style={[style.btntxt, {}]}>Reset Password</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}