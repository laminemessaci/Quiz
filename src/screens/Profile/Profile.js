import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Switch, StyleSheet } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tab = createMaterialTopTabNavigator();

const Top = () => {
    return <Tab.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor: Colors.bg, shadowColor: Colors.bg, marginTop: 10, marginHorizontal: 10, borderRadius: 40, },
            tabBarShowLabel: true,
            swipeEnabled: false,
            tabBarIndicatorStyle: { opacity: 0 },
            tabBarPressOpacity: 10,
            tabBarPressColor: Colors.bg,

        }}>

        <Tab.Screen name="Badge" component={Badge}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{

                    }}>
                        <Text style={[style.b12, { color: focused ? Colors.primary : Colors.disable, textAlign: 'center', }]}>Badge</Text>
                    </View>
                ),
                headerShown: false,
            }}
        />
        <Tab.Screen name="Stats" component={Stats}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{

                    }}>
                        <Text style={[style.b12, { color: focused ? Colors.primary : Colors.disable, textAlign: 'center', }]}>Stats</Text>
                    </View>
                ),
                headerShown: false,
            }} />

        <Tab.Screen name="Details" component={Details}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{

                    }}>
                        <Text style={[style.b12, { color: focused ? Colors.primary : Colors.disable, textAlign: 'center', }]}>Details</Text>
                    </View>
                ),
                headerShown: false,
            }} />

    </Tab.Navigator>
}

const Badge = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20, marginHorizontal: 5 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image source={require('../../../assets/image/a31.png')} resizeMode='stretch' style={{ height: 88, width: 88 }}></Image>
                    <Image source={require('../../../assets/image/a32.png')} resizeMode='stretch' style={{ height: 88, width: 88 }}></Image>
                    <Image source={require('../../../assets/image/a33.png')} resizeMode='stretch' style={{ height: 88, width: 88 }}></Image>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                    <Image source={require('../../../assets/image/a34.png')} resizeMode='stretch' style={{ height: 88, width: 88 }}></Image>
                    <Image source={require('../../../assets/image/a35.png')} resizeMode='stretch' style={{ height: 88, width: 88 }}></Image>
                    <Image source={require('../../../assets/image/a36.png')} resizeMode='stretch' style={{ height: 88, width: 88 }}></Image>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const Stats = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 5 }}>

                <View style={{ backgroundColor: '#E8E5FA', borderRadius: 20, padding: 15 }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bg, borderRadius: 12, paddingVertical: 5, paddingHorizontal: 10 }}>
                            <Text style={[style.m12, { color: Colors.txt, marginRight: 5 }]}>Monthly</Text>
                            <Icon name='chevron-down' size={18} color={Colors.primary}></Icon>
                        </View>
                    </View>
                    <Text style={[style.subtitle, { color: Colors.txt, marginTop: 15, }]}>You have played a total <Text style={{ color: Colors.primary }}>24 quizzes</Text> this month!</Text>

                    <Image source={require('../../../assets/image/a37.png')} resizeMode='stretch' style={{ height: 148, width: 148, alignSelf: 'center', marginTop: 15 }}></Image>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flex: 1, backgroundColor: Colors.secondary, padding: 15, borderRadius: 20 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Icons name='pencil' size={24} color={Colors.txt} style={{}}></Icons>
                            </View>
                            <Text style={[style.title, { color: Colors.txt, marginTop: -18 }]}>5</Text>
                            <Text style={[style.r14, { color: Colors.txt, lineHeight: 14, marginTop: -5 }]}>Quiz Created</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: Colors.primary, padding: 15, borderRadius: 20, marginLeft: 10 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Image source={require('../../../assets/image/a38.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                            </View>
                            <Text style={[style.title, { color: Colors.secondary, marginTop: -18 }]}>21</Text>
                            <Text style={[style.r14, { color: Colors.secondary, lineHeight: 14, marginTop: -5 }]}>Quiz Won</Text>
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: Colors.primary, borderRadius: 20, marginTop: 20, padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[style.subtitle, { color: Colors.secondary, flex: 1 }]}>Top performance by category</Text>
                        <Image source={require('../../../assets/image/a40.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#FFD6DD' }}></View>
                        <Text style={[style.m14, { color: Colors.secondary, marginLeft: 10 }]}>Math</Text>

                        <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#C4D0FB', marginLeft: 20 }}></View>
                        <Text style={[style.m14, { color: Colors.secondary, marginLeft: 10 }]}>Sports</Text>

                        <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: '#A9ADF3', marginLeft: 20 }}></View>
                        <Text style={[style.m14, { color: Colors.secondary, marginLeft: 10 }]}>Music</Text>
                    </View>
                    <Image source={require('../../../assets/image/a39.png')} resizeMode='stretch' style={{ height: height / 3, width: width / 1.2, alignSelf: 'center', marginTop: 20 }}></Image>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const Details = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 5 }}>

                <View style={{ backgroundColor: '#E8E5FA', borderRadius: 20, padding: 15 }}>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[style.subtitle, { color: Colors.txt, }]}>Recent matches</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bg, borderRadius: 12, paddingVertical: 5, paddingHorizontal: 10 }}>
                            <Text style={[style.m12, { color: Colors.txt, marginRight: 5 }]}>Monthly</Text>
                            <Icon name='chevron-down' size={18} color={Colors.primary}></Icon>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 35 }}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{}}>
                                <Image source={require('../../../assets/image/a18.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                                <View style={{ position: 'absolute', alignSelf: 'center', top: -20 }}>
                                    <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                                </View>
                            </View>
                            <Text style={[style.subtitle, { color: Colors.txt, }]}>vs</Text>
                            <Image source={require('../../../assets/image/a23.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                        </View>
                        <View style={{ flex: 0.2 }}></View>
                        <View style={{ backgroundColor: '#5BD7BC', borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8, }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>+100 QP</Text>
                        </View>

                    </View>

                    <View style={[style.divider, { backgroundColor: '#D9D4F7', marginVertical: 20, height: 2 }]}></View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <Image source={require('../../../assets/image/a18.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <Text style={[style.subtitle, { color: Colors.txt, }]}>vs</Text>
                            <View style={{}}>
                                <Image source={require('../../../assets/image/a29.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                                <View style={{ position: 'absolute', alignSelf: 'center', top: -20 }}>
                                    <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.2 }}></View>
                        <View style={{ backgroundColor: '#FF6681', borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8, }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>-50 QP</Text>
                        </View>

                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default function Profile() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <AppBar
                    style={{ backgroundColor: 'transparent', marginHorizontal: 20, marginTop: Platform.OS === 'ios' ? 10 : 30 }}
                    elevation={0}
                    leading={<View ></View>}
                    trailing={<TouchableOpacity onPress={() => navigation.navigate('Setting')} >
                        <Icon name='settings-sharp' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={[style.main, { backgroundColor: Colors.secondary, marginTop: 50, marginHorizontal: 12, borderRadius: 30, paddingHorizontal: 15, marginBottom: 20, paddingBottom: 15 }]}>

                    <Image source={require('../../../assets/image/a18.png')} resizeMode='stretch' style={{ height: 100, width: 100, alignSelf: 'center', marginTop: -50 }}></Image>

                    <Text style={[style.apptitle, { color: Colors.txt, textAlign: 'center', marginTop: 4 }]}>Madelyn Dias</Text>

                    <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: Colors.primary, borderRadius: 20, paddingVertical: 15 }}>

                        <View style={{ alignItems: 'center', flex: 0.9 }}>
                            <Icon name='star-outline' size={24} color={Colors.secondary}></Icon>
                            <Text style={[style.m12, { color: '#FFFFFF50', marginTop: 5 }]}>POINTS</Text>
                            <Text style={[style.b16, { color: '#FFFFFF', lineHeight: 20 }]}>590</Text>
                        </View>

                        <View style={[style.verticaldivider, { backgroundColor: '#FFFFFF50', height: height / 14 }]}></View>

                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Icon name='globe-outline' size={24} color={Colors.secondary}></Icon>
                            <Text style={[style.m12, { color: '#FFFFFF50', marginTop: 5 }]}>WORLD RANK</Text>
                            <Text style={[style.b16, { color: '#FFFFFF', lineHeight: 20 }]}>#1,438</Text>
                        </View>

                        <View style={[style.verticaldivider, { backgroundColor: '#FFFFFF50', height: height / 14 }]}></View>

                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Image source={require('../../../assets/image/a30.png')} resizeMode='stretch' style={{ height: 24, width: 24, }}></Image>
                            <Text style={[style.m12, { color: '#FFFFFF50', marginTop: 5 }]}>LOCAL RANK</Text>
                            <Text style={[style.b16, { color: '#FFFFFF', lineHeight: 20 }]}>590</Text>
                        </View>
                    </View>

                    <Top></Top>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}