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

export default function CQ4() {
    const navigation = useNavigation();
    const [visible, setvisible] = useState(false)
    const [visible1, setvisible1] = useState(false)
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                    leading={<TouchableOpacity onPress={() => navigation.navigate('CCategory')}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                    trailing={<TouchableOpacity onPress={() => setvisible(true)}>

                        <Modal transparent={true} visible={visible}>
                            <TouchableOpacity onPress={() => { setvisible(false) }} activeOpacity={10} style={{ flex: 1 }}>
                                <View style={{
                                    right: 35, height: 88, width: 131, backgroundColor: Colors.secondary, position: 'absolute', marginTop: 40, borderRadius: 10,
                                    shadowColor: 'black',
                                    shadowOffset: { width: 1, height: 1 },
                                    shadowOpacity: 0.2, borderColor: 'black',
                                    elevation: 10,
                                }}>
                                    <TouchableOpacity onPress={() => { setvisible(false) }}>
                                        <View style={{ marginHorizontal: 10, flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                                            <Icon name='copy-outline' size={20} color={Colors.disable} />
                                            <Text style={[style.r14, { color: Colors.disable, marginLeft: 5 }]}>Duplicate</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { setvisible(false) }} >
                                        <View style={{ marginHorizontal: 10, flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
                                            <Icon name='trash-outline' size={20} color='#EB5757' />
                                            <Text style={[style.r14, { color: '#EB5757', marginLeft: 5 }]}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </TouchableOpacity>
                        </Modal>

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
                                    <View style={[style.icon, { height: 32, width: 32, backgroundColor: Colors.active, borderWidth: 0, marginHorizontal: 30 }]}>
                                        <Text style={[style.r14, { color: Colors.secondary, marginLeft: -2 }]}>4</Text>
                                    </View>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>5</Text>
                                    <Text style={[style.r14, { color: Colors.disable, marginHorizontal: 30 }]}>6</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>7</Text>
                                    <Text style={[style.r14, { color: Colors.disable, marginHorizontal: 30 }]}>8</Text>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>9</Text>
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
                                <Text style={[style.m12, { color: Colors.txt, marginLeft: 5, }]}>10 Sec</Text>
                            </View>
                            <View style={[style.box, { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 }]}>
                                <Text style={[style.m12, { color: Colors.txt, marginRight: 5, }]}>Multiple Answer</Text>
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

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => setvisible1(true)} style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Icons name='plus' size={24} color={Colors.primary} />
                                <Text style={[style.m14, { color: Colors.primary, marginTop: 7 }]}>Add answer</Text>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => setvisible1(true)} style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Icons name='plus' size={24} color={Colors.primary} />
                                <Text style={[style.m14, { color: Colors.primary, marginTop: 7 }]}>Add answer</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => setvisible1(true)} style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Icons name='plus' size={24} color={Colors.primary} />
                                <Text style={[style.m14, { color: Colors.primary, marginTop: 7 }]}>Add answer</Text>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => setvisible1(true)} style={{ flex: 1, borderRadius: 20, alignItems: 'center', backgroundColor: '#EFEEFC', paddingVertical: 15 }}>
                                <Icons name='plus' size={24} color={Colors.primary} />
                                <Text style={[style.m14, { color: Colors.primary, marginTop: 7 }]}>Add answer</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('CQ5')}
                            style={[style.btn, { marginTop: 20, marginBottom: 10 }]}>
                            <Text style={[style.btntxt]}>Add Question</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
                <Modal transparent={true} visible={visible1}>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#000000aa',
                        transparent: 'true'
                    }}>
                        <TouchableOpacity onPress={() => setvisible1(false)} activeOpacity={10}
                            style={[style.modalcontainer, { backgroundColor: 'transparent', width: width - 40, justifyContent: 'center' }]}>
                            <View style={{ padding: 20, backgroundColor: Colors.bg, borderRadius: 20 }}>

                                <Text style={[style.m16, { color: Colors.txt, }]}>Add Answer</Text>

                                <View style={{ marginTop: 10, height: 85, paddingHorizontal: 10, backgroundColor: '#EFEEFC', borderRadius: 20, }}>
                                    <TextInput placeholder='Add answer' placeholderTextColor={Colors.disable}
                                        selectionColor={Colors.primary}
                                        multiline={true}
                                        style={[style.r14, { color: Colors.active, flex: 1, textAlignVertical: 'top' }]}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={[style.m16, { color: Colors.txt, flex: 1 }]}>Correct answer</Text>
                                    <Switch
                                        trackColor={{ false: Colors.disable, true: Colors.primary }}
                                        thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}