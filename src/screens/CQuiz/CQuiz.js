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

export default function CQuiz() {
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
                    leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                    trailing={<Icon name='ellipsis-horizontal' size={24} color={Colors.secondary} />}
                />

                <View style={{ padding: 15, backgroundColor: Colors.secondary, marginHorizontal: 10, borderRadius: 20,marginBottom:100 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View style={{ height: height / 4, backgroundColor: '#EFEEFC', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='image-outline' size={60} color={Colors.primary} />
                            <Text style={[style.m16, { color: Colors.primary }]}>Add Cover Image</Text>
                        </View>

                        <Text style={[style.m16, { color: Colors.txt,marginTop:20 }]}>Title</Text>
                        <View style={[style.txtinput,{marginTop:5}]}>
                            <TextInput placeholder='Enter quiz title' placeholderTextColor={Colors.disable}
                            selectionColor={Colors.primary}
                            style={[style.r16,{color:Colors.active,flex:1}]}
                            />
                        </View>

                        <Text style={[style.m16, { color: Colors.txt,marginTop:20 }]}>Quiz Category</Text>
                        <View style={[style.txtinput,{marginTop:5}]}>
                            <TextInput placeholder='Choose quiz category' placeholderTextColor={Colors.disable}
                            selectionColor={Colors.primary}
                            style={[style.r16,{color:Colors.txt,flex:1}]}
                            />
                            <Icon name='chevron-forward' size={24} color={Colors.txt} />
                        </View>

                        <Text style={[style.m16, { color: Colors.txt,marginTop:20 }]}>Description</Text>
                        <View style={{marginTop:5,height:85,paddingHorizontal: 10,borderWidth: 1, borderColor: '#E5E9EF', borderRadius: 20,}}>
                            <TextInput placeholder='Enter quiz description' placeholderTextColor={Colors.disable}
                            selectionColor={Colors.primary}
                            multiline={true}
                            style={[style.r16,{color:Colors.active,flex:1,textAlignVertical:'top'}]}
                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('CCategory')}
                        style={[style.btn,{marginTop:30,marginBottom:10}]}>
                            <Text style={[style.btntxt]}>Add Question</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}