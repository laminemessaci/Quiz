import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Switch } from 'react-native'
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

export default function Setting() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Settings'
                        titleStyle={[style.apptitle, { color: Colors.txt, marginLeft: 25 }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                            <Icon name='arrow-back' size={24} color={Colors.txt} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.m14, { color: Colors.disable }]}>ACCOUNT</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bord, borderRadius: 16, padding: 15, marginTop: 15 }}>
                            <View style={{ height: 44, width: 44, backgroundColor: Colors.secondary, borderRadius: 22, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='person-outline' size={24} color={Colors.primary}></Icon>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16, { color: Colors.txt }]}>Update Profile</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>Update username, country, etc</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.txt}></Icon>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bord, borderRadius: 16, padding: 15, marginTop: 15 }}>
                            <View style={{ height: 44, width: 44, backgroundColor: Colors.secondary, borderRadius: 22, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='mail-outline' size={24} color={Colors.primary}></Icon>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16, { color: Colors.txt }]}>Change Email Address</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>madias@yahoo.com</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.txt}></Icon>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bord, borderRadius: 16, padding: 15, marginTop: 15 }}>
                            <View style={{ height: 44, width: 44, backgroundColor: Colors.secondary, borderRadius: 22, alignItems: 'center', justifyContent: 'center' }}>
                                <Icons name='lock-outline' size={24} color={Colors.primary}></Icons>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16, { color: Colors.txt }]}>Change Password</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>last change 1 year ago</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.txt}></Icon>
                        </View>

                        <Text style={[style.m14, { color: Colors.disable, marginTop: 20 }]}>OTHER</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Notification</Text>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('InviteF')}
                        style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bord, borderRadius: 16, padding: 15, marginTop: 15 }}>
                            <View style={{ height: 44, width: 44, backgroundColor: Colors.secondary, borderRadius: 22, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='people-outline' size={24} color={Colors.primary}></Icon>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16, { color: Colors.txt }]}>Invite Friends</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>Easy, normal, hard</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.txt}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Faq')}
                        style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bord, borderRadius: 16, padding: 15, marginTop: 15 }}>
                            <View style={{ height: 44, width: 44, backgroundColor: Colors.secondary, borderRadius: 22, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='help-sharp' size={24} color={Colors.primary}></Icon>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16, { color: Colors.txt }]}>FAQ</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>Most frequently asked question</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.txt}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.m16,{color:'#EB5757',textAlign:'center',marginTop:30,marginBottom:20}]}>Logout</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}