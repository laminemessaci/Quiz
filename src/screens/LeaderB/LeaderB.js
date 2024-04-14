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
            tabBarStyle: { backgroundColor: '#0C092A30', shadowColor: Colors.primary, marginTop: 20, marginHorizontal: 10, borderRadius: 40, height: 50, },
            tabBarShowLabel: true,
            swipeEnabled: false,
            tabBarIndicatorStyle: { opacity: 0 },
            tabBarPressOpacity: 10,
            tabBarPressColor: '#6A5AE030',

        }}>

        <Tab.Screen name="Weekly" component={Weekly}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        width: width / 2.55,
                        height: 30,
                        justifyContent: 'center',
                        backgroundColor: focused ? '#9087E5' : null,
                        borderRadius: 30,
                        marginLeft: 12,

                    }}>
                        <Text style={[style.b12, { color: focused ? Colors.secondary : '#E6E6E680', textAlign: 'center', }]}>Weekly</Text>
                    </View>
                ),
                headerShown: false,
            }}
        />
        <Tab.Screen name="AllTime" component={AllTime}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        width: width / 2.55,
                        height: 30,
                        justifyContent: 'center',
                        backgroundColor: focused ? '#9087E5' : null,
                        borderRadius: 30,
                        marginRight: 12
                    }}>
                        <Text style={[style.b12, { color: focused ? Colors.secondary : '#E6E6E680', textAlign: 'center', }]}>All Time</Text>
                    </View>
                ),
                headerShown: false,
            }} />

    </Tab.Navigator>
}

const Weekly = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                <View style={[style.box, { borderWidth: 0, backgroundColor: '#FFB380', borderRadius: 20 }]}>
                    <View style={{ backgroundColor: '#FF9B57', height: 56, width: 56, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[style.apptitle, { color: Colors.secondary }]}>#4</Text>
                    </View>
                    <Text style={[style.m16, { color: Colors.secondary, flex: 1, marginLeft: 12, lineHeight: 25 }]}>You are doing better than 60% of other players!</Text>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                    <View style={{ backgroundColor: '#5144B6', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 15, marginTop: 15 }}>
                        <Icons name='clock-time-four-outline' size={20} color={Colors.bord}></Icons>
                        <Text style={[style.m12, { color: Colors.btn, marginLeft: 10 }]}>06d 23h 00m</Text>
                    </View>
                </View>

                <Image source={require('../../../assets/image/a10.png')} resizeMode='stretch' style={{ width: width - 80, height: height / 2, alignSelf: 'center' }}></Image>

                <Image source={require('../../../assets/image/a25.png')} resizeMode='stretch' style={{ width: width - 40, height: height / 20, alignSelf: 'center' ,marginTop:Platform.OS === 'ios' ? -80 : -105}}></Image>               
                <View style={{ backgroundColor: Colors.bord, paddingHorizontal:15}}>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20,  borderWidth: 0 ,marginTop:Platform.OS === 'ios' ? -7 : -15}]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>1</Text>
                        </View>
                        <Image source={require('../../../assets/image/a12.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Davis Curtis</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>2,569 points</Text>
                        </View>
                        <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>2</Text>
                        </View>
                        <Image source={require('../../../assets/image/a14.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Alena Donin</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>1,469 points</Text>
                        </View>
                        <Image source={require('../../../assets/image/a15.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>3</Text>
                        </View>
                        <Image source={require('../../../assets/image/a16.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Craig Gouse</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>1,053 points</Text>
                        </View>
                        <Image source={require('../../../assets/image/a17.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>4</Text>
                        </View>
                        <Image source={require('../../../assets/image/a18.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Madelyn Dias</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>590 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>5</Text>
                        </View>
                        <Image source={require('../../../assets/image/a19.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Zain Vaccaro</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>6</Text>
                        </View>
                        <Image source={require('../../../assets/image/a20.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Skylar Geidt</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>7</Text>
                        </View>
                        <Image source={require('../../../assets/image/a21.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Justin Bator</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>8</Text>
                        </View>
                        <Image source={require('../../../assets/image/a22.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Cooper Lipshutz</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>9</Text>
                        </View>
                        <Image source={require('../../../assets/image/a23.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Alfredo Septimus</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 ,marginBottom:20}]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>10</Text>
                        </View>
                        <Image source={require('../../../assets/image/a24.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Paityn Aminoff</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const AllTime = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                <Image source={require('../../../assets/image/a26.png')} resizeMode='stretch' style={{ width: width - 80, height: height / 2, alignSelf: 'center' }}></Image>

                <Image source={require('../../../assets/image/a25.png')} resizeMode='stretch' style={{ width: width - 40, height: height / 20, alignSelf: 'center' ,marginTop:Platform.OS === 'ios' ? -80 : -105}}></Image>
                
                <View style={{ backgroundColor: Colors.bord, paddingHorizontal:15}}>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20,  borderWidth: 0 ,marginTop:Platform.OS === 'ios' ? -7 : -15}]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>1</Text>
                        </View>
                        <Image source={require('../../../assets/image/a27.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Adison Press</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>2,569 points</Text>
                        </View>
                        <Image source={require('../../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>2</Text>
                        </View>
                        <Image source={require('../../../assets/image/a28.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Ruben Geidt</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>1,469 points</Text>
                        </View>
                        <Image source={require('../../../assets/image/a15.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>3</Text>
                        </View>
                        <Image source={require('../../../assets/image/a29.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Jakob Levin</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>1,053 points</Text>
                        </View>
                        <Image source={require('../../../assets/image/a17.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>4</Text>
                        </View>
                        <Image source={require('../../../assets/image/a18.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Madelyn Dias</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>590 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>5</Text>
                        </View>
                        <Image source={require('../../../assets/image/a19.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Zain Vaccaro</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>6</Text>
                        </View>
                        <Image source={require('../../../assets/image/a20.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Skylar Geidt</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>7</Text>
                        </View>
                        <Image source={require('../../../assets/image/a21.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Justin Bator</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>8</Text>
                        </View>
                        <Image source={require('../../../assets/image/a22.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Cooper Lipshutz</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 }]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>9</Text>
                        </View>
                        <Image source={require('../../../assets/image/a23.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Alfredo Septimus</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                    <View style={[style.box, { backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 15, borderWidth: 0 ,marginBottom:20}]}>
                        <View style={{ height: 24, width: 24, borderWidth: 1.5, borderColor: Colors.btn, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.disable }]}>10</Text>
                        </View>
                        <Image source={require('../../../assets/image/a24.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginLeft: 12 }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Paityn Aminoff</Text>
                            <Text style={[style.r14, { color: Colors.disable }]}>448 points</Text>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default function LeaderB() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.primary, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Leaderboard'
                        titleStyle={[style.apptitle, { color: Colors.secondary, }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                    // leading={<TouchableOpacity onPress={() => navigation.navigate('Faq')} >
                    //     <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    // </TouchableOpacity>}
                    />

                    <Top></Top>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}