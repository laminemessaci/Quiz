import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    main: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bg,
    },
    title: {
        fontSize: 32,
        color: Colors.secondary,
        fontFamily: 'Rubik-SemiBold'
    },
    apptitle: {
        fontSize: 24,
        color: Colors.secondary,
        fontFamily: 'Rubik-Medium'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Rubik-Medium',
        color: Colors.secondary,
    },

    s20: {
        fontSize: 20,
        fontFamily: 'Rubik-SemiBold',
        color: Colors.secondary,
    },
    b20: {
        fontSize: 20,
        fontFamily: 'Rubik-Bold',
        color: Colors.secondary,
    },
    s24: {
        fontSize: 24,
        fontFamily: 'Rubik-SemiBold',
        color: Colors.secondary,
    },
    b24: {
        fontSize: 24,
        fontFamily: 'Rubik-Bold',
        color: Colors.secondary,
    },
    m22: {
        fontSize: 22,
        fontFamily: 'Rubik-Medium',
        color: Colors.secondary,
    },


    r10: {
        fontSize: 10,
        fontFamily: 'Rubik-Regular',
        color: Colors.active,
    },
    m10: {
        fontSize: 10,
        fontFamily: 'Rubik-Medium',
        color: Colors.active,
    },


    r12: {
        fontSize: 12,
        fontFamily: 'Rubik-Regular',
        color: Colors.active,
    },
    m12: {
        fontSize: 12,
        fontFamily: 'Rubik-Medium',
        color: Colors.active,
    },
    b12: {
        fontSize: 12,
        fontFamily: 'Rubik-Bold',
        color: Colors.active,
    },
    s12: {
        fontSize: 12,
        fontFamily: 'Rubik-SemiBold',
        color: Colors.active,
    },


    r14: {
        fontSize: 14,
        fontFamily: 'Rubik-Regular',
        color: Colors.active,
    },
    m14: {
        fontSize: 14,
        fontFamily: 'Rubik-Medium',
        color: Colors.active,
    },
    b14: {
        fontSize: 14,
        fontFamily: 'Rubik-Bold',
        color: Colors.active,
    },
    s14: {
        fontSize: 14,
        fontFamily: 'Rubik-SemiBold',
        color: Colors.active,
    },


    r16: {
        fontSize: 16,
        fontFamily: 'Rubik-Regular',
        color: Colors.active,
    },
    m16: {
        fontSize: 16,
        fontFamily: 'Rubik-Medium',
        color: Colors.active,
    },
    b16: {
        fontSize: 16,
        fontFamily: 'Rubik-Bold',
        color: Colors.active,
    },
    s16: {
        fontSize: 16,
        fontFamily: 'Rubik-SemiBold',
        color: Colors.active,
    },


    r18: {
        fontSize: 18,
        fontFamily: 'Rubik-Regular',
        color: Colors.active,
    },
    m18: {
        fontSize: 18,
        fontFamily: 'Rubik-Medium',
        color: Colors.active,
    },
    b18: {
        fontSize: 18,
        fontFamily: 'Rubik-Bold',
        color: Colors.active,
    },
    s18: {
        fontSize: 18,
        fontFamily: 'Rubik-SemiBold',
        color: Colors.active,
    },


    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        // marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },

    icon:{
        height:24,width:24,borderRadius:30,borderColor:'#E6E6E6',borderWidth:1,justifyContent:'center',alignItems:'center'
    },

    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 56,
        borderRadius: 20,
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Rubik-Medium',
    },
    btnoutline: {
        alignItems: 'center',
        height: 56,
        borderRadius: 20,
        justifyContent: 'center',
        borderColor: '#6A5AE020',
        borderWidth: 1,

    },
    btn2: {
        backgroundColor: '#E6E6E6',
        alignItems: 'center',
        height: 56,
        borderRadius: 20,
        justifyContent: 'center'
    },

    txtinput: {
        paddingHorizontal: 10,
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E5E9EF',
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    inputcontainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 56,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
    },
    search:{
        height:56,
        borderRadius:20,
        backgroundColor:'#0C092A16',
        alignItems: 'center',
        flexDirection: 'row',
    },

    box: {
        padding: 15,
        borderColor: '#EFEEFC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    indicator: {
        height: 8,
        width: 8,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: Colors.bg,

    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Rubik-Regular'
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },


    follow: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },
    following: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.bg1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },

    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        // borderWidth: 0,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Rubik-medium'
    },
    categoryText: {
        fontSize: 19,
        color: Colors.active,
        borderWidth: 0,
        backgroundColor: Colors.secondary,
        borderRadius: 7,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        fontFamily: 'Rubik-Medium'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 0,
        justifyContent: 'space-between',
    },


}
);